import React, {useState} from "react";
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert,
} from 'react-native'
import {Input,CheckBox,Button,} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import url from "../../url"
import {saveUser,getUser,removeUser} from "../../asyncStorage"
//import {useHistory} from "react-router-dom";
//import {useSelector} from "react-redux";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [securityCheck, setSecurityCheck] = useState(false);
    //const history = useHistory();

    // const theme = useSelector((state:AppState) => state.themeReducer.theme)

    //If the user is already logged in, log out and redirect to the home page
    getUser().then(res => {
        if(res != null) {
            removeUser()
            console.log(res)
            alert("Du har logget ut!");
            //setLoggedIn(false);
            //history.push("/");
        }
    })


    const onFormSubmit = () => {
        //event.preventDefault();

        //Checks if the user has entered a username and password
        if(username === "" || password === "") {
            alert("Vennligst fyll inn brukernavn og passord")
            return
        }

        //Checks if the user has checked the security box
        if(!securityCheck) {
            alert("Vennligst bekreft at du er informert om usikker innlogging")
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
                        alert("ERROR: ikke gyldig bruker");
                    }
                    //If a user is found, log in and redirect to the home page
                    else {
                        saveUser(result[0])
                        alert("Du har logget inn!");
                        //sessionStorage.setItem("user",JSON.stringify(result[0]));
                        //setLoggedIn(true);
                        //history.push("/");
                    }
                }
            );

    }
    /* <div className={"page-wrapper-"+theme}>

            <Form onSubmit={onFormSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Brukernavn</Form.Label>
                    <Form.Control type="username" placeholder="Brukernavn" onChange={(e)=>setUsername(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Tips: willi1 er et fint brukernavn
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Passord</Form.Label>
                    <Form.Control type="password" placeholder="Passord" onChange={(e)=>setPassword(e.target.value)}/>
                    <Form.Text className="text-muted">
                        Tips: willi123 er et fint passord
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Jeg er informert om at denne innloggingen er totalt usikker og kun til demonstrasjon." onChange={() => setSecurityCheck(!securityCheck)}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Logg inn
                </Button>
            </Form>

        </div> */
    return (
        <View>
            <View>
                <Input placeholder="Brukernavn" onChangeText={(username)=>setUsername(username)}/>
                <Input placeholder="Passord" secureTextEntry={true} onChangeText={(password)=>setPassword(password)} />
                <CheckBox
                    title='Jeg er informert om at denne innloggingen er totalt usikker og kun til demonstrasjon.'
                    checked={securityCheck}
                    onPress={() => setSecurityCheck(!securityCheck)}
                />
                <Button title="Logg inn" onPress={() => onFormSubmit()}/>
            </View>
        </View>
    )
}

export default LoginForm
