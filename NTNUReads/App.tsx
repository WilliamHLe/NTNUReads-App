import 'react-native-gesture-handler';
import React from 'react';
import Navbar from "./components/Navbar";
import {Provider, connect, useSelector} from "react-redux";
import {AppState, store} from "./store/rootStore";

import {
    NavigationContainer,
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
    DarkTheme as PaperDarkTheme,
    DefaultTheme as PaperDefaultTheme,
    Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);

//Define this outside of App to make app rerender on theme change in redux store
const RootContainer = () => {

    const theme = useSelector((state:AppState) => state.themeReducer.theme)

    return(
        <PaperProvider theme={theme==="light" ? CombinedDefaultTheme : CombinedDarkTheme}>
            <NavigationContainer theme={theme==="light" ? CombinedDefaultTheme : CombinedDarkTheme}>
                <Navbar/>
            </NavigationContainer>
        </PaperProvider>
    )
}

const mapStateToProps = (state: AppState) => ({
    theme: state.themeReducer.theme
})
const ConnectedRootContainer =  connect(mapStateToProps, null)(RootContainer);


//App component renders RootContainer
export default function App() {

    return (
    <Provider store={store}>
        <ConnectedRootContainer/>
    </Provider>
    );
}
