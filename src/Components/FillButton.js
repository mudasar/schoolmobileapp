import React from 'react';
import { StyleSheet } from 'react-native';
import {Button} from 'react-native-elements'
 
const styles = StyleSheet.create({
    button: {
        width: '100%',
        
    }
});
 
export const FillButton = ({title, style, ...props}) => {
    return (
        <Button title={title} {...props} buttonStyle={[style, styles.button]} containerStyle={styles.button} />
    );
}

 
export default FillButton;