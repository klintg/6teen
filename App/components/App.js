import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  Navigator,
  View
} from 'react-native';
import Home from './HomePage';
import Messages from './Messages';
import Profile from './Profile';

class app extends Component {

  constructor(props) {
    super(props);

    this.renderScene=this.renderScene.bind(this)
  }

  //https://facebook.github.io/react-native/docs/navigator.html
  renderScene(route, navigator) {
    let {state, actions } = this.props;
    let routeId = route.id;

    if(routeId == 'home') {
      return (
        <Home
          {...this.props}
          userData = {route.userData}
          navigator={navigator}
        />
      );
    }

    if(routeId == 'messages') {
      return(
        <Messages
          {...this.props}
          userData={route.userData}
          navigator={navigator}
        />
      );
    }

    if(routeId == 'profile') {
      return (
        <Profile
          {...this.props}
          userData={route.userData}
          navigator={navigator}
        />
      )
    }
  }
  render() {
    return(
      <View style={{flex:1}}>
        <Navigator
          style={{flex: 1}}
          ref={'NAV'}
          initialRoute={{id: 'home', name: 'home'}}
          renderScene={this.renderScene}
        />
        </View>
    );
  }
}

export default app;
