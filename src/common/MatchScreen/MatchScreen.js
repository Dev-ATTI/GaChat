import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';


class MatchScreen extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: 'Matching',
      headerRight:
                    <Button
                      title="Chatting"
                      onPress={() => navigate('chat')}
                      backgroundColor="rgba(0,0,0,0)"
                      color="#007aff"
                    />,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }

  render() {
    return <Text>hello welcome this is MatchScreen!</Text>;
  }
}

export default MatchScreen;
