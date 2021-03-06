import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import LoginForm from "../components/user/LoginForm";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
});


function LoginScreen() {

    return (
        <View style={styles.container}>
            <LoginForm/>
        </View>
    );
}

export default LoginScreen;
