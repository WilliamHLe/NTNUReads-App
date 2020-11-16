import React, {useState} from 'react';
import {StyleSheet, View, Alert} from "react-native";
import { Text } from 'react-native-elements';

import {SearchBar, Button} from "react-native-elements";
import {StackScreenProps} from "@react-navigation/stack";


type SearchParamList = {
    Results: {searchText: string};
};

type SearchProps = StackScreenProps<SearchParamList, 'Results'>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        //justifyContent: 'center',
    },
    searchBar: {
        paddingTop: 10
    },
    searchButton: {
        padding: 10,
    },
    popularSearchesContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'space-around',
        padding: 10,

    },
    popularSearchesButton: {
        maxWidth: "50%",
        padding: 5

    }
});


function SearchScreen({navigation}: SearchProps) {

    //const navResults = useNavigation<NavigationProp<SearchParamList, 'Results'>>();

    const [searchText, setSearchText] = useState<string>("")

    const updateSearch = (searchText: string) => {
        setSearchText(searchText);
    };

    const handleSearchSubmit = () => {

        if (searchText !== "") {
            navigation.navigate("Results", {
                searchText: searchText
            })
        } else {
            Alert.alert(
                "Mangler søketekst",
                "Vennligst fyll inn søketekst!",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
        }

    };


    return (
        <View style={styles.container}>

            <Text h4>Søk etter din favorittbok:</Text>

            <View style={styles.searchBar}>
                <SearchBar
                    placeholder="Tittel, forfatter eller ISBN"
                    platform={"ios"}    //searchbar design is weird if we don't use a platform
                    containerStyle={{width: "100%", backgroundColor:"transparent"}}
                    onChangeText={updateSearch}
                    value={searchText}
                />
            </View>
            <View style={styles.searchButton}>
                <Button
                    title="Søk"
                    onPress={handleSearchSubmit}
                />
            </View>
            <Text h4 style={{textAlign:"center", paddingBottom:10, paddingTop:50}}>Populære søk</Text>
            <View style={styles.popularSearchesContainer}>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Harry Potter"
                        onPress={() => navigation.navigate("Results", {searchText: "Harry Potter"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="J.R.R. Tolkien"
                        onPress={() => navigation.navigate("Results", {searchText: "J.R.R. Tolkien"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Agatha Christie"
                        onPress={() => navigation.navigate("Results", {searchText: "Agatha Christie"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Oscar Wilde"
                        onPress={() => navigation.navigate("Results", {searchText: "Oscar Wilde"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Shakespeare"
                        onPress={() => navigation.navigate("Results", {searchText: "Shakespeare"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Jane Austen"
                        onPress={() => navigation.navigate("Results", {searchText: "Jane Austen"})}
                    />
                </View>
            </View>
        </View>
    );
}

export default SearchScreen;
