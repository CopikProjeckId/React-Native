import React from "react";
import { Typography } from '../../atom/Typography';

export class HeaderTitle extends React.Component {
    render() {
        return (
            <Typography fontSize={20}>{this.props.title}</Typography>
        )
    }
}