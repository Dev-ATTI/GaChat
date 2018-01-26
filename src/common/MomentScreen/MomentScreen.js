import React, {Component} from 'react';
import {
    Image, StyleSheet,
    Text, View, VirtualizedList,
} from 'react-native';
import _isEqual from 'lodash/isEqual';
import _size from 'lodash/size';
import _forEach from 'lodash/forEach';
import _values from 'lodash/values';
import Moment from './Moment.js'


export default class MomentScreen extends Component {


    constructor(props){
        super(props);


        let numberOfData = 300;
        let data;

        data = this.generateData(numberOfData);

        this.state = {
            numberOfData: numberOfData,
            data : data,
        }
    }


    generateData = (numberOfData) =>{
        let data = Array(numberOfData);
        for(let i = 0; i < numberOfData; i++){
            let dataOfRow = {};
            dataOfRow.key = i;
            dataOfRow.userName = 'user' + i
            if(i % 13 === 0){
                dataOfRow.content = '0123456789';
            }else{
                dataOfRow.content = data[i - 1].content + '0123456789';
            }
            data[i] = dataOfRow;
        }
        return data;

    };

    render() {
        return (
            <View style={{flex:1, backgroundColor:this.props.bgColor}}>
                <MomentList data={this.state.data}/>
            </View>
        );
    }
}


class MomentList extends Component
{
    constructor(props)
    {
        super(props);
        this.getItem = this.getItem.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        return !_isEqual(this.props, nextProps) || !_isEqual(this.state, nextState);
    }


    getItem(data, index) {
        return data[index];
    }

    renderRow(row)
    {
        return(
            <Moment row={row}/>
        );
    }

    render()
    {

        return (
            <VirtualizedList
                keyExtractor={(item) => item.key}
                data={_values(this.props.data)}
                renderItem={this.renderRow}
                getItem={(data,index) => this.getItem(data,index)}
                getItemCount={(data) => data ? _size(data) : 0}
                contentContainerStyle={{ flexGrow: 1, overflow: 'hidden' }}
                showsVerticalScrollIndicator={false}
                automaticallyAdjustContentInsets={false}
                removeClippedSubviews={false}
                enableEmptySections={true}
            />
        )
    }
}

