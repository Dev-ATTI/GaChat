import React, { Component } from 'react';
import { Text, Platform, View, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';

class MatchScreen extends Component {

  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: 'Matching',
      headerRight:
                    <Button
                      title="Chat"
                      onPress={() => navigate('list')}
                      backgroundColor="rgba(0,0,0,0)"
                      color="#007aff"
                    />,
      headerLeft:
                  <Button
                      title="Search"
                      onPress={() => navigate('deck')}
                      backgroundColor="rgba(0,0,0,0)"
                      color="#007aff"
                  />,
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }
  componentDidMount() {
    this.setState({ mapLoaded: true });
    //4201738803816157
  }
  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }
  render() {
    if (!this.state.mapLoaded) {
      return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size="large" />
      </View>
    );
    }
    return (
      <View style={{ flex: 1 }}>
        <MapView
        region={this.state.region}
        style={{ flex: 1 }}
        onRegionChangeComplete={this.onRegionChangeComplete}
        />
      </View>
    );
  }
}

export default MatchScreen;
