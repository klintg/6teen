import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.message = this.message.bind(this);
    this.homePage = this.homePage.bind(this);
    this.profilePage = this.profilePage.bind(this);
  }
  message() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.onPress}>
          <Image src={require('../imgs/fire.png')} style={{width:25, height:25, margin:10}}/>
        </TouchableOpacity>
        <Image src={require('../imgs/logo.png')} resizeMode="contain" style={{width:100, height:30}}/>
        <View style={{width:25, height:25, margin:10}}/>
      </View>
    );
  }

  homePage() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.props.toProfile}>
          <Iconz name="ios-person" color="#888" size={25} style={{margin:10}} />
        </TouchableOpacity>
        <Image src={require('../imgs/logo2.png')} resizeMode="contain" style={{width:100, height:30}}/>
        <TouchableOpacity onPress={this.props.chat}>
          <Iconz name="ios-chatboxes-outlines" color="#555" size={25} style={{margin:10}}/>
        </TouchableOpacity>
      </View>
    );
  }

  profilePage() {
    return(
      <View style={styles.container}>
        <View style={{width:25, height:25, margin:10}}/>
        <Image  src={require('../imgs/logo2.png')} resizeMode="contain" style={{width:100, height:30}} />
        <TouchableOpacity>
          <Image src={require('../imgs/fire.png')} style={{width:25, height:25, margin:10}}/>
        </TouchableOpacity>
      </View>
    );
  }

  render() {
    if(this.props.type == "message") {
      return (
        <View>{this.message}</View>
      );
    } else if(this.props.type == "profile") {
      return (
        <View>{this.profilePage}</View>
      );
    } else {
      return (
        <View>{this.homePage}</View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    paddingTop:10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor: 'rgba(0,0,0,0.1)'
  }
});
