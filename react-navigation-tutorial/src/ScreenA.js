import React from 'react';
import { View, Text, Button } from 'react-native';

export class ScreenA extends React.Component {
    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
                <Text>This is A-Screen</Text>

                <Button 
                    title='Move To B-Screen'
                    onPress={() => {
                        console.log('Move a A -> B Screen');

                        this.props.navigation.navigate('ScreenB', {value:'fromA'});
                        // this.props.navigation.navigate('[이동할 스크린]', {parameter Name : Value});
                    }}/>

                <Button 
                    title='Move To C-Screen'
                    onPress={() => {
                        console.log('Move a A -> C Screen to NestedNavigation');

                        this.props.navigation.navigate('NestedNavigation');
                        // this.props.navigation.navigate('[이동할 스크린]', {parameter Name : Value});
                    }}/>
            </View>
        )
    }
}