import React, {useState, useEffect} from "react";
import {StyleSheet, View} from "react-native";
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text} from "react-native-elements";
import { RouteProp } from '@react-navigation/native';
import {DataTable} from "react-native-paper";
import url from "../url";

import { StackScreenProps } from '@react-navigation/stack';

type ResultsParamList = {
    Details: undefined;
    Results: {searchText: string};

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        //justifyContent: 'center',
        paddingTop: 40,
        padding: 10
    },
});

function ResultsScreen() {

    const navDetails = useNavigation<NavigationProp<ResultsParamList, 'Details'>>();

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

    return (
        <View style={styles.container}>
            <Text style={{fontSize:16}}>Dette er resultatet fra søket: {search}</Text>
            <Text style={{paddingTop:10, paddingBottom:10}}>Klikk på en rad for å få mer detaljer om boka.</Text>
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
                    <DataTable.Row onPress={() => navDetails.navigate("Details")}>
                        <DataTable.Title>{item.isbn}</DataTable.Title>
                        <DataTable.Title>{item.authors}</DataTable.Title>
                        <DataTable.Title>{item.title}</DataTable.Title>
                        <DataTable.Title numeric>{item.average_rating}</DataTable.Title>
                    </DataTable.Row>
                )}

                {/*
                <DataTable.Row onPress={() => navDetails.navigate("Details")}>
                    <DataTable.Cell>2839128937</DataTable.Cell>
                    <DataTable.Cell>J.K. Rowling</DataTable.Cell>
                    <DataTable.Cell>Harry Potter</DataTable.Cell>
                    <DataTable.Cell>4.8</DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                    <DataTable.Cell>8397128824</DataTable.Cell>
                    <DataTable.Cell>J.R.R. Tolkien</DataTable.Cell>
                    <DataTable.Cell>The Hobbit</DataTable.Cell>
                    <DataTable.Cell>3.5</DataTable.Cell>
                </DataTable.Row>
                */}

                {/*This is temporary, only frontend, must include working pagination here*/}
                {/*See https://callstack.github.io/react-native-paper/data-table-pagination.html*/}
                <DataTable.Pagination
                    page={1}
                    numberOfPages={3}
                    onPageChange={page => {
                        console.log(page);
                    }}
                    label="1-2 of 6"
                />
            </DataTable>
        </View>
    );
}

export default ResultsScreen;
