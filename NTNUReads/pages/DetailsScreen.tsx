import {StyleSheet, View} from "react-native";
import React from "react";
import {RouteProp, useRoute} from "@react-navigation/native";
import Detailed from "./Detailed";
import {Text} from "react-native-paper";

type DetailsParamList = {
    Details: {id: number};
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        //alignItems: 'center',
        //justifyContent: 'center',
    },
});

function DetailsScreen() {

    //route is used to access book id (isbn) which is sent as parameter
    const route = useRoute<RouteProp<DetailsParamList, 'Details'>>();

    //save search text in parameter search
    const id = route.params.id;


    return (
        <View style={styles.container}>
            {/*<Text>Denne boken har ISBN: {id}</Text>*/}
            <Detailed book={id} />
        </View>
    );
}

export default DetailsScreen;
