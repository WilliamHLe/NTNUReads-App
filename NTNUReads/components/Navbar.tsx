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

/*
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    HomeScreen: undefined;
    SearchScreen: undefined;
    ProfileScreen: undefined;
};

type HomeProps = StackScreenProps<RootStackParamList, 'HomeScreen'>;
type SearchProps = StackScreenProps<RootStackParamList, 'SearchScreen'>;
type ProfileProps = StackScreenProps<RootStackParamList, 'ProfileScreen'>;

 */

const HomeStack = createStackNavigator();
const SearchStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

function Navbar() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            //activeColor="#e91e63"
            //style={{ backgroundColor: 'tomato' }}
        >
            <Tab.Screen
                name="Home"
                component={HomeStackScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={SearchStackScreen}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="book-search" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileStackScreen}
                options={{
                    tabBarLabel: 'Profile',
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
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            title:'Home',
            headerLeft: () => (
                <MaterialCommunityIcons name="menu" size={25}/> //onPress={() => navigation.openDrawer()}
            )
        }} />
    </HomeStack.Navigator>
);

const SearchStackScreen = () => (
    <SearchStack.Navigator>
        <SearchStack.Screen name="Search" component={SearchScreen} options={{
            title:'Search',
            headerLeft: () => (
                <MaterialCommunityIcons name="menu" size={25}/> //onPress={() => navigation.openDrawer()}
            )
        }} />
        {/*Search screen should go to Results after click on search button, and to Details after clicking details button*/}
        <SearchStack.Screen name="Results" component={ResultsScreen} />
        <SearchStack.Screen name="Details" component={DetailsScreen} />

    </SearchStack.Navigator>
);

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
        <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
            title:'Profile',
            headerLeft: () => (
                <MaterialCommunityIcons name="menu" size={25}/> //onPress={() => navigation.openDrawer()}
            )
        }} />
        {/*Can go directly to details about favorites*/}
        <SearchStack.Screen name="Details" component={DetailsScreen} />
    </ProfileStack.Navigator>
);


