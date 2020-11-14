import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import {SearchBar, Button} from "react-native-elements";


type SearchParamList = {
    Results: {searchText: string};
};

type Props = StackScreenProps<SearchParamList, "Results">;


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
        padding: 10
    }
});


function SearchScreen({navigation}: Props) {

    const [searchText, setSearchText] = useState<string>("")

    const updateSearch = (searchText: string) => {
        setSearchText(searchText);
    };

    return (
        <View style={styles.container}>

            <Text>Søk etter din favorittbok:</Text>

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
                    onPress={() => navigation.navigate("Results", {
                        searchText: searchText
                    })}
                />
            </View>
        </View>
    );
}

export default SearchScreen;
