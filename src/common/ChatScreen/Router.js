import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LibraryList from './LibraryList';
import Chat from './Chat';
import ChatScene from './ChatScene';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="list" component={LibraryList} title="匹配列表" hideNavBar />
                <Scene key="chat" component={Chat} title='聊天列表' hideNavBar />
                <Scene
                  key="sc"
                  hideNavBar
                  component={ChatScene}
                  title=''
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
