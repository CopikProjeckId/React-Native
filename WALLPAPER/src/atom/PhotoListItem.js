import React from "react";
import { useWindowDimensions } from "react-native";
import Button from "./Button";
import { RemoteImage } from "./RemoteImage";

export const PhotoListItem = (props) => {
    // props . url

    const {width} = useWindowDimensions();

    const onPressItem = useCallback(()=> {

    }, []);

    return (
        <Button onPress = {onPressItem} padddingHorizontal={20} paddingVertical = {10}>
            <RemoteImage url = {props.url} width= {width - 40} height = {width * 1.2}/>
        </Button>
    )
}