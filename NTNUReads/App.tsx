import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from "./components/Navbar";
import ShowModal from "./components/ShowModal";


export default function App() {
  return (
    <NavigationContainer>
        <Navbar/>
    </NavigationContainer>
  );
}
