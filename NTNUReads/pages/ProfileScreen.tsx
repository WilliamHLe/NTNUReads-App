import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import {getUser, removeUser} from "../asyncStorage";
import {NavigationProp, useNavigation} from "@react-navigation/native";

type ProfileParamList = {
    Details: {id: number};
    Login: undefined;
};


type ProfileProps = StackScreenProps<ProfileParamList, 'Details'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function ProfileScreen({navigation}: ProfileProps) {

    //const navDetails = useNavigation<NavigationProp<ProfileParamList, 'Details'>>();
    const navLogin = useNavigation<NavigationProp<ProfileParamList, 'Login'>>();

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
            <Button
                title="Logg ut"
                onPress={handleLogOut}
            />
            {/*Placeholder button with placeholder ISBN - should have same table as results here - only with favorites*/}
            <Button
                title="Go to DetailsScreen"
                onPress={() => navigation.push("Details", {id: 1111111111})}
            />
        </View>
    );
}

export default ProfileScreen;
