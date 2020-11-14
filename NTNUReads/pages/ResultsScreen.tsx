import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

type ResultsParamList = {
    Details: undefined;
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
    return (
        <View style={styles.container}>
            <Text>Results Screen</Text>
            <Button
                title="Go to DetailsScreen"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

export default ResultsScreen;
