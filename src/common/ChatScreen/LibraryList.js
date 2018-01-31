import React, {Component} from 'react';
import {
  LayoutAnimation,
   Text,
    TouchableWithoutFeedback,
     TouchableOpacity,
      View,
       Image,
        ListView,
        ActivityIndicator,
        Platform
      } from 'react-native';
import {connect} from 'react-redux';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';
import Profile from './Profile';
import Profiles from './Profiles';
import ListItem from './ListItem';
import Input from './Input';
import * as actions from '../../action/index.js';

class LibraryList extends Component {
  static navigationOptions = props => {
    const { navigation } = props;
    const { navigate } = navigation;
    return {
      headerTitle: 'Matching',
      headerStyle: {
        marginTop: Platform.OS === 'android' ? 24 : 0
      }

    };
  }
    state = { friendShow: true, friend: true, pending: false, loaded: false }

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }
    componentDidMount() {
      this.setState({ loaded: true });
    }
    pressPend() {
        if (this.state.friendShow) {
            this.setState({ friendShow: !this.state.friendShow });
        }
    }

    pressFriend() {
        if (!this.state.friendShow) {
            this.setState({ friendShow: !this.state.friendShow });
        }
    }
    chat() {
      console.log('chatting');
    }
    renderContent() {
        if (this.state.friendShow) {
            return (
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            );
        }
        return;
    }

    renderRow(library) {
        return <ListItem library={library} connectChat={() => this.props.navigation.navigate('chat', { name: library.title })} />;
    }

    render() {
      if (!this.state.loaded) {
        return (
          <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size="large" />
          </View>
        );
      }
        return (
            <Card>
                <CardSection>
                    <Button status={this.state.friendShow} whenPressed={this.pressFriend.bind(this)}>Friends</Button>
                    <Button status={!this.state.friendShow} whenPressed={this.pressPend.bind(this)}>Pending</Button>
                </CardSection>
                <CardSection>
                    <Input style2={{height: 20}}/>
                </CardSection>
                {this.renderContent()}
            </Card>
        );
    }
}

const mapStateToProps = state => {
//    console.log(state.libraries);
    return {libraries: state.libraries};
};


export default connect(mapStateToProps)(LibraryList);
