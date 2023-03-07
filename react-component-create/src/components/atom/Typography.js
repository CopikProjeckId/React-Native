import React from "react";
import { Text as RNText } from "react-native";
import PropTypes from 'prop-types'

// export default Typography = (props) => {
//     return (
//         <RNText style={{color: props.color, fontSize: props.fontSize}}>
//             {props.children}
//         </RNText>
//     )
// }
export class Typography extends React.Component {
    render() {
        return (
            <RNText style={{color: this.props.color, fontSize: this.props.fontSize}}>
                {this.props.children}
            </RNText>
        );
    }
}

/** isRequired : 필수요소 */
Typography.propTypes = {
    color: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
}
