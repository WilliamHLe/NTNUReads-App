import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LoginForm from "../components/user/LoginForm";


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
            <Text>Logg inn</Text>
            <LoginForm/>
        </View>
    );
}

export default LoginScreen;
