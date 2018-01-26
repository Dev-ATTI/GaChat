import React, { Component } from 'react';
import { Text, Image, LayoutAnimation, View } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import ChatScene from './ChatScene.js';
import Header from './Header.js';
import Input from './Input.js';
import CardSection from './CardSection';
import Card from './Card';

class Chat extends Component {
  /* eslint-disable global-require */
  state={ text: 'text1', istyle: styles.image1, cstyle: styles.c1s1 };
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
   ComponentWillReceiveProps() {

   }
  render() {
    return (
      <Card style={this.state.cstyle}>
      <CardSection style={{ flex: 0.9 }}>
      <Text>{this.state.text}</Text>
      <Image source={require('../../../assets/images/red.png')} style={this.state.istyle} />
      </CardSection>
      <CardSection style={{ flex: 0.1, justifyContent: 'flex-end', padding: 0 }}>
      <Input
      onFocus={() => { this.setState({ text: 'TEXT', istyle: styles.image2, cstyle: styles.c1s2 });
      }}
      />
      </CardSection>
      </Card>
    );
  }
}

const styles = {
  image1: {
    height: 100,
    width: 100
  },
  image2: {
    height: 50,
    width: 50
  },
  c1s1: {
    flex: 0.95
  },
  c1s2: {
    flex: 0.58
  }
};

export default Chat;
