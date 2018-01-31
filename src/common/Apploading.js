import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Apploading extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 35, textAlign: 'center' }}>Hello, Loading...</Text>
      </View>
    );
  }

}

export default Apploading;
