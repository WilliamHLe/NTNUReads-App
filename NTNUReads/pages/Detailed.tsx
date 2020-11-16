import React, {useEffect, useState} from "react";
// import {Table} from 'react-bootstrap';
import {
    View,
    TextInput,
    StyleSheet,
    ViewStyle,
    TextStyle,
    TextInputProps,
    Alert,
} from 'react-native'
import {Input,CheckBox,Button,Text,ListItem} from 'react-native-elements'
//import {useParams} from "react-router-dom";
//import {ListGroup} from "react-bootstrap";
//import AddFavorite from "../components/user/AddFavorite"
//import {useSelector} from "react-redux";
//import {AppState} from "../store/rootStore";
//import CreateReview from "../components/review/CreateReview";
import {saveUser,getUser,removeUser} from "../asyncStorage"
import AddFavorite from "../components/user/AddFavorite";
import url from "../url"

const Detailed = () => {

   // const { id } = useParams()
    const id  = "5f805fdf55a95a83a001a5b4"
    const [book, setBook] = useState<any[]>([])
    const [review, setReview] = useState<any[]>([])

    //const theme = useSelector((state:AppState) => state.themeReducer.theme)

    //Gets info about the selected book and all the reviews for the book
    useEffect(()=>{
        fetch(`http://${url}:4000/books/${id}`)
            .then(response => response.json())
            .then((data) => {
                setBook(data)
            })
        fetch(`http://${url}:4000/review/${id}`)
            .then(response => response.json())
            .then((data) => {
                setReview(data)
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
        <View>
            {book.map(item =>
                <View>
                    <Text h1>{item.title}</Text>
                    <ListItem bottomDivider>
                        <ListItem.Content>
                            <ListItem.Title><b>Forfatter:</b> {item.authors}</ListItem.Title>
                            <ListItem.Title><b>ISBN/ISBN13:</b> {item.isbn} / {item.isbn13}</ListItem.Title>
                            <ListItem.Title><b>Utgivelsesdato:</b> {item.publication_date.substring(0,10)}</ListItem.Title>
                            <ListItem.Title><b>Utgiver:</b> {item.publisher}</ListItem.Title>
                            <ListItem.Title><b>Språk:</b> {item.language_code}</ListItem.Title>
                            <ListItem.Title><b>Vurdering:</b> {item.average_rating} av 5 ({item.ratings_count} vurderinger totalt)</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <AddFavorite book={id} />
                </View>
            )}
        </View>

    );
}

export default Detailed;
