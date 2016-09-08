import React, {Component} from 'react';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
import Components from '../components/App';
import { View, Text} from 'react-native';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Provider store={store}>
          <Components/>
        </Provider>
      </View>
    );
  }
}
