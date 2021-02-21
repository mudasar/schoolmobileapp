/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { Button, ThemeProvider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import {Home} from './Screens/Home';
import { AuthStackNavigator } from './Navigators/AuthStackNavigator';
import { LightTheme } from './Themes/Ligh';

const RootStack = createStackNavigator();


const App: () => React$Node = () => {
  return (
    <>
    <SafeAreaProvider>
        <ThemeProvider>

          <NavigationContainer theme={LightTheme}>
            <RootStack.Navigator screenOptions={{ 
                headerShown: false
              }}>
              <RootStack.Screen component={AuthStackNavigator} name={'AuthStack'} />
            </RootStack.Navigator>
            
            </NavigationContainer>
      </ThemeProvider>
      </SafeAreaProvider>
    </>
  );
};


export default App;
