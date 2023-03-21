import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { ImageListScreen } from "../screen/ImageListScreen";
import { FavoriteImageList } from "../screen/FavoriteImageList";
import TabIcon from "../atom/TabIcon"
const Tabs = createBottomTabNavigator();

export const BottomTabNavigations = () => {
    return(
        <Tabs.Navigator screenOptions={({route}) => ({
            headerShown: false,
            tabBarIcon: ({focused, color, size}) => {
                const getIconName = () => {
                    if(route.name === 'ImageList') {
                        return 'home'
                    }
                    if(route.name === 'FavoriteImageList') {
                        return 'star'
                    }
                }
                const iconName = getIconName();
                return (
                    <TabIcon iconName={iconName} color = { focused ? 'tomato' : 'gray'}/>
                )
            }})}>
            <Tabs.Screen name='ImageList' component={ImageListScreen}></Tabs.Screen>
            <Tabs.Screen name='FavoriteImageList' component={FavoriteImageList}></Tabs.Screen>
        </Tabs.Navigator>
    );
}