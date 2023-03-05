import React from 'react';
import { View, Text, Button } from 'react-native';

export class ScreenB extends React.Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text>This is B-Screen {this.props.route.params.value}</Text>

                <Button 
                    title='Move To A-Screen - this is Back'
                    onPress={() => {
                        console.log('Move a B -> A Screen');
                        this.props.navigation.navigate('ScreenA');
                    }}/>
            </View>
        )
    }
}