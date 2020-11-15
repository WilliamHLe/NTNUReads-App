import React from 'react';
import {StyleSheet, View, ImageBackground} from "react-native";
import {Text, Button} from "react-native-elements";

import { StackScreenProps } from '@react-navigation/stack';


type HomeParamList = {
    Resultater: {searchText: string};
};

type Props = StackScreenProps<HomeParamList, "Resultater">;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundImage: {
        width:"100%",
        height:"100%"
    },
    heading: {
        flex: 1,
        textAlign: 'center',
        padding: "10%",
        paddingTop: "45%",

    }
});


function HomeScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require("../images/stanislav-kondratiev-6pO3QFkk7hQ-unsplash.jpg")} style={styles.backgroundImage}>
                <View style={styles.heading}>
                    <Text h1 style={{color:"#FFFFFF", fontWeight:"600"}}>Velkommen til NTNUReads</Text>
                    <Text style={{fontSize:18, paddingTop:10, color:"#FFFFFF"}}>Her kan du søke etter bøker, lagre dem som favoritter
                        - og til og med skrive anmeldelser!</Text>
                    <Button
                        style={{paddingTop:30}}
                        title="Ta meg videre til alle bøker"
                        //endre searchText her til noe som kan hente ut alle bøker fra databasen
                        onPress={() => navigation.navigate("Resultater", {searchText: "all"})}
                    />
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

