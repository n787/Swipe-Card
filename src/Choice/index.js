import React from 'react';
import {Text, View,StyleSheet} from 'react-native';
import { COLORS } from '../Constants';
export default function Choice({type}) {
    const color = COLORS[type];
    return (
        <View style={[styles.container,{borderColor: color}]}>
            <Text style={[styles.text,{color}]}>{type}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 7,
        paddingHorizontal: 15,
        borderRadius: 15,
       // backgroundColor: 'rgba(0,0,0,2)',
    },
    text:{
        fontSize: 32,
        fontWeight:'bold',
        textTransform: 'uppercase',
        letterSpacing:4,
    }
})