import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Login from '../Login/Login';
import Register from '../Register/Register';
import React, { PureComponent } from 'react'
import { Text, Dimensions } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function MyTabs({navigation, route}) {
  return (
    <Tab.Navigator 
    screenOptions={{
         tabBarStyle: { height:0.0001,},
        // tabBarAccessibilityLabel: 'false',
        //  tabBarShowLabel : false, 
        tabBarIndicator : false,
        tabBarBounces: true,
        tabBarIndicatorStyle: {
          backgroundColor:'white'
        }
        
      }}
        tabBarPosition= 'bottom'
        initialLayout = {{
        width: Dimensions.get('window').width
    }}  initialRouteName = {Login} 
    >


      <Tab.Screen options={{ tabBarShowLabel : false, tabBarIndicator : false}} name="Login" component={Login} />
      <Tab.Screen  options={{tabBarShowLabel : false}} name="Register" component={Register} />
    </Tab.Navigator>
  );
}