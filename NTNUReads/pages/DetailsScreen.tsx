import {StyleSheet, Text, View} from "react-native";
import React from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

function DetailsScreen() {
    return (
        <View style={styles.container}>
            <Text>Details Screen</Text>
        </View>
    );
}

export default DetailsScreen;
