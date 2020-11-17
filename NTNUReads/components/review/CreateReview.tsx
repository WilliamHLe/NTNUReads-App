import React, {useEffect, useState} from "react";
import {StyleSheet, View,ScrollView} from 'react-native'
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
        alignSelf: "center",
    },
    scrollView: {
        marginHorizontal: 10,
    },
    radioItem: {
        width: 50,
        paddingRight:5
    }
});

const CreateReview = (props:any) => {
    const book = props.book;

    const [name, setName] = useState("")
    const [rating, setRating]    = useState("1")
    const [review, setReview] = useState("")
    const [reviews, setReviews] = useState<any[]>([])
    const [visible, setVisible] = useState(false)

    // Fetches the reviews for the book
    useEffect(()=>{
        let mounted = true
        fetch(`http://${url}:4000/review/${book}`)
            .then(response => response.json())
            .then((data) => {
                if (mounted) setReviews(data)
            })
        return () => {
            mounted = false;
        };
    },[reviews])

    const onFormSubmit = () => {
        // Return an error if no name or review text has been entered
        if(name == "" || review == "") {
            alert("Fyll inn navn og anmeldelsetekst")
            return
        }
        // Return an error if the review text is bigger than the specified size
        if(review.length > 250) {
            alert("Anmeldelsen må være maks 250 tegn")
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
                setName("")
                setReview("")
                console.log("Success")
            });
    }

    // Toggles the visibility of the modal for reviews
    const toggleModal = () => {
        setVisible(!visible)
    }

    return(
        <View>
            <Subheading style={{fontSize:16, paddingTop:20}}>Skriv en anmeldelse:</Subheading>
            <TextInput label={"Navn"} placeholder="Navn" value={name} onChangeText={(name) => setName(name)}/>
            <View style={{flexDirection:"row", paddingTop:5, paddingBottom:10}}>
            <RadioButton.Group onValueChange={newValue => setRating(newValue)} value={rating}  >
                <View style={{flexDirection:"row"}}>
                    <RadioButton.Item style={styles.radioItem} label="1" value="1" />
                    <RadioButton.Item style={styles.radioItem} label="2" value="2" />
                    <RadioButton.Item style={styles.radioItem} label="3" value="3" />
                    <RadioButton.Item style={styles.radioItem} label="4" value="4" />
                    <RadioButton.Item style={styles.radioItem} label="5" value="5" />
                </View>
            </RadioButton.Group>
            </View>
            <TextInput multiline={true} numberOfLines={4} label={"Anmeldelse (maks 250 tegn)"} placeholder="Anmeldelse" value={review} onChangeText={(review) => setReview(review)}/>
            <Text style={{paddingBottom: 20}}>{review.length}/250</Text>
            <Button style={styles.button} mode={"contained"} onPress={() => onFormSubmit()}>Legg til anmeldelse
            </Button>
            <Portal>
                <Modal visible={visible} onDismiss={()=>toggleModal()} contentContainerStyle={{marginHorizontal:20,marginVertical:40}}>
                    <ScrollView >
                        {reviews.map(item =>
                            <View key={item._id}>
                                <Card>
                                    <Card.Content>
                                        <Paragraph style={{fontSize:10}}>{item.createdAt.substring(0,10)} {item.createdAt.substring(11,19)}</Paragraph>
                                        <Paragraph>{item.review}</Paragraph>
                                        <Paragraph style={{fontSize:10}}>{item.rating}/5, {item.name}</Paragraph>
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
            <View style={{paddingTop:10, paddingBottom:10}}>
                <Divider />
            </View>
            <Button style={styles.button} mode={"contained"} onPress={() => toggleModal()}>
                Vis anmeldelser
            </Button>
        </View>
    )
}

export default CreateReview

