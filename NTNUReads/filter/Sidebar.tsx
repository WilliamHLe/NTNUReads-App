import {Button, Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import { Rating, AirbnbRating } from 'react-native-elements';

interface SideBarProps {
    changeFilter: (ct:string) => void
}
const Sidebar = ({changeFilter}: SideBarProps) => {
    const [radio, setRadio] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeFilter(e.target.value)
    }

    const reset = () => {
        setRadio("")
        changeFilter("")
    }

    const changeRadio = (e: { toString: () => any; }) => {
        const val = e.toString()
        setRadio(val)
    }
    return (
        <View>
            <AirbnbRating
                count={5}
                reviews={["1", "2", "3", "4", "5"]}
                defaultRating={0}
                size={20}
                onFinishRating={changeRadio}
            />
            <Button
                onPress={reset}
                title="Nullstill"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
}

export default Sidebar