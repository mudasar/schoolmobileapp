import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
 
const styles = StyleSheet.create({
    button: {
    
    }
});
 
export const IconButton =  ({title, style, ...props}) => {
    return (
        <Button title={title} {...props} buttonStyle={[style, styles.button]} containerStyle={styles.button} />
    );
}

 
export default IconButton;