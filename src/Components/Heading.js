import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
    text: {
        fontSize: 32,
        color: 'black'
    }
});
 
export const Heading = ({children, style, props}) => {
    return (
        <Text style={[style, styles.text]} {...props}>
            {children}
        </Text>
    );
}

export default Heading;