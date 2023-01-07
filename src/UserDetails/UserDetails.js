import { 
  Text, 
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image , 
  Alert, 
  DevSettings,
  Linking,
  ActivityIndicator,
  Dimensions
} from 'react-native'
import Neumorphism from 'react-native-neumorphism'
import React, { useEffect, useState, BackHandler } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RFValue } from 'react-native-responsive-fontsize'

const {width, height} = Dimensions.get('window')

export default function UserDetails({navigation}) {
  const [userName, setUserName] = useState()
  const [userEmail, setUserEmail] = useState()
  const [loader, setLoader] = useState(false);
  const [userToken, setUserToken] = useState()
  const [state, setState] = useState({});
  const [disableButton, setDisableButton] = useState(false)

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('UserToken')
      const json = JSON.parse(jsonValue)
    //  console.log(json)

      const UserName = await AsyncStorage.getItem('Username')
    //  console.log(UserName)

      const UserEmail = await AsyncStorage.getItem('Useremail')
      // console.log(UserEmail)

      const value = await AsyncStorage.getItem('UserId')
     // console.log(value)
      setUserName(UserName) 
      setUserToken(json)
      setUserEmail(UserEmail)

      const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
      const json1 = JSON.parse(jsonValue1)
    //  console.log(json1)
    } catch (error) {
      }}

  React.useEffect(() => {
    // console.log("User Details Page")
    getData()
  
return () => {
  setState({}); // This worked for me
};
  },[])
  

  function call2nd(){
    setTimeout(call1st, 100)
}

  const call1st =  async() => 
            {
              setDisableButton(true)
              setLoader(true) 
              const jsonValue = await AsyncStorage.getItem('UserToken')

              const json = JSON.parse(jsonValue)

              var axios = require('axios');
              
              var config = 
                  {
                    method: 'post',
                    url: 'https://test.sarinskin.com/wp-json/cocart/v2/logout',
                    headers: { 
                        'Authorization': `Bearer ${json}`,   
                              }
                   };
    
    axios(config)
    .then(async (response) =>  
            {
      Alert.alert(
        `Are you sure?`,
        "You want to logout..",
        [
          {
            text: "Yes",
            onPress: () => Yes(),    
          },
          { text: "No", onPress: () =>  No(),}
        ]
      );
          })
    .catch(function (error) {
      console.log(error);
    });

   setTimeout(call3rd, 2000)
              }

function call3rd(){
  setLoader(false) 
}
  const OnLogoutHandler = async (event) => {
   call2nd()
    }
  const Yes = async() => 
              {
                  await AsyncStorage.removeItem("userName")
                  await AsyncStorage.removeItem("UserId")
                  await AsyncStorage.removeItem("AdminToken1st")
                  await  AsyncStorage.removeItem("UserToken")
                  setDisableButton(false)
                  navigation.replace("SplashScreen")
              }   
const No = () => {
  setDisableButton(false)
  navigation.navigate('Home') 
}
//User name 
const username = userName
const useremail = userEmail

  return ( 
    
  <View style={{
                height,
                backgroundColor:'white'
              }}>

            <View 
               style={style.background}
               > 
                 <Image
                style={{
                  height:height/9.5,
                  width:width/5,
                  marginLeft:'auto',
                  marginRight:'auto',
                  marginTop:'4%',
                  borderRadius:35, 
                }}
                source={require('../image/user.png')}/>
  
          <Text style={{  
                        marginLeft:'auto',
                        marginRight:'auto',
                        marginTop:10,
                        fontFamily:'Montserrat-SemiBold',
                        fontSize:RFValue(22, height),
                        color:'black',
                        letterSpacing:2,
                        textShadowColor: '#000', 
                        textShadowOffset: { width: 0.5, height: 0.5 }, 
                        textShadowRadius: 1,
                      }}> 
            {username} 
            </Text> 
            <Text style={{  
                        marginLeft:'auto',
                        marginRight:'auto',
                        marginTop:3,
                        fontSize:RFValue(17, height),
                        fontFamily:'Montserrat-Regular',
                        color:'#eeeeee',
                        letterSpacing:1,
                        letterSpacing:2,
                        textShadowColor: '#000', 
                        textShadowOffset: { width: 0.5, height: 0.5 }, 
                        textShadowRadius: 1,
                        }}> 
            {useremail} 
            </Text> 
            </View>
        
        {/*-------------Order------Section------Start------ */}
  
      <View style={{
                    backgroundColor:'white',
                    }}>
      <Neumorphism 
                  lightColor={'#F7F5F2'}
                  darkColor={'#F7F5F2'}
                  style={{
                        width:width-20,
                        marginLeft:10
                        }}>
        <TouchableOpacity
                        onPress={() => navigation.navigate('AllOrders')}
                        style={{
                                flexDirection:'row', 
                                marginTop:15,
                                }}>
               <Image
                    style={{
                            height:height/24, 
                            width:width/12,
                            marginLeft:10, 
                            marginTop:5,
                            marginBottom:5
                          }}
                    source={{uri : 'https://cdn-icons-png.flaticon.com/128/1524/1524539.png'}}
                    />
                <View style={{ width:width/1.4}}>
                <Text 
                      style={{
                              fontSize:RFValue(18, height), 
                              marginLeft:"5%", 
                              fontFamily:'Montserrat-SemiBold',
                              marginTop:'2%',  
                              color:'black',
                              borderBottomWidth:1,
                              letterSpacing:1,
                              textShadowOffset: { width: 0.5, height: 0.5 }, 
                              textShadowRadius: 1, 
                            }}>View All Orders</Text>
                </View>
               <Image
                      style={{
                              height:25,
                              width:25, 
                              tintColor:'black'
                            }}
                      source={require('../image/arrow.png')}
                    />
          </TouchableOpacity>
  
      {/*-------------Order------Section------END------ */}
      {/*-------------Help------Section------END------ */}
  
                <TouchableOpacity
                                onPress={() => navigation.navigate('CompanyInfo')}
                                style={{
                                        flexDirection:'row', 
                                        marginTop:15,
                                        }}>
               <Image
                    style={{
                            height:height/24, 
                            width:width/12,
                            marginLeft:10, 
                            marginTop:5,
                            marginBottom:5
                          }}
                    source={{uri : 'https://cdn-icons-png.flaticon.com/128/950/950299.png'}}
                />
                <View style={{ width:width/1.4,   marginBottom:'5%'}}>
                <Text 
                      style={{
                              fontSize:RFValue(18, height), 
                              letterSpacing:1,
                              textShadowOffset: { width: 0.5, height: 0.5 }, 
                              textShadowRadius: 1, 
                              marginLeft:"5%", 
                              fontFamily:'Montserrat-SemiBold',
                              marginTop:'2%',  
                              color:'black',
                              borderBottomWidth:1, 
                            }}>Contact Center</Text>
                </View>
                <Image
                      style={{
                              height:25,
                              width:25, 
                              tintColor:'black'
                            }}
                      source={require('../image/arrow.png')}
                    />
          </TouchableOpacity>

        {/*------------Help---------Section---------End--------- */}


        {/*------------Privacy---------Policy---------Start--------- */}
          <TouchableOpacity
                            onPress={() => Linking.openURL("http://ima-appweb.com/app-privacy-policy.php")}
                            style={{
                                    flexDirection:'row', 
                                    marginTop:15,
                                    }}>
               <Image
                    style={{
                            height:height/24, 
                            width:width/12,
                            marginLeft:10, 
                            marginTop:5,
                            marginBottom:5
                          }}
                    source={require('../image/privacy.png')}
                />
                <View style={{ width:width/1.4,   marginBottom:'5%'}}>
                <Text style={{
                            fontSize:RFValue(18, height), 
                            letterSpacing:1,
                            textShadowOffset: { width: 0.5, height: 0.5 }, 
                            textShadowRadius: 1,  
                            marginLeft:"5%", 
                            fontFamily:'Montserrat-SemiBold',
                            marginTop:'2%',  
                            color:'black',
                            borderBottomWidth:1, 
                              }}>Privacy Policy</Text>
                </View>
               <Image
                      style={{
                              height:25,
                              width:25, 
                              tintColor:'black'
                            }}
                      source={require('../image/arrow.png')}
                    />
          </TouchableOpacity>

                  {/*------------Privacy---------Policy---------End--------- */}

                 {/*------------Terms---------AND----------Condition---------Start--------- */}
          <TouchableOpacity
                          onPress={() => Linking.openURL("https://www.ima-appweb.com/ima-appweb-terms-and-conditions.php")}
                          style={{
                                flexDirection:'row', 
                                marginTop:10,
                                }}>
               <Image
                    style={{
                            height:height/20, 
                            width:width/10,
                            marginLeft:5, 
                            marginBottom:5
                          }}
                    source={require('../image/term.jpg')}
                />
                <View style={{ width:width/1.4,   marginBottom:'5%'}}>
                <Text style={{
                            fontSize:RFValue(18, height), 
                            letterSpacing:1,
                            textShadowOffset: { width: 0.5, height: 0.5 }, 
                            textShadowRadius: 1, 
                            marginLeft:"5%", 
                            fontFamily:'Montserrat-SemiBold',
                            marginTop:'2%',  
                            color:'black',
                            borderBottomWidth:1, 
                              }}>Terms and Conditions</Text>
                </View>
               <Image
                      style={{
                              height:25,
                              width:25, 
                              tintColor:'black'
                            }}
                      source={require('../image/arrow.png')}
                    />
          </TouchableOpacity>
  
        {/*------------Terms---------AND----------Condition---------END--------- */}
        
        </Neumorphism>

       {/*------------Log---------Out---------Start--------- */}
          <TouchableOpacity
            onPress={OnLogoutHandler}
            disabled={disableButton}
            style={{justifyContent:'center', alignItems:'center',}}
          >
            <View
            style={{...style.logout,
                            borderWidth: loader ? 0.001: 1,
                            borderRadius: loader ? 0.001: 100,
                            width:loader? width-300 :  width/3,
                            alignItems:loader ? 'center' : 'center',
                            justifyContent:loader ? 'center' :'center',

            }}>
          {loader &&  
          <View  style={style.activitycontainer}>
          <Neumorphism
              lightColor={'#dedddd'}
              darkColor={'#979797'}
              shapeType={'flat'}
              radius={50}
              style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
            <View style={{marginTop:6}}>
            <ActivityIndicator size="large" color="#00ff00" />
            </View>
          </Neumorphism>
        </View>
          }
          <View 
                style={{borderRadius:100}}
                >
          <Text style={{
                        fontSize:RFValue(22, height),  
                        fontFamily:'Montserrat-Light',
                        textAlign:'center',
                        alignSelf:'center',
                        color:'black',
                        letterSpacing:2,
                        textShadowColor: '#000', 
                        textShadowOffset: { width: 0.5, height: 0.5 }, 
                        textShadowRadius: 1,
                         }}>
              {loader ? "" : "Log Out"}
          </Text>
          </View>
               </View>
          </TouchableOpacity> 
            {/*------------Log---------Out---------End--------- */}
          </View>
        </View >
  )}
 {/*------------Styling--------- */}
const style = StyleSheet.create({
    username:{ 
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:10,
      fontSize:20,
      fontWeight:'bold',
      color:'#00C897'
    },
    email:{
      marginLeft:'auto',
      marginRight:'auto',
      fontSize:RFValue(6, height),
      color:'#00C897'
    },
    order:{
      height:height/24, 
      width:width/12,
      marginLeft:10, 
      tintColor:'#57c3c4',
      marginTop:5,
      marginBottom:5
    },
    profile:{
      height:80,
      width:80,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:'5%',
      borderRadius:25
    },
    background:{
      height:height/3.8,
      width,
      borderRadius:50
    },
    image:{
      height:height/9,
      width:width/4.7,
      marginLeft:'auto',
      marginRight:'auto',
      marginTop:'5%',
    },
    logout:{
      flexDirection:'row',
      marginTop:"10%",
      height:height/14,
      width:width-20,
      marginLeft:10,
      alignItems:'center'
    }
  })
