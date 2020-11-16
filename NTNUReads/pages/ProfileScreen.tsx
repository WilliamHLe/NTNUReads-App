import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import {getUser, removeUser} from "../asyncStorage";
import {NavigationProp, useNavigation} from "@react-navigation/native";
import {DataTable} from "react-native-paper";

type ProfileParamList = {
    Details: {id: number};
    Login: undefined;
};


//type ProfileProps = StackScreenProps<ProfileParamList, 'Details'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function ProfileScreen() {

    const navDetails = useNavigation<NavigationProp<ProfileParamList, 'Details'>>();
    const navLogin = useNavigation<NavigationProp<ProfileParamList, 'Login'>>();
    const [user, setUser] = useState<any>()
    //const user = "";



    const [searchResult, setSearchResult] = useState<any[]>([])

    useEffect(()=>{
        getUser().then(res => {
            if(res != null) {
                const us = JSON.parse(res)
                fetch("http://localhost:4000/favorite/user/"+us._id+"")
                .then(response => response.json())
                .then((data) => {
                //console.log(data.books);
                    setSearchResult(data.books)
            })
                console.log(res)
            }
        })

    },[user])
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
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>ISBN</DataTable.Title>
                    <DataTable.Title>Forfatter</DataTable.Title>
                    <DataTable.Title>Tittel</DataTable.Title>
                    <DataTable.Title numeric>Vurdering</DataTable.Title>
                </DataTable.Header>

                {searchResult.map(item =>
                    <DataTable.Row>
                        <DataTable.Title>{item.isbn}</DataTable.Title>
                        <DataTable.Title>{item.authors}</DataTable.Title>
                        <DataTable.Title>{item.title}</DataTable.Title>
                        <DataTable.Title numeric>{item.average_rating}</DataTable.Title>
                    </DataTable.Row>
                )}
            </DataTable>
            {/*<LoginForm/>*/}
            <Button
                title="Logg ut"
                onPress={handleLogOut}
            />
            {/*Placeholder button with placeholder ISBN - should have same table as results here - only with favorites*/}
            <Button
                title="Go to DetailsScreen"
                onPress={() => navDetails.navigate("Details", {id: 1111111111})}
            />
        </View>
    );
}

export default ProfileScreen;
