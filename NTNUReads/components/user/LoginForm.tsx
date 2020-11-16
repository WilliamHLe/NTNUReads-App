import React, {useState} from "react";
import {Alert, StyleSheet, View} from 'react-native'
import {Input, CheckBox, Button, Text,} from 'react-native-elements'
import url from "../../url"
import {saveUser} from "../../asyncStorage"
import {NavigationProp, useNavigation} from "@react-navigation/native";
//import {useSelector} from "react-redux";

type LoginParamList = {
    Profile: undefined;
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        justifyContent: 'center',
    },
    checkbox: {
        backgroundColor: "transparent",
    },
    button: {
        paddingTop: 30,
        width: "90%",
        alignSelf: "center"
    }
});

const LoginForm = () => {

    //not a screen component, use useNavigation hook to access navigation prop
    const navigation = useNavigation<NavigationProp<LoginParamList, 'Profile'>>();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [securityCheck, setSecurityCheck] = useState(false);

    // const theme = useSelector((state:AppState) => state.themeReducer.theme)


    const onFormSubmit = () => {
        //event.preventDefault();

        //Checks if the user has entered a username and password
        if(username === "" || password === "") {
            Alert.alert(
                "Mangler info",
                "Vennligst fyll inn brukernavn og passord.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return
        }

        //Checks if the user has checked the security box
        if(!securityCheck) {
            Alert.alert(
                "Mangler bekreftelse",
                "Vennligst bekreft at du er informert om usikker innlogging.",
                [
                    { text: "OK", onPress: () => console.log("OK Pressed") }
                ],
                { cancelable: false }
            );
            return
        }

        //Finds a user that matches the username and password
        fetch(`http://${url}:4000/user/login/`+{username}.username+`/`+{password}.password+``, {
            method: "get",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(
                (result) =>{
                    console.log(JSON.stringify(result[0]));
                    //If no user if found, alert the user and don't log in
                    if (JSON.stringify(result[0]) === undefined) {
                        Alert.alert(
                            "ERROR",
                            "Ikke gyldig bruker!",
                            [
                                { text: "OK", onPress: () => console.log("OK Pressed") }
                            ],
                            { cancelable: false }
                        );
                    }
                    //If a user is found, log in and redirect to the profile page (put it at top of navigation stack)
                    //NOTE: Logging out is done by button in Profile
                    else {
                        saveUser(result[0])
                        //alert("Du har logget inn!");
                        navigation.reset({
                            index: 0,
                            routes: [{ name: 'Profile' }],
                        });

                    }
                }
            );

    }
    return (
        <View style={styles.container}>
            <View>
                <Input placeholder="Brukernavn" onChangeText={(username)=>setUsername(username)}/>
                <Input placeholder="Passord" secureTextEntry={true} onChangeText={(password)=>setPassword(password)} />
                <CheckBox containerStyle={styles.checkbox}
                    title='Jeg er informert om at denne innloggingen er totalt usikker og kun til demonstrasjon.'
                    checked={securityCheck}
                    onPress={() => setSecurityCheck(!securityCheck)}
                />
                <Button title="Logg inn" style={styles.button} onPress={() => onFormSubmit()}/>
            </View>
        </View>
    )
}

export default LoginForm
