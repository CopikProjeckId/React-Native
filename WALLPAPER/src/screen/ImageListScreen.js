import React from "react";
import { View } from "react-native";
import Typography from "../atom/Typography";

export const ImageListScreen = (props) => {
    return (
        <View style={{flex : 1, alignItems: 'center', justifyContent: 'center'}}>
            <Typography fontSize={20}>
                IMAGE LIST
            </Typography>
        </View>
    )
}