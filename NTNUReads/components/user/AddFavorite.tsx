import React from "react";
import {
    View,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert,
} from 'react-native'
import GetFavorite from "./GetFavorite"

const AddFavorite = (props:any) => {
    const book = props.book;

    //Checks if the user is logged in, and displays button to add or remove the book as favorite
    if(sessionStorage.getItem("user")) {
        return <GetFavorite book={book} />
        //If not, don't display anything
    } else {
        return (
            <View>

            </View>
        )
    }
}

export default AddFavorite;
