import React, {Component} from 'react';
import {
    Text, View,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../../reducers/index';
import LibraryList from './LibraryList';
import Router from './Router';


export default class ChatScreen extends Component {

    render() {
      return (

        <View style={{ flex: 1 }}>
        <LibraryList />
        </View>

      );
    }
}
