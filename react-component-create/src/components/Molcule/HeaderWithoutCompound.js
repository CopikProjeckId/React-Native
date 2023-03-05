import React from "react";
import { Dimensions } from "react-native";
import { View } from "react-native";
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import { Spacer } from "../atom/Spacer";
import { Button } from "../atom/Button";
import { Icon } from "../atom/Icons";
import { Typography } from "../atom/Typography";

const {width} = Dimensions.get('window');

export class HeaderWithoutCompound extends React.Component{
    render() {
        return (
            <SafeAreaInsetsContext.Consumer>
            {insets => (
                <View style={{paddingTop:insets.top}}>
                    <View style={{
                        width:width, 
                        height:56, 
                        flexDirection: 'row', 
                        borderBottomColor:'grey', 
                        borderBottomWidth: 1}}
                        >
                        
                        <Spacer horizontal={true} space={12}></Spacer>
                        <View style={{flex: 1, flexdirection:'row', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row', alignItems:'center', paddingTop: 12}}>

                                {this.props.leftIcon && (
                                    <Button onPress={this.props.leftIcon.onPress}>
                                        <Icon name={this.props.leftIcon.name} size={28}></Icon>
                                    </Button>
                                )}

                                <Typography fontSize={18}>{this.props.title}</Typography>
                            </View>
                            {this.props.rightIcon && (
                                <Button onPress={this.props.rightIcon.onPress}>
                                    <Icon name={this.props.rightIcon.name} size={28}></Icon>
                                </Button>
                            )}
                        </View>
                        <Spacer horizontal={true} space={12}></Spacer>
                    </View>
                </View>
            )}
            </SafeAreaInsetsContext.Consumer>
        )
    }
}