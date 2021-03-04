import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Main from './src/Main'
export default function App(){
  return(
    <Main/>
  )
}



/*  // Demo for Swipe Card from npjm... //
import SwipeCards from "react-native-swipe-cards-deck";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={[styles.card, {backgroundColor: this.props.backgroundColor}]}>
        <Text>{this.props.text}</Text>
      </View>
    )
  }
}

class NoMoreCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text style={styles.noMoreCardsText}>No more cards</Text>
      </View>
    )
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {text: 'Tomato', backgroundColor: 'red'},
        {text: 'Aubergine', backgroundColor: 'purple'},
        {text: 'Courgette', backgroundColor: 'green'},
        {text: 'Blueberry', backgroundColor: 'blue'},
        {text: 'Umm...', backgroundColor: 'cyan'},
        {text: 'orange', backgroundColor: 'orange'},
      ]
    };
  }

  handleYup (card) {
    console.log(`Yup for ${card.text}`)
    return true;
  }
  handleNope (card) {
    console.log(`Nope for ${card.text}`)
    return true;
  }
  handleMaybe (card) {
    console.log(`Maybe for ${card.text}`)
    return true;
  }
  render() {
    return (
      <SwipeCards
        cards={this.state.cards}
        renderCard={(cardData) => <Card {...cardData} />}
        keyExtractor={(cardData) => String(cardData.text)}
        renderNoMoreCards={() => <NoMoreCards />}

        // If you want a stack of cards instead of one-per-one view, activate stack mode
        // stack={true}
        // stackDepth={3}

        handleYup={this.handleYup}
        handleNope={this.handleNope}
        handleMaybe={this.handleMaybe}
        hasMaybeAction
      />
    )
  }
}

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  },
  noMoreCardsText: {
    fontSize: 22,
  }
})

*/
