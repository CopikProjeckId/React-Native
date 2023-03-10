import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from './src/ScreenA';
import { ScreenB } from './src/ScreenB';
import { NestedStackNavigation } from './src/NestedStackNavigater';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabA } from './src/TabA';
import { TabB } from './src/TabB';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { BottomTabNavigator } from './src/BottomTabNavigator';
import { ScreenC } from './src/ScreenC';

const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name ='ScreenA' component={ScreenA}></Stack.Screen>
//         <Stack.Screen name ='ScreenB' component={ScreenB}></Stack.Screen>
//         <Stack.Screen name ='NestedNavigation' component={NestedStackNavigation}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={'NestedBottomTab'} component={BottomTabNavigator}/>
        <Stack.Screen name={'ScreenB'} component={ScreenB}/>
        <Stack.Screen name={"NestedNavigation"} component={ScreenC}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}