import {StyleSheet, View} from "react-native";
import React from "react";
import {RouteProp, useRoute} from "@react-navigation/native";
import Detailed from "../components/Detailed";

type DetailsParamList = {
    Details: {id: number};
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
    },
});

function DetailsScreen() {

    //route is used to access book id which is sent as parameter
    const route = useRoute<RouteProp<DetailsParamList, 'Details'>>();

    //save search text in parameter search
    const id = route.params.id;


    return (
        <View style={styles.container}>
            <Detailed book={id} />
        </View>
    );
}

export default DetailsScreen;
