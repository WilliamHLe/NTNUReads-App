import React, {useState} from 'react';
import {StyleSheet, View, Alert} from "react-native";
import { Text } from 'react-native-elements';

import { StackScreenProps } from '@react-navigation/stack';
import {SearchBar, Button} from "react-native-elements";


type SearchParamList = {
    Resultater: {searchText: string};
};

type Props = StackScreenProps<SearchParamList, "Resultater">;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40
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


function SearchScreen({navigation}: Props) {

    const [searchText, setSearchText] = useState<string>("")

    const updateSearch = (searchText: string) => {
        setSearchText(searchText);
    };

    const handleSearchSubmit = () => {

        if (searchText !== "") {
            navigation.navigate("Resultater", {
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
                    //platform={"ios"}
                    containerStyle={{width: "100%" }}
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
                        onPress={() => navigation.navigate("Resultater", {searchText: "Harry Potter"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="J.R.R. Tolkien"
                        onPress={() => navigation.navigate("Resultater", {searchText: "J.R.R. Tolkien"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Agatha Christie"
                        onPress={() => navigation.navigate("Resultater", {searchText: "Agatha Christie"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Oscar Wilde"
                        onPress={() => navigation.navigate("Resultater", {searchText: "Oscar Wilde"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Shakespeare"
                        onPress={() => navigation.navigate("Resultater", {searchText: "Shakespeare"})}
                    />
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        title="Jane Austen"
                        onPress={() => navigation.navigate("Resultater", {searchText: "Jane Austen"})}
                    />
                </View>
            </View>
        </View>
    );
}

export default SearchScreen;
