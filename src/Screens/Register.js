import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import Error from '../Components/Error';
import FillButton from '../Components/FillButton';
import IconButton from '../Components/IconButton';
import Heading from '../Components/Heading';
import Input from '../Components/Input';
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
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
    },
    closeButton:{
        position: 'absolute',
        top: 60,
        right: 16,
        
    }
});
 
export const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Heading style={styles.title}>Register with Us</Heading>
            <View style={styles.closeButton} >
                <IconButton type="clear" icon={<Icon name="close"
                                size={28}
                                color="black" />} onPress={() => {
                navigation.navigate('Login');
            }} />
            </View>
            
            <Error error="Register Failed" />
            <Input style={ styles.input} placeholder="Email" keyboardType="email-address" />
            <Input style={ styles.input} placeholder="Password" secureTextEntry  />
            <FillButton title="REGISTER" raised onPress={() => {
                console.log('Register button clicked');
            }} />
            
            {/* <FillButton title="Login" type="clear" style={ styles.registerButton}  /> */}
        </View>
    );
}

 
export default Register;