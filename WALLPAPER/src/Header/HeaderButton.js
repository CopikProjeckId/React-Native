import React from "react";
import Button from "../../atom/Button";
import Icon from "../../atom/Icons";

export default (props) => {
    return (
        <Button onPress = {props.onPress}>
            <Icon name = {props.IconName} size = {28}></Icon>
        </Button>
    );
}
// export class HeaderIcon extends React.Component {
//     render() {
//         return (
//             <Button onPress={this.props.onPress}>
//                 <Icon name = {this.props.IconName} size={28}></Icon>
//             </Button>
//         )
//     }
// }