import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button, } from 'react-native-elements'; 
import Error from '../Components/Error';
import FillButton from '../Components/FillButton';
import Heading from '../Components/Heading';
import Input from '../Components/Input';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        paddingTop: 100
    },
    title: {
        marginBottom: 48 
    },
    input: {
        marginVertical: 20
    },
    registerButton: {
        marginTop: 20
    }
});
 
export const Login = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Login</Heading>
            <Error error="Login Failed" />
            <Input style={ styles.input} placeholder="Email" keyboardType="email-address" />
            <Input style={ styles.input} placeholder="Password" secureTextEntry  />
            <FillButton title="LOGIN" raised onPress={() => {
                console.log('Login button clicked');
            }} />
            
            <FillButton title="Register" type="clear" style={ styles.registerButton} onPress={() => {
                navigation.navigate('Register');
            }} />
        </View>
    );
}

 
export default Login;