import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navbar from "./components/Navbar";


export default function App() {
  return (
    <NavigationContainer>
        <Navbar/>
    </NavigationContainer>
  );
}
