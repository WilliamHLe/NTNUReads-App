import { Text, View} from "react-native";
import React, {useEffect, useState} from "react";
import { Rating, AirbnbRating } from 'react-native-elements';
import { Button } from 'react-native-paper';

interface SideBarProps {
    changeFilter: (ct:string) => void
}

const FilterRating = ({changeFilter}: SideBarProps) => {
    const [radio, setRadio] = useState<string>("")

    useEffect(()=>{
        changeFilter(radio)

    }, [radio])

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
            <text>Filter:</text>
            <AirbnbRating
                count={5}
                showRating={false}
                defaultRating={0}
                size={18}
                onFinishRating={changeRadio}
            />
            <Button mode="contained" contentStyle={{height: 30}} onPress={reset}>
                Nullstill
            </Button>
        </View>
    );
}

export default FilterRating