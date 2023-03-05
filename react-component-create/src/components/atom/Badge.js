import React from "react";
import { View } from "react-native";

export class Badge extends React.Component{
    render() {
        return (
            <View>
                <View>
                    {this.props.children}

                    <View
                        style={[{
                            width:16,
                            height:16,
                            borderRadius:8,
                            backgroundColor:'red',
                            alignItems:'center',
                            justifyContent: 'center',
                        }, {
                            position: 'absolute',
                            right: -5,
                            top: -5
                        }]}>

                    </View>
                </View>
            </View>
        );
    }
}