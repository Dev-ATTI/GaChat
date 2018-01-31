import React, { Component } from 'react';
import { Text, Image, LayoutAnimation, ListView, View, ActivityIndicator, Platform } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import ChatScene from './ChatScene.js';
import Header from './Header.js';
import Input from './Input.js';
import Button from './Button';
import CardSection from './CardSection';
import Card from './Card';
import MessageItem from './MessageItem';

class Chat extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate, state } = navigation;
    return {
      headerTitle: state.params.name,
      
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }
  /* eslint-disable global-require */
  state={ text: 'text1', istyle: styles.image1, cstyle: styles.c1s1, msg: '', result: [], loaded: true };
  componentWillMount() {
    const { result } = this.state;
    this.ws = new WebSocket('ws://192.168.1.107:3001');
    this.ws.onmessage = (msg) => {
      this.onMessageReceive(msg);
    };
    this.state.result.push({ content: 'Hello', user: true });
    this.state.result.push({ content: 'Hi', user: false });
    this.createDataSource(this.state);
    console.log(this.props.navigation.state.params.name);
  //  this.dataSource = ds.cloneWithRows(this.state.result);
  }
  componentDidMount() {
//    this.setState({ loaded: true });
  }
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps.state);
  }
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  componentWillUnmount() {
    this.ws.send('unmounting...');
  }
  onMessageReceive(msg) {
          this.state.result.push({ content: msg.data, user: false });
          this.createDataSource(this.state);
          this.setState({ cont: 'hahaha' });
  }
   onMessageSend() {
     const { msg, result } = this.state;
     result.push({ content: msg, user: true });
     this.createDataSource(this.state);
     this.ws.send(msg);
     this.setState({ msg: '' });
   }


   createDataSource({ result }) {
     const ds = new ListView.DataSource({
       rowHasChanged: (r1, r2) => r1 !== r2
     });

     this.dataSource = ds.cloneWithRows(result);
   }

   renderRow(library) {
     return <MessageItem library={library} />;
   }
  render() {
    return (
      <Card style={this.state.cstyle}>
      <CardSection style={{ flex: 0.9 }}>
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
      </CardSection>
      <CardSection style={{ flex: 0.1, justifyContent: 'flex-end', padding: 0 }}>
      <Input
      onFocus={() => {
         this.setState({ text: 'TEXT', istyle: styles.image2, cstyle: styles.c1s2 });
      }}
      style={{
         borderWidth: 1.5,
         borderRadius: 10,
         borderColor: '#d1d1d1',
         marginBottom: 10,
        }}
      value={this.state.msg}
      onChangeText={msg => this.setState({ msg })}
      />
      <Button
      style={{
        marginLeft: 0,
         marginRight: 10,
         width: 30,
         flex: 0.17,
         height: 14
        }}
      style2={{
        paddingTop: 4,
        paddingBottom: 1
      }}
      whenPressed={this.onMessageSend.bind(this)}
      >
        Send
        </Button>
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
