import React, { Component } from 'react';
import { Text } from 'react-native';
import Slide from './Slide';

const SLIDE_DATA = [
  { text: 'Welcome to GaChat', color: '#007aff' },
  { text: 'Searching people in the same city and make friends with them', color: '#009688' },
  { text: 'Start Now!', color: '#03a9f4' }
];

class WelcomeScreen extends Component {
  onSlideComplete = () => {
    this.props.navigation.navigate('login');
  }
  render() {
    return <Slide data={SLIDE_DATA} onComplete={this.onSlideComplete} />;
  }
}

export default WelcomeScreen;
