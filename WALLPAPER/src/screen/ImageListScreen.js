import React from "react";
import { FlatList, View } from "react-native";
import { PhotoListItem } from "../atom/PhotoListItem";
import Typography from "../atom/Typography";
import { IMAGE_LIST } from "../constants";
import { Header } from "../Header/Header";

export const ImageListScreen = (props) => {
    return (
        <View style={{flex : 1}}>
            <Header>
                <Header.Group>
                    <Header.Title title = 'IMAGE LIST'/>
                </Header.Group>
            </Header>
            <FlatList
                style = {{flex : 1}}
                data = {IMAGE_LIST}
                renderItem = {({item}) => {
                    return <PhotoListItem url = {item}/>
                }}

            ></FlatList>
        </View>
    )
}