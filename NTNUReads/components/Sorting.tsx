import {Button, Text, View, Picker} from "react-native";
import React, {useEffect, useState} from "react";
import { Rating, AirbnbRating } from 'react-native-elements';

interface SortingProps {
    changeSort: (ct:string) => void
}

const Sorting = ({changeSort}: SortingProps) => {
    const [selectedValue, setSelectedValue] = useState("");

    /**
     * TODO: Link to result component
     */
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSort(e.target.value)
    }

    return (
        <View>
            <text>Sorter etter:</text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 30, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Relevant" value="" />
                <Picker.Item label="Forfatter A-Z" value="authors" />
                <Picker.Item label="Tittel A-Z" value="title" />
                <Picker.Item label="Vurdering lav-høy" value="average_rating" />
            </Picker>
        </View>
    );
}

export default Sorting