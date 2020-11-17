import React, {useEffect, useState} from "react";
import {Alert, StyleSheet, View,ScrollView, SafeAreaView} from 'react-native'
import {
    TextInput,
    RadioButton,
    Button,
    Text,
    Subheading,
    Portal,
    Modal,
    Card,
    Paragraph,
    Divider
} from "react-native-paper";
import url from "../../url";

/**
 * Adding review to database for a specific book
 */

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
    },
    radioGroup: {
        alignItems: 'flex-start',
        flexDirection:'row',
        justifyContent: 'space-around',
        margin:0,
        alignSelf: "center"
    }
});

const CreateReview = (props:any) => {
    const book = props.book;

    const [name, setName] = useState("")
    const [rating, setRating]    = useState("1")
    const [review, setReview] = useState("")
    const [reviews, setReviews] = useState<any[]>([])
    const [visible, setVisible] = useState(false)

    useEffect(()=>{
        fetch(`http://${url}:4000/review/${book}`)
            .then(response => response.json())
            .then((data) => {
                setReviews(data)
            })
    },[reviews])

    const onFormSubmit = () => {
        if(name == "" || review == "") {
            alert("Fyll inn navn og anmeldelsetekst")
            return
        }
        fetch(`http://${url}:4000/review/add`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: name,
                rating: rating,
                review: review,
                book: book
            })
        })
            .then( (response) => {
                console.log("Success")
            });
    }

    const toggleModal = () => {
        setVisible(!visible)
    }

    return(
        <View>
            <Subheading style={{fontSize:16}}>Skriv en anmeldelse:</Subheading>
            <TextInput label={"Navn"} placeholder="Navn" value={name} onChangeText={(name)=>setName(name)}></TextInput>
            <RadioButton.Group onValueChange={newValue => setRating(newValue)} value={rating} >
                    <RadioButton.Item label="1" value="1" />
                    <RadioButton.Item label="2" value="2" />
                    <RadioButton.Item label="3" value="3" />
                    <RadioButton.Item label="4" value="4" />
                    <RadioButton.Item label="5" value="5" />
            </RadioButton.Group>
            <TextInput multiline={true} numberOfLines={4} label={"Anmeldelse"} placeholder="Anmeldelse" value={review} onChangeText={(review)=>setReview(review)}></TextInput>
            <Button style={styles.button} mode={"contained"} onPress={() => onFormSubmit()}>Legg til anmeldelse
            </Button>
            <Portal>
                <Modal visible={visible} onDismiss={()=>toggleModal()} contentContainerStyle={{marginHorizontal:20,marginVertical:40}}>
                    <ScrollView >
                        {reviews.map(item =>
                            <View key={item._id}>
                                <Card>
                                    <Card.Content>
                                        <Paragraph>{item.review}</Paragraph>
                                        <View><Paragraph style={{fontSize:10}}>{item.rating}/5, {item.name}, {item.createdAt.substring(0,10)}</Paragraph></View>
                                    </Card.Content>
                                </Card>
                                <Divider/>
                            </View>
                        )}
                    </ScrollView>
                    <Button style={styles.button} mode={"contained"} onPress={() => toggleModal()}>
                        Lukk
                    </Button>
                </Modal>
            </Portal>
            <Divider/>
            <Button style={styles.button} mode={"contained"} onPress={() => toggleModal()}>
                Vis anmeldelser
            </Button>
        </View>
    )
}

export default CreateReview

