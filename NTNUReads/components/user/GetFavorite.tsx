import {
    View,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert,
} from 'react-native'
import {Input, CheckBox,} from 'react-native-elements'
import {Button} from "react-native-paper"
import React, {useEffect, useState} from "react";
import {getUser} from "../../asyncStorage";
import url from "../../url";

const GetFavorite = (props:any) => {
    const book = props.book;
    const [Result, setResult] = useState<any>()

    //Checks the database if the user has the book marked as favorite
    useEffect(()=>{
        getUser().then(res => {
            if (res != null) {
                const us = JSON.parse(res)
                fetch("http://"+url+":4000/favorite/find/" + us._id + "/" + book + "")
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data);
                        setResult(data)
                    })
            }
        })
    },[book])

    //Adds the book to favorite after pressing the button
    const handleAddFavoriteSubmit = () => {

        getUser().then(res => {
            if (res != null) {
                const us = JSON.parse(res)
                fetch('http://'+url+':4000/favorite/add', {
                    method: "put",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        user: us._id,
                        book: book
                    })
                })
                    .then(response => response.json())
                    .then((data) => {
                        setResult(data)
                    })
                    .then((response) => {
                        console.log(Result)
                        alert("Favoritt lagt til!")
                    });
            }
        })
    }

    //Removes the book as favorite after pressing the button
    const handleRemoveFavoriteSubmit = () => {

        getUser().then(res => {
            if (res != null) {
                const us = JSON.parse(res)
                fetch('http://'+url+':4000/favorite/remove', {
                    method: "put",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },

                    body: JSON.stringify({
                        user: us._id,
                        book: book
                    })
                })
                    .then(response => response.json())
                    .then((data) => {
                        setResult(data)
                    })
                    .then((response) => {
                        console.log(Result)
                        alert("Favoritt fjernet!")
                    });
            }
        })
    }

    // If the user has the book marked as favorite, show button to remove it
    if(Result != null) {
        return (
            <View>
                <Button mode="contained" onPress={() => handleRemoveFavoriteSubmit()}>Fjern favoritt</Button>
            </View>
        )
        // If not, show button to add it as favorite
    } else {
        return (
            <View>
                <Button mode="contained" onPress={() => handleAddFavoriteSubmit()}>Legg til favoritt</Button>
            </View>
        )
    }

}

export default GetFavorite;