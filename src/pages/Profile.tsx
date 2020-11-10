import React from 'react';
import {useHistory} from "react-router-dom"
import UserPage from "../components/user/UserPage";

const Profile = () => {

    const history = useHistory();

    //If the user is logged in, display the profile page
    if(sessionStorage.getItem("user")) {
        console.log(sessionStorage.getItem("user"))
        return <UserPage />
        //If not, redirect to the login page
    } else {
        history.push("/login");
        return <div></div>
    }
}

export default Profile;
