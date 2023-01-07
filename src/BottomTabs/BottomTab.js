import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Info from '../Info/Info';
import HomeScreen from '../Screens/HomeScreen';
import UserDetails from '../UserDetails/UserDetails';
import Category_Data from '../Category/Category_Data' 
import CompanyInfo from '../CompanyInfo/CompanyInfo'
import Test from '../Default/App';
import Exercise from '../Exercise/Exercise';
import Neumorphism from 'react-native-neumorphism';
import { RFValue } from 'react-native-responsive-fontsize';
import BottomNavigators from '../Colors/BottomNavigators'

const{width, height} = Dimensions.get('window')

export default function BottomTab() {
    const Tab = createBottomTabNavigator();


  return (
    <>
      <Tab.Navigator  initialRouteName='Ima'
        screenOptions={{
            tabBarStyle:{
              width:width-24,
              position:'absolute',
              bottom:15,
              left:10,
              right:20,
              elevation:0,
              backgroundColor:'#ffffff',
              borderRadius:15,
              height:70,
                  ...style.shadow
            }
     }}>
        

{/* Categories */}

 <Tab.Screen
  name="Categories" component={Category_Data} 
        options={{
          tabBarLabel:() => {return null},
              tabBarIcon: () => (
                <View style={{alignItems:'center', justifyContent:'center',}}>
                  <Image
                        style=
                          {{
                            height:25,
                            width:25,
                            tintColor: BottomNavigators.logoColor,
                          }}
                          source={{uri:'https://cdn-icons-png.flaticon.com/512/4743/4743041.png'  } }
                        resizeMode='contain'
                        />
                        <Text style={{ 
                                      fontSize:RFValue(11, height),   
                                      color:BottomNavigators.textColors,
                                      marginBottom:-7, 
                                      paddingTop:2,
                                      fontFamily:'Kanit-Regular'
                                    }}>Categories</Text>
                        </View>
                        ),headerShown:false,
                          tabBarActiveBackgroundColor:BottomNavigators.backgroundColor,
                        tabBarItemStyle:{
                          borderBottomLeftRadius:15,
                          borderBottomRightRadius:15,
                          borderTopLeftRadius:15,
                          borderTopRightRadius:15}
                  }}
                   />

        
      {/* Info */}


      <Tab.Screen
            name="Info" component={Test}
              options={{
                tabBarLabel:() => {return null},
                tabBarIcon: () => (
                  <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Image
                        style=
                          {{
                            height:25,
                            width:25,
                            tintColor: BottomNavigators.logoColor,
                          }}
                          source={{uri:'https://cdn-icons-png.flaticon.com/128/151/151776.png'  }}
                        resizeMode='contain'
                        />
                    <Text style={{ 
                                  fontSize:RFValue(11, height),   
                                  color:BottomNavigators.textColors,
                                  marginBottom:-7, 
                                  paddingTop:2,
                                  fontFamily:'Kanit-Regular'
                                }}>Info</Text>
                        </View>
                        ),headerShown:false,
                        tabBarActiveBackgroundColor:BottomNavigators.backgroundColor,
                        tabBarItemStyle:{
                          borderBottomLeftRadius:15,
                          borderBottomRightRadius:15,
                          borderTopLeftRadius:15,
                          borderTopRightRadius:15}
                  }}
                   />

{/* HomeScreen */}

<Tab.Screen
           name="Ima" component={HomeScreen}
              options={{
                tabBarLabel:() => {return null},
                tabBarIcon: () => (
                  <View style={{
                                alignItems:'center', 
                                justifyContent:'center',
                                borderWidth:5, 
                                marginBottom:'90%', 
                                width:70, 
                                height:70,
                                borderRadius:35,
                                zIndex:999,
                                borderColor:'#00c89280',
                                backgroundColor:"white",
                                ...style.shadow
                                }}>
                    <Image
                        style=
                          {{
                            height:50,
                            width:50,
                            tintColor: "black",
                          }}
                        source={require('../image/logo.png')}
                        resizeMode='contain'
                        />
                        {/* <Text style={{fontSize:RFValue(14, height),   color:BottomNavigators.textColors,marginTop:-5, fontFamily:'Kanit-Bold'}}>Ima</Text> */}
                        </View>
                        ),headerShown:false,
                        // tabBarActiveBackgroundColor:BottomNavigators.backgroundColor,
                        // tabBarItemStyle:{
                        //   borderBottomLeftRadius:15,
                        //   }
                      }}
                  />

{/* Exercise */}
        <Tab.Screen 
            name="Exercise" component={Exercise}
            options={{
              tabBarLabel:() => {return null},
              tabBarIcon: () => (
                  <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Image
                      style=
                        {{
                          height:25,
                          width:25,
                          tintColor: BottomNavigators.logoColor,
                        }}
                      source={require('../image/exercise.png')}
                      resizeMode='contain'
                    />
                    <Text style={{ 
                                  fontSize:RFValue(11, height),   
                                  color:BottomNavigators.textColors,
                                  marginBottom:-7, 
                                  paddingTop:2,
                                  fontFamily:'Kanit-Regular'
                                }}>Exercise</Text>
                    </View>
                  ),headerShown:false,
                   tabBarActiveBackgroundColor:BottomNavigators.backgroundColor,
                  tabBarItemStyle:{
                    borderBottomLeftRadius:15,
                  borderBottomRightRadius:15,
                  borderTopLeftRadius:15,
                  borderTopRightRadius:15}
            }}
          />
        {/* My account */}
        <Tab.Screen 
          name="My Account" component={UserDetails} 
            options={{
              tabBarLabel:() => {return null},
              tabBarIcon: () => (
                  <View style={{alignItems:'center', justifyContent:'center',}}>
                    <Image
                      style=
                        {{
                          height:25,
                          width:25,
                          tintColor: BottomNavigators.logoColor,
                        }}
                      source={{uri:'https://cdn-icons-png.flaticon.com/128/1946/1946429.png'}}     
                      resizeMode='contain'
                  />
                   <Text style={{
                                fontSize:RFValue(10, height),   
                                color:BottomNavigators.textColors,
                                marginBottom:-7, 
                                paddingTop:4,
                                fontFamily:'Kanit-Regular',
                                // fontWeight:'100'
                                }}>My Account</Text>
               </View>
               ),headerShown:false,
               tabBarActiveBackgroundColor:BottomNavigators.backgroundColor,
               tabBarItemStyle:{
                  borderBottomLeftRadius:15,
                  borderBottomRightRadius:15,
                  borderTopLeftRadius:15,
                  borderTopRightRadius:15}
         }}
         />


      </Tab.Navigator>
 </>
  )
}


const style = StyleSheet.create({
  contact:{
      height:25,
      width:25,
      marginBottom:5,
      marginTop:5,
      resizeMode:'contain',
          },
  logo:{
      height:25,
      width:25,
      // tintColor:focused ? '#e32f45' : '#748c94',
      // marginBottom:5,
      // marginTop:5,
      resizeMode:'contain',    
        },
  account:{
      height:25,
      width:25,
      marginTop:5,
      marginBottom:5,
      resizeMode:'contain',
          },
  category:{
      height:25,
      width:25,
      marginTop:5,
      marginBottom:5,
      resizeMode:'contain',
        },
  shadow:{
    shadowColor:'#7F5DF0',
    shadowOffset:{
      width:0,
      height:10
    },
    shadowOpacity:0.25,
    shadowRadius:3.5,
    elevation:5
  }
  })
