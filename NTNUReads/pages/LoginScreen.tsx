import React from 'react';
import {StyleSheet, Text, View} from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function LoginScreen() {
    return (
        <View style={styles.container}>
            <Text>Login Screen</Text>
        </View>
    );
}

export default LoginScreen;
