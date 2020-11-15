import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../pages/HomeScreen";
import DetailsScreen from "../pages/DetailsScreen";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileScreen from "../pages/ProfileScreen";
import LoginScreen from "../pages/LoginScreen";
import SearchScreen from "../pages/SearchScreen";
import ResultsScreen from "../pages/ResultsScreen";
import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function Navbar() {

    return (
        <Tab.Navigator
            initialRouteName="Hjem"
            //activeColor="#e91e63"
            //style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Hjem"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Hjem',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Søk"
                component={SearchStackScreen}
                options={{
                    tabBarLabel: 'Søk',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profil"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default Navbar;



const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Hjem" component={HomeScreen} />
        {/*Can search for all books (entire dataset) from HomeScreen (?)*/}
        <HomeStack.Screen name="Resultater" component={ResultsScreen} />
        <HomeStack.Screen name="Detaljer" component={DetailsScreen} />
    </HomeStack.Navigator>
);

const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Søk" component={SearchScreen} />
        {/*Search screen should go to Results after click on search button, and to Details after clicking details button*/}
        <SearchStack.Screen name="Resultater" component={ResultsScreen} />
        <SearchStack.Screen name="Detaljer" component={DetailsScreen} />

    </SearchStack.Navigator>
);


const ProfileStackScreen = () => (
        //Should go directly to login if not logged in -> fix when login state is available
        //<ProfileStack.Navigator initialRouteName={loggedIn ? "Profile" : "Login"}>
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profil" component={ProfileScreen}/>
            <ProfileStack.Screen name="Logg inn" component={LoginScreen}/>
            {/*Can go from list of favorites to details about favorites when clicking details button*/}
            <ProfileStack.Screen name="Detaljer" component={DetailsScreen}/>
        </ProfileStack.Navigator>

);


