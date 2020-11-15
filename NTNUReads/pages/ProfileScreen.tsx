import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import {getUser, removeUser} from "../asyncStorage";
import {NavigationProp, useNavigation} from "@react-navigation/native";

type ProfileParamList = {
    Details: undefined;
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
            {/*<LoginForm/>*/}
            <Button
                title="Logg ut"
                onPress={handleLogOut}
            />
            <Button
                title="Go to DetailsScreen"
                onPress={() => navDetails.navigate("Details")}
            />
        </View>
    );
}

export default ProfileScreen;
