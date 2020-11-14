import React from 'react';
import {Button, StyleSheet, Text, View} from "react-native";

import { StackScreenProps } from '@react-navigation/stack';

type ProfileParamList = {
    Details: undefined;
};

type Props = StackScreenProps<ProfileParamList, 'Details'>;

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
            <Button
                title="Go to DetailsScreen"
                onPress={() => navigation.navigate("Details")}
            />
        </View>
    );
}

export default ProfileScreen;
