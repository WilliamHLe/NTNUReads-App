import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import DetailsScreen from "./pages/DetailsScreen";
import SearchScreen from "./pages/SearchScreen";
import ResultsScreen from "./pages/ResultsScreen";
import LoginScreen from "./pages/LoginScreen";
import ProfileScreen from "./pages/ProfileScreen";

/*
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  DetailsScreen: undefined;
};

type Props = StackScreenProps<RootStackParamList, 'DetailsScreen'>;


function HomeScreen({ navigation }: Props) {
  return (
      <View style={styles.container}>
        <Text>HomeScreen Screen</Text>
        <Button
            title="Go to DetailsScreen"
            onPress={() => navigation.navigate('DetailsScreen')}
        />
      </View>
  );
}

function DetailsScreen() {
  return (
      <View style={styles.container}>
        <Text>DetailsScreen Screen</Text>
      </View>
  );
}

 */

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/*
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>Dette funker</Text>
      </View>


        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
            <Stack.Screen name="SearchScreen" component={SearchScreen} />
            <Stack.Screen name="ResultsScreen" component={ResultsScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        </Stack.Navigator>

        */}

        <Navbar/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
