import React from "react";
import Badge from "./Badge";
import Icon from "./Icons";
export default (props) => {
    if(props.visibleBadge) {
        return (
            <Badge fontSize ={10}>
                <Icon 
                    name = {props.iconName}
                    size = {20}
                    color = {props.color}
                />
            </Badge>
        )
    }
    return (
        <Icon 
            name = {props.iconName}
            size = {20}
            color = {props.color}
        />
    )
}