import { View, Text, LogBox } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
//Screens
import NavigationBar from './src/NavigationBar/NavigationBar';

LogBox.ignoreLogs(["EventEmitter.removeListener"]);




LogBox.ignoreLogs(["Please report: Excessive number of pending callbacks: 501. "])

// LogBox.ignoreLogs([" VirtualizedList"])

LogBox.ignoreLogs([`ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'`]);
LogBox.ignoreLogs(["Invariant Violation: "]);
LogBox.ignoreLogs(["ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'"]);
 LogBox.ignoreLogs(["A VirtualizedList contains a cell which itself contains more than one VirtualizedList of the same orientation as the parent list. You must pass a unique listKey prop to each sibling list"]);

 const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Test></Test>
    <NavigationContainer
    // onReady={() => RNBootSplash.hide()}
     >
      {/* <Stack.Navigator> */}
        <NavigationBar/>
      {/* </Stack.Navigator> */}
        
    </NavigationContainer>

  )
}