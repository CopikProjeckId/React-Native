import React from 'react';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { View } from 'react-native';
import { Spacer } from '../../atom/Spacer';
import { HeaderTitle } from './HeaderTitle';
import { HeaderIcon } from './HeaderButton';
import { HeaderGroup } from './HeaderGroup';
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
                            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                                {this.props.children}
                            </View>
                            <Spacer horizontal={true} space={12}></Spacer>
                            {/* 여기부터 진행 */}
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        )
    }
}

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;