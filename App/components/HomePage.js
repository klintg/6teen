import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';
import SwipeCards from 'react-native-swipe-cards';
import Navbar from './Navbar.js';

/*
*for this section CHECK OUT - https:github.com/meteor-factory/react-native-tinder-swipe-cards
*/


let img1 = require('../imgs/img1.jpg')
let img2 = require('../imgs/img2.png')
let img3 = require('../imgs/img3.png')
let img4 = require('../imgs/img4.png')
let img5 = require('../imgs/img5.png')
let img6 = require('../imgs/img6.png')

const Cards = [{
  "id":1,
  "first_name": 'Sidikass',
  "age": 19,
  "friends":449,
  "interests":20,
  "image": img1
}, {
  "id":1,
  "first_name": 'Boss-lady',
  "age": 30,
  "friends":51,
  "interests":10,
  "image": img2
},
{
  "id":1,
  "first_name": 'Shaker',
  "age": 22,
  "friends":21,
  "interests":15,
  "image": img3
}, {
  "id":1,
  "first_name": 'Smash',
  "age": 25,
  "friends":5,
  "interests":10,
  "image": img4
}, {
  "id":1,
  "first_name": 'Val',
  "age": 36,
  "friends":45,
  "interests":10,
  "image": img5
}, {
  "id":1,
  "first_name": 'Vera',
  "age": 22,
  "friends":8,
  "interests":10,
  "image": img6
}]

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: Cards
    }
  }

  Card(person) {
    return (
      <View style={styles.card}>
        <Image src={person.image} resizeMode="contain" style={{width:350, height:350}}/>
        <View style= {{width:350, height:70, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
          <View style={{flexDirection:'row', margin:15, marginTop:25}}>
            <Text style={{fontSize:20, fontWeight:'300', color:'#444'}}>{person.first_name}</Text>
            <Text style={{fontSize:21, fontWeight:'200', color:'#444'}}>{person.age}</Text>
          </View>

          <View style={{flexDirection:'row'}}>

            <View style={{padding:13, borderLeftWidth:1, borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}>
              <Icon name='people-outline' size={20} color="#777"/>
              <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{person.friends}</Text>
            </View>

            <View style={{padding:13, borderLeftWidth:1,borderColor:'#e3e3e3', alignItems:'center', justifyContent:'space-between'}}>
              <Icon name='import-contacts' size={20} color="#777" />
              <Text style={{fontSize:16, fontWeight:'200', color:'#555'}}>{person.interests}</Text>
            </View>

          </View>
        </View>
      </View>
    )
  }
  noCards() {
    return(
      <View style={style.card}>
        <Text>No More Ladies</Text>
      </View>
    )
  }

  handleYes(input) {
    console.log(`damnn mmhh ${input.text}`)
  }

  handleNo(input) {
    console.log(`damnn mmhh ${input.text}`)
  }
  No() {
    console.log(this.refs['swiper'])
    this.refs['swipe']._goToNextCard()
  }
  yes() {
    console.log(this.refs['swiper'])
    this.refs['swipe']._goToNextCard()
  }

  render() {
    return (
      <View style={styles.container}>
        <Navbar chat={ () => this.props.navigator.replace({id: "messages"})}
            toProfile = {() => this.props.navigator.replace({id: 'profile'})}
        />

        <SwipeCards
          ref={"swipe"}
          cards={this.state.cards}
          containerStyle={{backgroundColor:'#f7f7f7', alignItems:'center', margin:20}}
          renderCard={(cardData) => this.Card(cardData)}
          renderNoMoreCards={() => this.noCards()}
          handleYup={this.handleYes}
          handleNope={this.handleNo}
        />

        <View style={{flexDirection:"row", alignItems:'center', justifyContent:'center'}}>
          <TouchableOpacity style = {styles.buttons} onPress = {() => this.No()}>
            <Iconz name='ios-close' size={45} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttonSmall}>
            <Iconz name='ios-information' size={25} color="#888" style={{}} />
          </TouchableOpacity>
          <TouchableOpacity style = {styles.buttons} onPress = {() => this.yes()}>
            <Iconz name='ios-heart-outline' size={36} color="#888" style={{marginTop:5}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
  buttons:{
    width:80,
    height:80,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:40
  },
  buttonSmall:{
    width:50,
    height:50,
    borderWidth:10,
    borderColor:'#e7e7e7',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25
  },
   card: {
    flex: 1,
    alignItems: 'center',
    alignSelf:'center',
    borderWidth:2,
    borderColor:'#e3e3e3',
    width: 350,
    height: 420,
  }

});

export default Home;
