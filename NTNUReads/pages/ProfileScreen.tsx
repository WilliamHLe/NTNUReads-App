import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import {getUser, removeUser} from "../asyncStorage";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {DataTable, Title, Button} from "react-native-paper";
import Constants from "expo-constants";
import url from "../url";

type ProfileParamList = {
    Details: {id: number};
    Login: undefined;
};


type ProfileProps = StackScreenProps<ProfileParamList, 'Details'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: 'center',
        //justifyContent: 'space-between',
        //paddingTop: 40,
        //padding: 10,
        margin: 20,
        marginTop: Constants.statusBarHeight,
    },
    scrollView: {
        marginHorizontal: 10,
    }
});


function ProfileScreen({navigation}: ProfileProps) {

    //const navDetails = useNavigation<NavigationProp<ProfileParamList, 'Details'>>();
    const navLogin = useNavigation<NavigationProp<ProfileParamList, 'Login'>>();
    const [user, setUser] = useState<any>()
    //const user = "";



    const [searchResult, setSearchResult] = useState<any[]>([])

    useEffect(()=>{
        let mounted = true;
        getUser().then(res => {
            if(res != null) {
                const us = JSON.parse(res)
                fetch("http://"+url+":4000/favorite/user/"+us._id+"")
                .then(response => response.json())
                .then((data) => {
                    if(mounted) setSearchResult(data.books);
            })
            }
        })
        return () => {
            mounted = false;
        };
    },[])
    //console.log(us)

    const handleLogOut = () => {
        getUser().then(res => {
            if(res != null) {
                removeUser()
                console.log(res)
                //alert("Du har logget ut!");
            }
        })
        navLogin.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Title>Din profil</Title>
                <DataTable>
                    <DataTable.Header>
                        <DataTable.Title>ISBN</DataTable.Title>
                        <DataTable.Title>Forfatter</DataTable.Title>
                        <DataTable.Title>Tittel</DataTable.Title>
                        <DataTable.Title numeric>Vurdering</DataTable.Title>
                    </DataTable.Header>

                    {searchResult.map(item =>
                        <DataTable.Row onPress={() => navigation.push("Details", {id: item._id})} key={item._id}>
                            <DataTable.Title>{item.isbn}</DataTable.Title>
                            <DataTable.Title>{item.authors}</DataTable.Title>
                            <DataTable.Title>{item.title}</DataTable.Title>
                            <DataTable.Title numeric>{item.average_rating}</DataTable.Title>
                        </DataTable.Row>
                    )}
                </DataTable>
                <Button
                    mode={"contained"}
                    onPress={handleLogOut}
                >Logg ut
                </Button>
            </ScrollView>
        </SafeAreaView>
    );
}

export default ProfileScreen;
