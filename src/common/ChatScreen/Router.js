import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LibraryList from './LibraryList';
import Chat from './Chat';
import ChatScene from './ChatScene';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="list" component={LibraryList} title="匹配列表" />
                <Scene key="chat" component={Chat} title='聊天列表' />
                <Scene
                  key="sc"
                  hideNavBar={false}
                  component={ChatScene}
                  title=''
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
