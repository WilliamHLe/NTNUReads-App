import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {lightTheme, darkTheme} from "../../store/theme/ThemeAction";
import {Switch} from 'react-native-paper';
import {Text} from "react-native-elements";
import {StyleSheet, View} from "react-native";

/**
 * Switch for toggling theme, will update state in Redux store
 */

const styles = StyleSheet.create({
    inlineContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection:'row',
        //justifyContent: 'space-around',

    },
});

const ThemeSwitch = () => {

    const dispatch = useDispatch();
    //theme always starts as light
    const [isThemeDark, setIsThemeDark] = useState(false);


    const handleChange = () => {
        if (isThemeDark) {
            //will activate light theme
            dispatch(darkTheme());
            setIsThemeDark(false);
        }
        else {
            //will activate dark theme
            dispatch(lightTheme());
            setIsThemeDark(true);
        }
        //console.log(theme)
    }


    return (
        <View style={styles.inlineContainer}>
            <Switch value={isThemeDark} onValueChange={handleChange}></Switch>
            <Text style={{paddingTop:8, paddingLeft:8}}>{isThemeDark ? "🌙" : "🔆"}</Text>
        </View>

    );
}

export default ThemeSwitch;
