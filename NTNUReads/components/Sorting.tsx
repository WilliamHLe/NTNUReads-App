import { Text, View, StyleSheet} from "react-native";
import React, {useEffect, useState} from "react";
import url from "../url";
import { Button, Menu, Divider, Provider } from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';
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

   /* const handleChange = () => {
        changeSort(selectedValue)
    }*/
    useEffect(()=>{
        changeSort(selectedValue)

    }, [selectedValue])


    const [visible, setVisible] = React.useState(false);

    const openMenu = () => setVisible(true);

    const closeMenu = () => setVisible(false);
    return (
        /*<View>
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
        </View>*/
        <View style={{marginLeft: 15}}>
            <Text>Sorter etter:</Text>
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