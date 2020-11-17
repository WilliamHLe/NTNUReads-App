import React, {useState} from "react";
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
import {getUser} from "../../asyncStorage";


const AddFavorite = (props:any) => {
    const book = props.book;
    const [isLoggedIn,setStatus] = useState<any>(false)
    //Checks if the user is logged in, and displays button to add or remove the book as favorite
    getUser().then(res => {
        if (res != null) {
            setStatus(true)
        }
    })
    if (isLoggedIn) {
        return <GetFavorite book={book} />
    } else {
        return <View></View>
    }
}

export default AddFavorite;
