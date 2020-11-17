import React, {useState, useEffect} from "react";
import {ScrollView, SafeAreaView, StyleSheet, View} from "react-native";
import { useRoute } from '@react-navigation/native';
//import {Text} from "react-native-elements";
import { RouteProp } from '@react-navigation/native';
import {DataTable, Subheading, Paragraph} from "react-native-paper";
import url from "../url";
import Constants from 'expo-constants';

import { StackScreenProps } from '@react-navigation/stack';
import Page from "../components/Page";
import ShowModal from "../components/ShowModal";
import Sorting from "../components/Sorting";
import FilterRating from "../components/filter/FilterRating";
import {getUser, removeUser} from "../asyncStorage";

type ResultsParamList = {
    Details: {id: number};
    Results: {searchText: string};

};

type ResultsProps = StackScreenProps<ResultsParamList, 'Details'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        //justifyContent: 'space-between',
        //paddingTop: 40,
        //padding: 10,
        margin: 20,
        marginTop: Constants.statusBarHeight,
    },
    alignment: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        textAlign: "center",
    },
    scrollView: {
        marginHorizontal: 10,
    }
});

function ResultsScreen({navigation}: ResultsProps) {

    //const navDetails = useNavigation<NavigationProp<ResultsParamList, 'Details'>>();

    //route is used to access search word which is sent as parameter
    const route = useRoute<RouteProp<ResultsParamList, 'Results'>>();

    //save search text in parameter search
    const search = route.params.searchText;

    const [searchResult, setSearchResult] = useState<any[]>([])

    //placeholders
    const [count, setCount] = useState(0)
    const [sortBy, setSortBy] = useState<string | null>(null)
    const [filter, setFilter] = useState<any>("")

    // Fetch result from database using the searchText
    useEffect(()=>{
        fetch(`http://${url}:4000/books/search/${search}/${count}/${sortBy}/${filter}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [search, count, sortBy, filter])

    //console.log(searchResult)

    // Pagination
    const [countRes, setCountRes] = useState(0)
    const handlePagination = (ct:number) => {
        setCount(ct)
    }
    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${search}/${filter}`)
            .then(response => response.json())
            .then((data) => {
                setCountRes(data)
            })

    }, [filter, countRes, search])

    const handleSort = (ct:string) => {
        setSortBy(ct)
    }

    const handleFilter = (ct:string) => {
        setFilter(ct)
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Subheading style={{fontSize:16}}>Dette er resultatet fra søket: {search}</Subheading>
                <Paragraph style={{paddingTop:10, paddingBottom:10}}>Klikk på en rad for å få mer detaljer om boka.</Paragraph>
                <View style={styles.alignment}>
                    <Sorting changeSort={handleSort} />
                    <FilterRating changeFilter={handleFilter} />
                </View>
                {/*
                <Button
                    title="Go to DetailsScreen"
                    onPress={() => navDetails.navigate("Details")}
                />
                */}
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>ISBN</DataTable.Title>
                        <DataTable.Title>Forfatter</DataTable.Title>
                        <DataTable.Title>Tittel</DataTable.Title>
                        <DataTable.Title numeric>Vurdering</DataTable.Title>
                    </DataTable.Header>

                    {searchResult.map(item =>
                        //navigation.push pushes a _new_ route to the stack with param isbn ID
                        //will be removed from stack when going back, makes it easy to have own route with specific id for all books
                        <DataTable.Row onPress={() => navigation.push("Details", {id: item._id})} key={item._id}>
                            <DataTable.Title>{item.isbn}</DataTable.Title>
                            <DataTable.Title>{item.authors}</DataTable.Title>
                            <DataTable.Title>{item.title}</DataTable.Title>
                            <DataTable.Title numeric>{item.average_rating}</DataTable.Title>
                        </DataTable.Row>
                    )}

                    {/*This is temporary, only frontend, must include working pagination here*/}
                    {/*See https://callstack.github.io/react-native-paper/data-table-pagination.html*/}
                </DataTable>
                <Page style={{paddingTop:10, marginTop:20}} change={handlePagination} countRes={countRes} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default ResultsScreen;
