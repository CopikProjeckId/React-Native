import React from "react";
import { View } from "react-native";
import Typography from "../atom/Typography";

export const FavoriteImageList = (props) => {
    return (
        <View style = {{flex : 1, alignItems: 'center', justifyContent: "center"}}>
            <Typography fontSize={20}>
                FAVORITE IMAGE
            </Typography>
        </View>
    );
}