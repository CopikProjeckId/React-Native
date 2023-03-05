import React from 'react';
import { View, Text } from 'react-native';

export class ScreenA extends React.Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text>이것은 스크린 A </Text>
            </View>
        )
    }
}