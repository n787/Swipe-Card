import React from 'react';
import {  View,StyleSheet } from "react-native";
import Buttons from '../Buttons';
import {COLORS} from '../utils/Constants';
export default function Footer({handleChoice}) {
    return (
        <View style={styles.container}>
            <Buttons name="times" size={40} color={COLORS.nope} onPress={()=>handleChoice(-1)}/>
            <Buttons name="heart" size={34} color={COLORS.like} onPress={()=>handleChoice(1)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        position:'absolute',
        bottom:15,
        width:170,
        alignItems:'center',
        justifyContent:'space-between',
        zIndex: -1,
    }
})
