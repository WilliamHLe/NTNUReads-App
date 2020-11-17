import { Text, View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import url from "../url";
import {Button, Menu, Divider, Provider, Paragraph} from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

interface SortingProps {
    changeSort: (ct:string) => void
}
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingTop: 13,
        paddingHorizontal: 25,
        paddingBottom: 12,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        backgroundColor: 'white',
        color: 'black',
    },
});
const Sorting = ({changeSort}: SortingProps) => {
    const [selectedValue, setSelectedValue] = useState(" ");

    useEffect(()=>{
        changeSort(selectedValue)

    }, [selectedValue])

    return (
        <View style={{marginLeft: 15}}>
            <Paragraph style={{textAlign: "center"}}>Sorter etter:</Paragraph>
            <RNPickerSelect
                placeholder={{
                    label: 'Sorter etter: ',
                    value: null,
                }}
                items={[
                    {
                        label: 'Relevant',
                        value: ' ',
                    },
                    {
                        label: 'Forfatter A-Z',
                        value: 'authors',
                    },
                    {
                        label: 'Tittel A-Z',
                        value: 'title',
                    },
                    {
                        label: 'Vurdering lav-høy',
                        value: 'average_rating',
                    },
                ]
                }
                onValueChange={(value: string) => {
                    setSelectedValue(value);
                }}
                style={{ ...pickerSelectStyles }}
                value={selectedValue}

            />
        </View>

    );

}

export default Sorting
