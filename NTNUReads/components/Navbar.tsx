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
            initialRouteName="Home"
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Hjem',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={SearchStackScreen}
                options={{
                    tabBarLabel: 'Søk',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
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
        <HomeStack.Screen name="Home" component={HomeScreen} options={{title: 'Hjem'}}/>
    </HomeStack.Navigator>
);


const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Søk" component={SearchScreen} />
        {/*Search screen should go to Results after click on search button, and to Details after clicking details button*/}
        <SearchStack.Screen name="Results" component={ResultsScreen} options={{title: 'Resultater'}}/>
        <SearchStack.Screen name="Details" component={DetailsScreen} options={{title: 'Detaljer'}}/>

    </SearchStack.Navigator>
);


const ProfileStackScreen = () => {

    return (
        //Should go directly to login if not logged in. If logged in -> go to profile
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Login" component={LoginScreen} options={{title: 'Logg inn'}}/>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{title: 'Profil'}}/>
            {/*Can go from list of favorites to details about favorites when clicking details button*/}
            <ProfileStack.Screen name="Details" component={DetailsScreen} options={{title: 'Detaljer'}}/>
        </ProfileStack.Navigator>
    )

};


