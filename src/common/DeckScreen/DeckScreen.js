import React, { Component } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import Swipe from './Swipe';

class DeckScreen extends Component {


    static navigationOptions = props => {
      const { navigation } = props;
      const { navigate } = navigation;
      return {
        headerTitle: 'Matching',
        headerRight:
                      <Button
                        title="Filter"
                        onPress={() => navigate('chat', {name: 'Brent'})}
                        backgroundColor="rgba(0,0,0,0)"
                        color="#007aff"
                      />,

        headerStyle: {
          marginTop: Platform.OS === 'android' ? 24 : 0
        }

      };
    }

  componentWillMount() {
    console.log(this.props.libraries);
  }
        /* eslint-disable global-require */
  renderCard = (person) => {
    return (
      <Card title={person.title}>
      <View style={{ height: 300 }}>
      <Image
          source={{ uri: person.thumbnail }} style={{ flex: 1 }} cacheEnabled={true}
      />
      </View>
      <View style={styles.detailWrapper}>
      <Image source={require('../../../assets/images/timg.jpeg')} style={{ height: 20, width: 20 }} />
      <Text style={{ fontSize: 18 }}>22</Text>
      </View>
      <Text>ssssssssssssssssssssssss</Text>
      </Card>
    );
    }
  renderNoMoreCards = () => {
      return (
        <Card title='No More Matches!'>
        </Card>
      );
  }
  swipeRight = (person) => {

  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <Swipe
      data={this.props.libraries}
      renderCard={this.renderCard}
      renderNoMoreCards={this.renderNoMoreCards}
      person={this.renderCard.person}
      swipeRight={this.swipeRight}
      />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginTop: 10
  }
};

const mapStateToProps = state => {
//    console.log(state.libraries);
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(DeckScreen);
