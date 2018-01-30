import React, { Component } from 'react';
import { Text, ScrollView, View, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slide extends Component {

  renderLastSlide(index) {
    if (index === this.props.data.length - 1) {
      return (
        <Button
        title="Get Start!"
        raised
        buttonStyle={styles.buttonStyle}
        onPress={this.props.onComplete}
        />
      );
    }
  }

  renderSlide() {
    return this.props.data.map((slide, index) => {
      return (
      <View key={slide.text} style={[styles.slide, { backgroundColor: slide.color }]}>
      <Text style={styles.slideText}>{slide.text}</Text>
      {this.renderLastSlide(index)}
      </View>
    );
    });
  }

  render() {
    return (
      <ScrollView
      horizontal
      pagingEnabled
      style={{ flex: 1 }}
      >
      {this.renderSlide()}
      </ScrollView>
    );
  }
}

const styles = {
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH
  },
  slideText: {
    fontSize: 35,
    color: 'white',
    textAlign: 'center'
  },
  buttonStyle: {
    backgroundColor: '#0288d1',
    marginTop: 15,
  }
};

export default Slide;
