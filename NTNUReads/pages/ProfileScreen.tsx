import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';
import LoginForm from "../components/user/LoginForm";

type ProfileParamList = {
    Detaljer: undefined;
};

type Props = StackScreenProps<ProfileParamList, 'Detaljer'>;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});


function ProfileScreen({navigation}: Props) {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <LoginForm/>
            <Button
                title="Go to DetailsScreen"
                onPress={() => navigation.navigate("Detaljer")}
            />
        </View>
    );
}

export default ProfileScreen;
