import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { Spacer } from '../../atom/Spacer';
const {width} = Dimensions.get('window');

export class Header extends React.Component{
    render(){
        return(
            <SafeAreaInsetsContext.Consumer>
                {insets =>(
                    <View style={{paddingTop: insets.top,}}>
                        <View style={{
                            width: width,
                            flexDirection:'row',
                            height:56, 
                            borderBottomColor:'grey',
                            borderBottomWidth: 1,
                            alignItems:'center',
                            }}>
                            <Spacer horizontal={true} space={12}></Spacer>
                            <View style={{}}></View>
                            {/* 여기부터 진행 */}
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        )
    }
}