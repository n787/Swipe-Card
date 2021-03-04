import React,{useState,useRef, useCallback,useEffect} from 'react';
import {View, Text,StyleSheet,Animated, PanResponder,Dimensions} from 'react-native';
import Card from '../Card';
import { ACTION_OFFSET, CARD } from '../Constants';
import Footer from '../Footer';
import {pics as picArray} from './data';

//const { height} = Dimensions.get('screen');
export default function Main(){
    const [pics, setPics] = useState(picArray);
    const swipe = useRef(new Animated.ValueXY()).current;  
    const tiltSign = useRef( new Animated.Value(1)).current;  // to rotate from center - top or bottom

    useEffect(() => {
        if(!pics.length){
            setPics(picArray);
        }   
    }, [pics.length])
    
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder:() => true,    // cursor moving activity and their position on card
        onPanResponderMove: (_, {dx, dy, y0}) => {
           // console.log(gesture);
           swipe.setValue({x:dx, y:dy});  // moves card 
          // console.log(y0 > (height*0.7) /2 ? 1 : -1);
            tiltSign.setValue(y0 > CARD.HEIGHT/2 ? 1 : -1) 
        },
        onPanResponderRelease:(_, {dx, dy})=>{
           // console.log('end');

           const direction = Math.sign(dx);
           const inActionActive = Math.abs(dx)>ACTION_OFFSET;

            if(inActionActive){
                Animated.timing(swipe,{
                    duration: 200,
                    toValue: {
                        x: direction* CARD.OUT_OF_SCREEN,  // it swipe respect to direction
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(removeToCard);
            }
            else{
                Animated.spring(swipe,{
                    toValue:{
                        x:0,
                        y:0,
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();  // on removing card comes at start position
            }   
        }
    })

    const removeToCard = useCallback(() => {
        setPics((prevState) => prevState.slice(1));
        swipe.setValue({x:0, y:0});
    },[swipe])  // swipe will remove the card and change the state

    const handleChoice = useCallback((direction)=>{
        Animated.timing(swipe.x ,{
            toValue: direction*CARD.OUT_OF_SCREEN,
            duration: 400,
            useNativeDriver: true,
        }).start(removeToCard);
    },[removeToCard, swipe.x])

    return(
        <View style={styles.container}>
           { pics.map(({name, source}, index) => {
               const isFirst = index === 0;

               const dragHandlers = isFirst ? panResponder.panHandlers : {};

                   return <Card key={name}
                    name={name} 
                   source={source} 
                   isFirst={isFirst} 
                   swipe={swipe}
                   tiltSign ={tiltSign}
                    {...dragHandlers}/>;
               }).reverse()   //comes to first pic
           }
           {/*<Footer handleChoice={handleChoice}/> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fafafa',
        alignItems:'center', //sets cards at center
    }
})