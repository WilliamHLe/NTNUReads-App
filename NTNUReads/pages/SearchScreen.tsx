import React, {useState} from 'react';
import {StyleSheet, View, Alert} from "react-native";
import {Searchbar, Button, Subheading} from "react-native-paper";
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

            <Subheading>Søk etter din favorittbok:</Subheading>

            <View style={styles.searchBar}>
                <Searchbar
                    placeholder="Tittel, forfatter eller ISBN"
                    onChangeText={updateSearch}
                    value={searchText}
                />
            </View>
            <View style={styles.searchButton}>
                <Button onPress={handleSearchSubmit} mode={"contained"}>
                    Søk
                </Button>
            </View>
            <Subheading style={{textAlign:"center", paddingBottom:10, paddingTop:50}}>Populære søk</Subheading>
            <View style={styles.popularSearchesContainer}>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "Harry Potter"})}
                        mode={"contained"}
                        compact={true}
                    >Harry Potter</Button>
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "J.R.R. Tolkien"})}
                        mode={"contained"}
                        compact={true}
                    >J.R.R. Tolkien</Button>
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "Agatha Christie"})}
                        mode={"contained"}
                        compact={true}
                    >Agatha Christie</Button>
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "Oscar Wilde"})}
                        mode={"contained"}
                        compact={true}
                    >Oscar Wilde</Button>
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "Shakespeare"})}
                        mode={"contained"}
                        compact={true}
                    >Shakespeare</Button>
                </View>
                <View style={styles.popularSearchesButton}>
                    <Button
                        onPress={() => navigation.navigate("Results", {searchText: "Jane Austen"})}
                        mode={"contained"}
                        compact={true}
                    >Jane Austen</Button>
                </View>
            </View>
        </View>
    );
}

export default SearchScreen;
