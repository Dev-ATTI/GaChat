import React, { Component } from 'react';
import { Text, AsyncStorage } from 'react-native';
import _ from 'lodash';
import Slide from './Slide';
import Apploading from '../Apploading';

const SLIDE_DATA = [
  { text: 'Welcome to GaChat', color: '#007aff' },
  { text: 'Searching people in the same city and make friends with them', color: '#009688' },
  { text: 'Start Now!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  state= { token: null }

  componentWillMount() {
    let token = AsyncStorage.getItem('fb_token');
    if (token) {
  //    this.props.navigation.navigate('main');
    }
    
    this.setState({ token });

  }

  onSlideComplete = () => {
    this.props.navigation.navigate('login');
  }
  render() {
    if (_.isNull(this.state.token)) {
      return <Apploading />;
    }
    return <Slide data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
