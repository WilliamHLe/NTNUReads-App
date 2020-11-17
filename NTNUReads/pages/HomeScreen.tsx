import React from 'react';
import {StyleSheet, View, ImageBackground} from "react-native";
//import {Text, Button} from "react-native-elements";
import {Title, Headline, Subheading, Button} from "react-native-paper";

import {NavigationProp, useNavigation} from "@react-navigation/native";
import {StackScreenProps} from "@react-navigation/stack";
import ThemeSwitch from "../components/theme/ThemeSwitch";


type HomeParamList = {
    Results: {searchText: string};
};

type HomeProps = StackScreenProps<HomeParamList, 'Results'>;

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
        paddingTop: "35%",

    },
    themeSwitch: {
        paddingTop: 20,
        alignItems: 'center',
    }
});


function HomeScreen({navigation}: HomeProps) {

    //const navResults = useNavigation<NavigationProp<HomeParamList, 'Results'>>();

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../images/stanislav-kondratiev-6pO3QFkk7hQ-unsplash.jpg")} style={styles.backgroundImage}>
                <View style={styles.heading}>
                    <Headline style={{color:"#FFFFFF", fontSize:33}}>Velkommen til NTNUReads</Headline>
                    <Subheading style={{paddingTop:10, paddingBottom:15, color:"#FFFFFF"}}>Her kan du søke etter bøker, lagre dem som favoritter
                        - og til og med skrive anmeldelser!</Subheading>
                    <Button
                        mode={"contained"}
                        //endre searchText her til noe som kan hente ut alle bøker fra databasen
                        onPress={() => navigation.navigate("Results", {searchText: "all"})}
                    >Ta meg videre til alle bøker
                    </Button>
                    <View style={styles.themeSwitch}>
                        <ThemeSwitch/>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;

