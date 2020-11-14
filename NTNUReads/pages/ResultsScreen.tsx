import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import { useRoute } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { StackScreenProps } from '@react-navigation/stack';

type ResultsParamList = {
    Details: undefined;
};

type SearchParamList = {
    Results: {searchText: string};
};

type Props = StackScreenProps<ResultsParamList, 'Details'>;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function ResultsScreen({navigation}: Props) {

    //route is used to access search word which is sent as parameter
    const route = useRoute<RouteProp<SearchParamList, 'Results'>>();

    return (
        <View style={styles.container}>
            <Text>Dette er resultatet fra søket: {route.params.searchText}</Text>
            <Button
                title="Go to DetailsScreen"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

export default ResultsScreen;
