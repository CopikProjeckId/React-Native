import React from "react";
import { View } from "react-native";

export default (props) => {
    return (
        <View style = {{ alignSelf: 'stretch', borderWidth: 0.5, marginHorizontal:24, borderColor: 'grey'}}/>
    )
}
// export class Divider extends React.Component{
//     render() {
//         return (
//             <View style = {{ alignSelf: 'stretch', borderWidth: 0.5, marginHorizontal:24, borderColor: 'grey'}}></View>
//         )
//     }
// }