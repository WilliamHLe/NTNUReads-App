import React, {useEffect, useState} from "react";
// import {Table} from 'react-bootstrap';
import {
    View,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert, ScrollView, SafeAreaView,
} from 'react-native'
import {Headline, Divider, List, DataTable, Modal, Card, Paragraph, Button, Portal, Provider} from 'react-native-paper';
import {Input,CheckBox,Text,Overlay} from 'react-native-elements'
//import {useParams} from "react-router-dom";
//import {ListGroup} from "react-bootstrap";
//import AddFavorite from "../components/user/AddFavorite"
//import {useSelector} from "react-redux";
//import {AppState} from "../store/rootStore";
import CreateReview from "../components/review/CreateReview";
import {saveUser,getUser,removeUser} from "../asyncStorage"
import AddFavorite from "../components/user/AddFavorite";
import url from "../url"
//import CreateReview from "../../src/components/review/CreateReview";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        justifyContent: 'center',
    },
    checkboxContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'space-around',
        paddingTop: 20,
        paddingBottom: 20
    },
    button: {
        width: "90%",
        alignSelf: "center"
    },
    scrollView: {
        marginHorizontal: 10,
    }
});


const Detailed = (props:any) => {

   // const { id } = useParams()
    const id  = props.book;
    const [book, setBook] = useState<any[]>([])


    //const theme = useSelector((state:AppState) => state.themeReducer.theme)

    //Gets info about the selected book and all the reviews for the book
    useEffect(()=>{
        fetch(`http://${url}:4000/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                setBook(data)
            })
    },[id])



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {book.map(item =>
                <View key={item}>
                    <Headline key={item.title}>{item.title}</Headline>
                            <List.Item title={"Forfatter: " + item.authors} key={item.authors}/>
                            <Divider key={1}/>
                            <List.Item title={'ISBN: ' + item.isbn} key={item.isbn}/>
                            <Divider key={2}/>
                            <List.Item title={'ISBN13: ' + item.isbn13} key={item.isbn13}/>
                            <Divider key={3}/>
                            <List.Item title={'Utgivelsesdato: ' + item.publication_date.substring(0, 10)} key={item.publication_date}/>
                            <Divider key={4}/>
                            <List.Item title={'Utgiver: ' + item.publisher} key={item.publisher}/>
                            <Divider key={5}/>
                            <List.Item title={'Språk: ' + item.language_code} key={item.language_code}/>
                            <Divider key={6}/>
                    <AddFavorite book={item._id}/>

                </View>
            )}
            <CreateReview book={id}/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Detailed;
