import React from 'react';
import { SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar} from 'react-native';
import { Button } from 'react-native-elements';

import {
    
    ReloadInstructions,
    } from 'react-native/Libraries/NewAppScreen'; 
import FillButton from '../Components/FillButton';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
 
export const Settings = ({navigation}) => {

    const logout = () => {
        console.log('hi')
        navigation.navigate('Login');
    }
    return (
        <>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
            <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
            <View style={styles.container}>
            </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Settings</Text>
                <Text style={styles.sectionDescription}>
                    Edit <Text style={styles.highlight}>App.js</Text> to change this
                    screen and then come back to see your edits.
                </Text>
                </View>
                <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>See Your Changes</Text>
                </View>
                <View>
                    <Button title="Logout" color="light" onPress={logout} raised />
                </View>
            </View>
            </ScrollView>
        </SafeAreaView>
        </>
    );
}

 
export default Settings;