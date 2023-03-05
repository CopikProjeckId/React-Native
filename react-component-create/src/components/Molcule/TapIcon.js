import React from "react";
import { View } from "react-native";
import { Badge } from "../atom/Badge";
import { Icon } from "../atom/Icons";

export class TabIcon extends React.Component {
    render() {
        if(this.props.visibles == true) {
            return (
                <View>
                    <Badge fontSize={10}>
                        <Icon name={this.props.name} size={20} color={'black'}></Icon>
                    </Badge>
                </View>
            );
        } 
        return(
            <View>
                <Icon name={this.props.name} size={20} color={'black'}></Icon>
            </View>
        )
        
    }
}