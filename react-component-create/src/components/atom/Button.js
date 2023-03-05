import React from "react";
import { Pressable } from "react-native";

/** 내부 Component 에 Button 형식 Create */
export class Button extends React.Component {
    render(){
        return(
            <Pressable 
                onPress={this.props.onPress}
                hitSlop={this.props.hitSlop ?? {left: 0, right: 0, top: 0, bottom: 0}}
            >
                {this.props.children}
            </Pressable>
        )
    }
}