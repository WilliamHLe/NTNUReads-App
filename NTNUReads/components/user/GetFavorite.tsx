import {
    View,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert,
} from 'react-native'
import {Input, CheckBox, Button,} from 'react-native-elements'
import React, {useEffect, useState} from "react";

const GetFavorite = (props:any) => {
    const book = props.book;
    const [Result, setResult] = useState<any>()

    //Checks the database if the user has the book marked as favorite
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch("http://localhost:4000/favorite/find/"+user._id+"/"+book+"")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setResult(data)
            })
    },[book])

    //Adds the book to favorite after pressing the button
    const handleAddFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/add', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then(response => response.json())
            .then((data) => {
                setResult(data)
            })
            .then( (response) => {
                console.log(Result)
                alert("Favoritt lagt til!")
            });
    }

    //Removes the book as favorite after pressing the button
    const handleRemoveFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/remove', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then(response => response.json())
            .then((data) => {
                setResult(data)
            })
            .then( (response) => {
                console.log(Result)
                alert("Favoritt fjernet!")
            });
    }

    // If the user has the book marked as favorite, show button to remove it
    if(Result != null) {
        return (
            <View>
                <Button title="Fjern favoritt" onPress={() => handleRemoveFavoriteSubmit}/>
            </View>
        )
        // If not, show button to add it as favorite
    } else {
        return (
            <View>
                <Button title="Legg til favoritt" onPress={() => handleAddFavoriteSubmit} />
            </View>
        )
    }

}

export default GetFavorite;