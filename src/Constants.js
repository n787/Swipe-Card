const {Dimensions} = require('react-native');
const {width, height} = Dimensions.get('screen');

export const CARD ={
    HEIGHT: height*0.78,
    OUT_OF_SCREEN: width * 0.5 * width, 
}

export const COLORS = {
    like: '#00ebaa',
    nope: '#ff0046',
}

export const ACTION_OFFSET = 100;