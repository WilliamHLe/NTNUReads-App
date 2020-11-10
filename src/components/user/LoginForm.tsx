import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Form, Button} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AppState} from "../../store/rootStore";

const LoginForm = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [securityCheck, setSecurityCheck] = useState(false);
    const history = useHistory();

    const theme = useSelector((state:AppState) => state.themeReducer.theme)

    //If the user is already logged in, log out and redirect to the home page
    if(sessionStorage.getItem("user")) {
        sessionStorage.removeItem("user");
        alert("Du har logget ut!");
        //setLoggedIn(false);
        history.push("/");
    }



    const onFormSubmit = (event:any) => {
        event.preventDefault();

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
        fetch('http://localhost:4000/user/login/'+{username}.username+'/'+{password}.password+'', {
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
                        sessionStorage.setItem("user",JSON.stringify(result[0]));
                        alert("Du har logget inn!");
                        //setLoggedIn(true);
                        history.push("/");
                    }
                }
            );

    }

    return (
        <div className={"page-wrapper-"+theme}>

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

        </div>
    )
}

export default LoginForm
