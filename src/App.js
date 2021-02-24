/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useState, useEffect, useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Button, ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import {Home} from './Screens/Home';
import { AuthStackNavigator } from './Navigators/AuthStackNavigator';
import { LightTheme } from './Themes/Light';
import { AuthContext, AuthProvider } from './Contexts/AuthContext';
import { ActivityIndicator, View } from 'react-native';
import { AppTabNavigator } from './Navigators/AppTabNavigator';

const RootStack = createStackNavigator();


const App: () => React$Node = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('user').then((user) => {
      console.log(user);
      setLoading(false);

    }).catch(error => console.log);
    return () => {
      
    }
  }, []);

  const {user, login} = useContext(AuthContext)
console.log(user)
  if (loading) {
    return (<View><ActivityIndicator size="large" /></View>)
  }

  return (
    <>
    <SafeAreaProvider>
        <ThemeProvider>
          <AuthProvider>
          <NavigationContainer theme={LightTheme}>
            <RootStack.Navigator screenOptions={{ 
                headerShown: false
              }}>

              { !user && <RootStack.Screen component={AuthStackNavigator} name={'AuthStack'} />}
              <RootStack.Screen component={AppTabNavigator} name={'Home'} />

            </RootStack.Navigator>
            
            </NavigationContainer>
          </AuthProvider>
      </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};


export default App;
