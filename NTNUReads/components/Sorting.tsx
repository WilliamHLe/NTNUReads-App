import { Text, Picker, View} from "react-native";
import React, {useEffect, useState} from "react";
import url from "../url";

interface SortingProps {
    changeSort: (ct:string) => void
}

const Sorting = ({changeSort}: SortingProps) => {
    const [selectedValue, setSelectedValue] = useState(" ");

   /* const handleChange = () => {
        changeSort(selectedValue)
    }*/
    useEffect(()=>{
        changeSort(selectedValue)

    }, [selectedValue])
    return (
        <View>
            <Text>Sorter etter:</Text>
            <Picker
                selectedValue={selectedValue}
                style={{ height: 25, width: 125 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                <Picker.Item label="Relevant" value=" " />
                <Picker.Item label="Forfatter A-Z" value="authors" />
                <Picker.Item label="Tittel A-Z" value="title" />
                <Picker.Item label="Vurdering lav-høy" value="average_rating" />
            </Picker>
        </View>
    );
}

export default Sorting