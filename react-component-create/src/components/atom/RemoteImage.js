import React from "react";
import { Image as RNImage } from "react-native";

export default (props) => {
    return (
        <RNImage source={{uri : props.uri}} style={[props.style, {width: props.width, height: props.height}]}/>
    )
}
// export class RemoteImage extends React.Component {
//     render() {
//         return (
//             <RNImage source={{uri: this.props.uri}} 
//             style={[this.props.style, {width: this.props.width, height: this.props.height}]}/>
//         )
//     }
// }