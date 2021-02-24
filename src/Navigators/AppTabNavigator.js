import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../Screens/Settings';
import Home from '../Screens/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Tabs = createBottomTabNavigator();


export const AppTabNavigator = () => {
    return (
        <Tabs.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                    ? 'information-circle'
                    : 'information-circle-outline';
                } else if (route.name === 'Settings') {
                    iconName = focused ? 'list-circle-outline' : 'list-outline';
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            }}>
            <Tabs.Screen name="Home" component={Home} />
            <Tabs.Screen name="Settings" component={Settings} />
        </Tabs.Navigator>
    )
}

export default AppTabNavigator
