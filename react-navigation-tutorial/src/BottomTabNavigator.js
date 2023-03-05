import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { NestedStackNavigation } from "./NestedStackNavigater";
import { TabA } from "./TabA";

const BottomTab = createBottomTabNavigator();
export class BottomTabNavigator extends React.Component{
 render(){
    return(
        <BottomTab.Navigator>
            <BottomTab.Screen name='TabA' component={TabA} 
                options={{tabBarIcon:()=> <Ionicons name='home' size={20} color="black"/>}}/>

            <BottomTab.Screen name='TabB' component={NestedStackNavigation}
                options={{tabBarIcon:()=> <Ionicons name='menu' size={20} color="black"/>}}/>
        </BottomTab.Navigator>
    )
 }
}