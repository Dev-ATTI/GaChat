import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, Dimensions} from "react-native";
import {Col, Row, Grid} from "react-native-easy-grid";

export default class Moment extends Component {

    render() {
        const {width, height} = Dimensions.get('window');

        return (
            <View style={styles.moment_container}>
                <Grid>
                    <Col style={{width: 55, padding: 0}}>
                        <Image
                            style={{
                                flex: 1, height: 45, width: 45, position: 'absolute',
                                left: 5,
                                top: 5,
                                right: 5
                            }}
                            resizeMode={'contain'}
                            source={require('../assets/images/dog.jpg')}
                        />
                    </Col>
                    <Col>
                        <Row style={{alignItems:'stretch', justifyContent:'center', flex: 1}}>
                            <Text style={{height:55, fontSize: 22, textAlign:'center'}}>2</Text>
                        </Row>
                        <Row>
                            <Text>3</Text>
                        </Row>
                        <Row>
                            <Text>2</Text>
                        </Row>
                        <Row>
                            <Text>3</Text>
                        </Row>
                        <Row>
                            <Text>2</Text>
                        </Row>
                        <Row>
                            <Text>3</Text>
                        </Row>
                        <Row>
                            <Text>2</Text>
                        </Row>
                        <Row>
                            <Text>3</Text>
                        </Row>
                    </Col>
                </Grid>
                {/*<Image*/}
                {/*resizeMode={'contain'}*/}
                {/*style={{height: height * 0.2, width: height * 0.2}}*/}
                {/*source={require('../assets/images/dog.jpg')}*/}
                {/*/>*/}
                {/*<Text style={styles.moment_header}>*/}

                {/*{this.props.row.item.userName}*/}
                {/*</Text>*/}
                {/*<Text style={styles.moment}>*/}
                {/*{'data:' + this.props.row.item.content}*/}

                {/*</Text>*/}
            </View>

        );
    }

}


const styles = StyleSheet.create({

    moment: {
        backgroundColor: 'white',
    },

    moment_header: {
        alignItems: 'center',
        fontSize: 22,

    },

    moment_container: {
        backgroundColor: 'white',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },


});