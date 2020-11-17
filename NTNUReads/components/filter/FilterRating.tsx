import { Text, View } from "react-native";
import React, {useEffect, useState} from "react";
import { AirbnbRating } from 'react-native-elements';
import { Button } from 'react-native-paper';

interface SideBarProps {
    changeFilter: (ct:string) => void
}

const FilterRating = ({changeFilter}: SideBarProps) => {
    const [radio, setRadio] = useState<string>("")
    const [df, setDefaultrating] = useState<number>(0)

    useEffect(()=>{
        changeFilter(radio)

    }, [radio, df])

    const reset = () => {
        setRadio("")
        changeFilter("")
        setDefaultrating(0)
    }

    const changeRadio = (e: { toString: () => any; }) => {
        const val = e.toString()
        setRadio(val)
        // @ts-ignore
        setDefaultrating(e)
    }
    return (
        <View>
            <Text>Filter:</Text>
            <AirbnbRating
                count={5}
                showRating={false}
                defaultRating={df}
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