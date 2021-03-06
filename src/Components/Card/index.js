import { LinearGradient } from 'expo-linear-gradient';
import React,{useCallback} from 'react';
import { View ,Image, Text, StyleSheet, Dimensions, Animated} from 'react-native';
import Choice from '../Choice';
import { ACTION_OFFSET } from '../../utils/Constants';

const {width, height} = Dimensions.get('screen');

export default function Card({name, source, isFirst,swipe,tiltSign, ...rest}){
   
    const likeOpacity = swipe.x.interpolate({
        inputRange:[25, ACTION_OFFSET],
        outputRange:[0, 1],
        extrapolate: 'clamp',
    })

    const nopeOpacity = swipe.x.interpolate({
        inputRange:[-ACTION_OFFSET, -25],
        outputRange:[1, 0],
        extrapolate: 'clamp',
    })
    const renderChoice = useCallback(() => {
        return(
            <>
            <Animated.View style={[styles.choiceContainer, styles.likeContainer, {opacity: likeOpacity}]} >
                <Choice type='like'/>
            </Animated.View>
            <Animated.View style={[styles.choiceContainer, styles.nopeContainer, {opacity:nopeOpacity}]}>
                <Choice type='nope'/>
            </Animated.View>
            </>
        )             
    },[likeOpacity,nopeOpacity])  // pass the likeOpacity, nopeOpacity
    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange : [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange : ['8deg', '0deg','-8deg'],
    })
    
    const animatedCardstyle = {  // moves card 
        transform: [ ...swipe.getTranslateTransform(),{rotate}],   // rotation of card 
    }
    return(
        <Animated.View style={[styles.container, isFirst && animatedCardstyle]} {...rest}>
            <Image source={source} style={styles.image} />
            <LinearGradient colors={['transparent', 'rgba(0,0,0,9)']} style={styles.gradient}/>
            <Text style={styles.text}>{name}</Text>

            {isFirst && renderChoice()}
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top: 45,
        //left:17,
    },
    image:{
        width: width*0.9,
        height: height*0.7,
        borderRadius: 20,
    },
    text:{
       position:'absolute',
       color: '#fff',
       fontSize: 30,
       left: 22,
       bottom:22,
       fontWeight:'bold',

    },
    gradient:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        height:120,
        borderRadius:20,

    },
    choiceContainer:{
       position:'absolute',
       top:30,
      
    },
       likeContainer:{
       left:45,
       transform: [{rotate:'-30deg'}],
       },
       nopeContainer:{
       right:45,
       transform: [{rotate:'30deg'}],
    }
})