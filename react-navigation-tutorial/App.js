import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenA } from './src/ScreenA';
import { ScreenB } from './src/ScreenB';
import { NestedStackNavigation } from './src/NestedStackNavigater';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabA } from './src/TabA';
import { TabB } from './src/TabB';

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
      <BottomTab.Navigator>
        <BottomTab.Screen name='TabA' component={TabA}></BottomTab.Screen>
        <BottomTab.Screen name='TabB' component={TabB}></BottomTab.Screen>
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}