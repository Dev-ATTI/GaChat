import React, { Component } from 'react';
import { Text, Image, View } from 'react-native';

class MessageItem extends Component {
  componentWillMount() {
  }

  render() {
    const { style1, style2 } = styles;
    const { content, user } = this.props.library;
    if (user) {
    return (
      <View style={style2} >
      <Text>{content}</Text>
      </View>
    );
  }
  return (
    <View style={style1} >
    <Text>{content}</Text>
    </View>
  );
  }
}

const styles = {
  style1: {
    alignItems: 'flex-start'
  },
  style2: {
    alignItems: 'flex-end'
  }
};

export default MessageItem;
