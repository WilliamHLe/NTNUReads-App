import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

type SearchParamList = {
    Results: undefined;
};

type Props = StackScreenProps<SearchParamList, 'Results'>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function SearchScreen({navigation}: Props) {
    return (
        <View style={styles.container}>

            <Text>Search Screen</Text>
            <Button
                title="Go to ResultsScreen"
                onPress={() => navigation.navigate("Results")}
            />
        </View>
    );
}

export default SearchScreen;
