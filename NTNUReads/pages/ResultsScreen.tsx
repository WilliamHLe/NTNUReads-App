import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {NavigationProp, useNavigation, useRoute} from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';

import { StackScreenProps } from '@react-navigation/stack';

type ResultsParamList = {
    Details: undefined;
    Results: {searchText: string};

};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function ResultsScreen() {

    const navDetails = useNavigation<NavigationProp<ResultsParamList, 'Details'>>();

    //route is used to access search word which is sent as parameter
    const route = useRoute<RouteProp<ResultsParamList, 'Results'>>();

    return (
        <View style={styles.container}>
            <Text>Dette er resultatet fra søket: {route.params.searchText}</Text>
            <Button
                title="Go to DetailsScreen"
                onPress={() => navDetails.navigate("Details")}
            />
        </View>
    );
}

export default ResultsScreen;
