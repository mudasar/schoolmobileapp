import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from 'react'
import Login from '../Screens/Login';
import Register from '../Screens/Register';

const AuthStack = createStackNavigator();


export const AuthStackNavigator = () => {
    
        return (
            <AuthStack.Navigator screenOptions={{ 
                    headerShown: false
                }}>
                <AuthStack.Screen name="Login" component={Login} />
                <AuthStack.Screen name="Register" component={Register} />
            </AuthStack.Navigator>
        )
}
