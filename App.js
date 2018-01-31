import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Platform,

} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StackNavigator, TabNavigator } from 'react-navigation';
import LoginScreen from './src/common/LoginScreen/LoginScreen.js';
import MainScreen from './src/common/MainScreen/MainScreen.js';
import Router from './src/common/ChatScreen/Router';
import HomeScreen from './src/common/HomeScreen/HomeScreen';
import ChatScreen from './src/common/ChatScreen/ChatScreen';
import Chat from './src/common/ChatScreen/Chat';
import MomentScreen from './src/common/MomentScreen/MomentScreen';
import ProfileScreen from './src/common/ProfileScreen/ProfileScreen';
import WelcomeScreen from './src/common/WelcomeScreen/WelcomeScreen';
import MatchScreen from './src/common/MatchScreen/MatchScreen';
import DeckScreen from './src/common/DeckScreen/DeckScreen';
import LibraryList from './src/common/ChatScreen/LibraryList';
import ListItem from './src/common/ChatScreen/ListItem';
import reducers from './src/reducers';

const AppContent = StackNavigator({
    LoginScreen: {
        screen: LoginScreen,
        navigationOptions: {
            headerMode: 'screen',
            header: null,
        },
    },
    MainScreen: {
        screen: MainScreen,

        navigationOptions: {
            headerMode: 'screen',
            header: null,
        },
    },
});

export default class App extends Component {

    render() {
      const MainNavigator = TabNavigator({
        welcome: { screen: WelcomeScreen },
        login: { screen: LoginScreen },
        main: { screen: TabNavigator({
          home: { screen: HomeScreen },
          chat: { screen: StackNavigator({
            match: { screen: MatchScreen },
            list: { screen: LibraryList },
            chat: { screen: Chat },
            deck: { screen: DeckScreen },
            item: { screen: ListItem }
          })

           },
          moment: { screen: MomentScreen },
          profile: { screen: ProfileScreen }
        })
       }
     }, {
       navigationOptions: {
    //     tabBar: { visible: false }
        tabBarVisible: false
       },
       lazyLoad: true
     });
        return (
        <Provider store={createStore(reducers)}>
            <View style={styles.container}>
            <MainNavigator />
            </View>
            </Provider>


        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

    status_bar: {
        backgroundColor: 'white',
        ...Platform.select({
            android: {
                height: StatusBar.currentHeight
            },
            ios: {
                height: 20,
            }
        }),
    },
});
