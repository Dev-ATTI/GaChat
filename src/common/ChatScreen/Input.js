import React from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry, style, style2, onFocus }) => {
    const {inputStyle, labelStyle, containerStyle} = styles;

    return (
        <View style={[containerStyle, style2]}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={[inputStyle, style]}
                value={value}
                onFocus={onFocus}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 15,
    //    lineHeight: 23,
        flex: 1
    },
    labelStyle: {
        fontSize: 15,
        paddingLeft: 20,
        flex: 0
    },
    containerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 40
    }
};

export default Input;
