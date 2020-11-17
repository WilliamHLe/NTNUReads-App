import React, {useEffect, useState} from "react";
import {
    View,
    StyleSheet,
    ScrollView,
    SafeAreaView,
} from 'react-native'
import {Headline, Divider, List} from 'react-native-paper';
import CreateReview from "./review/CreateReview";
import AddFavorite from "./user/AddFavorite";
import url from "../url"

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
                <View key={item._id}>
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
