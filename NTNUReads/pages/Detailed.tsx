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
    /*
    <div className={"page-wrapper-"+theme}>
            {book.map(item =>
                <div>
                    <h1>{item.title}</h1>
                    <br/>
                    <ListGroup>
                        <ListGroup.Item variant={theme}><b>Forfatter:</b> {item.authors}</ListGroup.Item>
                        <ListGroup.Item variant={theme}><b>ISBN/ISBN13:</b> {item.isbn} / {item.isbn13}</ListGroup.Item>
                        <ListGroup.Item variant={theme}><b>Utgivelsesdato:</b> {item.publication_date.substring(0,10)}</ListGroup.Item>
                        <ListGroup.Item variant={theme}><b>Utgiver:</b> {item.publisher}</ListGroup.Item>
                        <ListGroup.Item variant={theme}><b>Språk:</b> {item.language_code}</ListGroup.Item>
                        <ListGroup.Item variant={theme}><b>Vurdering:</b> {item.average_rating} av 5 ({item.ratings_count} vurderinger totalt)</ListGroup.Item>
                    </ListGroup>
                    <br/>
                    <AddFavorite book={id}/>
                    <br/><br/>
                    <h4>Opprett en anmeldelse: </h4>
                    <CreateReview book={item._id}/>
                </div>
            )}
            <br/>
            <h4>Anmeldelser</h4>
            <Table striped bordered hover responsive variant={theme}>
                <thead>
                <tr>
                    <th>Bruker</th>
                    <th>Score</th>
                    <th>Review</th>
                    <th>Dato lagt til</th>
                </tr>
                </thead>
                <tbody>
                {review.map(item =>
                   <tr>
                       <td>{item.name}</td>
                       <td>{item.rating}</td>
                       <td>{item.review}</td>
                       <td>{item.createdAt}</td>
                   </tr>
                )}
                </tbody>
            </Table>
        </div>
     */



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            {book.map(item =>
                <View>
                    <Headline>{item.title}</Headline>
                            <List.Item title={"Forfatter: " + item.authors}/>
                            <Divider />
                            <List.Item title={'ISBN: ' + item.isbn}/>
                            <Divider />
                            <List.Item title={'ISBN13: ' + item.isbn13}/>
                            <Divider />
                            <List.Item title={'Utgivelsesdato: ' + item.publication_date.substring(0, 10)}/>
                            <Divider />
                            <List.Item title={'Utgiver: ' + item.publisher}/>
                            <Divider />
                            <List.Item title={'Språk: ' + item.language_code}/>
                            <Divider />
                    <AddFavorite book={item._id}/>

                </View>
            )}
            <CreateReview book={id}/>
            </ScrollView>
        </SafeAreaView>

    );
}

export default Detailed;
