import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveUser = async (value:JSON) => {
    try {
        await AsyncStorage.setItem(
            'user',
            JSON.stringify(value)
        )

    } catch (e) {

    }
}
export const getUser = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('user')
        console.log(jsonValue)
        return jsonValue// != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
        return null
        // error reading value
    }
}

export const removeUser = async () => {
    try {
        await AsyncStorage.removeItem('user')
    } catch(e) {
        // remove error
    }
}


