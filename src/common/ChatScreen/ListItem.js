import React, {Component} from 'react';
import {LayoutAnimation, Text, TouchableWithoutFeedback, TouchableOpacity, View, Image, ActivityIndicator} from 'react-native';
import {connect} from 'react-redux';
import { Actions } from 'react-native-router-flux';
import CardSection from './CardSection';
import Button from './Button';
import Profile from './Profile';
import Profiles from './Profiles';
import * as actions from '../../action/index.js';

/* eslint-disable global-require */
class ListItem extends Component {

    state = { showModal: false, show: false, loaded: false }

    componentWillMount() {

    }
    componentDidMount() {
      this.setState({ loaded: true });
    }

    componentWillUpdate() {
        LayoutAnimation.spring();
    }

    onAccept() {
        console.log('close');
        this.setState({showModal: false});
    }

    renderDescription() {
        if (this.props.expanded && !this.state.show) {
            this.state.show = !this.state.show;
            return (
                <CardSection>
                    <Text style={{flex: 1}}>{this.props.library.description}</Text>
                </CardSection>
            );
        }
        if (!this.props.expanded && this.state.show) {
            this.state.show = !this.state.show;
        }
    }

    render() {
        const  {id, title, thumbnail } = this.props.library;
        const { textStyle, image, image2, image3 } = styles;
        if (!this.state.loaded) {
          return(
            <View style={{ flex: 1, justifyContent: 'center' }}>
            <ActivityIndicator size="large" />
            </View>
          );
        }
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.selectLibrary(id, this.state.show);
                }}
            >
                <View>
                    <CardSection>

                        <TouchableOpacity onPress={() => this.setState({showModal: !this.state.showModal})}>

                            <Image
                                source={{uri: thumbnail}} style={image} cacheEnabled={true}
                            />

                        </TouchableOpacity>
                        <Text style={textStyle}>{title}</Text>
                        <Image source={require('../../../assets/images/red.png')} style={image2}/>
                        <Image source={require('../../../assets/images/blue.png')} style={image3}/>
                        <Button
                            style={{
                                justifyContent: 'flex-start',
                                alignSelf: 'flex-end',
                                flex: 1,
                                marginLeft: 80,
                                backgroundColor: '#FFFFFF'
                            }}
                            whenPressed={this.props.connectChat}
                        >
                            聊天
                        </Button>
                    </CardSection>
                    {this.renderDescription()}
                    <Profile visible={this.state.showModal} Accept={this.onAccept.bind(this)} library={this.props.library}>
                        防尬聊话题
                    </Profile>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    textStyle: {
        marginTop: 12,
        fontSize: 18,
        paddingLeft: 15
    },
    image: {
        height: 40,
        width: 40
    },
    image2: {
        paddingLeft: 5,
        height: 10,
        width: 10,
        paddingRight: 5,
        marginLeft: 5,
        marginRight: 2.5,
        marginTop: 16
    },
    image3: {
        paddingLeft: 5,
        height: 10,
        width: 10,
        paddingRight: 5,
        marginLeft: -1.3,
        marginRight: 2.5,
        marginTop: 16
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.id === state.selectedLibraryId;
    return {expanded};
};


export default connect(mapStateToProps, actions)(ListItem);
