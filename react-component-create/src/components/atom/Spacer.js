import React from "react";
import { View } from "react-native";

export default (props) => {
    return props.horizontal ? (
        <View style = {{marginLeft: props.space}}/>
    ) : (
        <View style = {{marginTop : props.space}}/>
    );
}
// export class Spacer extends React.Component{
//     render(){

//         if( this.props.horizontal ) {
//             return <View style={{marginLeft: this.props.space}}/>
//         }

//         return(
//             <View style={{marginTop: this.props.space}}/>
//         )
//     }
// }