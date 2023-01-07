import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  Dimensions,
  PixelRatio,
  Linking,
  StatusBar,
  SafeAreaView,
  ActivityIndicator
} from "react-native";
import Neumorphism from "react-native-neumorphism";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useValidation } from "react-native-form-validator";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ScrollView } from "react-native-gesture-handler";

const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()

const Login = ({navigation, route}) => {
   
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState([]);
  const [Loading, setLoading] = useState(true)
  const [state, setState] = useState({});
  
  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
  useValidation({
    state: { 
      username,
      password,
     },
  });
                   useEffect(() => {

                      //For Admin Information 

                      var axios = require('axios');

                      var config = {
                        method: 'post',
                        url: 'https://test.sarinskin.com/wp-json/jwt-auth/v1/token?username=react-native&password=d()A7eHreC*kQxLHQN',
                        headers: { }
                      };
                      axios(config)
                      .then(function (response) {
                        // console.log(JSON.stringify(response.data));

                      //Admin Token

                        var adminToken = response.data.token

                        const jsonValue = JSON.stringify(adminToken)

                        // console.log("adminToken")
                        // console.log(jsonValue)

                        AsyncStorage.setItem('AdminToken1st', jsonValue)
                      })
                      .catch(function (error) {
                        console.log(error);
                      });

                      return () => {
                        setState({}); // This worked for me
                      };
                   },[])   

  const onLoginFormHandler = async (event) => {

               
                if(validate ({
                  username: {required: true },
                  password: { required:true },
                })){

      
              var axios = require('axios');
              var baseUrl = "https://test.sarinskin.com"
  
              var cnfig2 = {
                  method: 'post',
                  url: `https://test.sarinskin.com/wp-json/jwt-auth/v1/token?username=${username}&password=${password}`,
              };
  
              axios(cnfig2)
                  .then((response) =>  {
                          data = response.data                      
                          // console.log("1st Data Login Page")
                          // console.log(response.data)
                          // User Token
                          var userToken = data.token

                          var token = data.token
                          // console.log(token)
                          const jsonValue = JSON.stringify(token)
                          AsyncStorage.setItem('UserToken', jsonValue)

  //Username
                      var username = response.data.user_nicename
                      // console.log(username)
                      AsyncStorage.setItem('Username', username)

                      var userEmail = response.data.user_email
                      // console.log(userEmail)
                      AsyncStorage.setItem('Useremail', userEmail)
                          // For User Information
                          var endpoint = baseUrl + "/wp-json/wp/v2/users/me"
                          var config = {
                              method: 'get',
                              url: endpoint,
                              headers: {
                                  'Authorization': `Bearer ${userToken}`
                              }
                          };
  
                          axios(config)
                              .then((response) => {

                                    // console.log("2nd Data Login Page")
                                    // console.log(JSON.stringify(response.data))

                                // User Id
                                var userId = JSON.stringify(response.data.id)
                                  // console.log(userId)
                                 AsyncStorage.setItem('UserId', userId)

                              })
                              .catch((error) => {                             
                                  console.log(error);
                              }); 
                              navigation.replace("Home",
                              {
                                userToken
                              });
                      }                 
    )
  .catch((error) => {
const err = error
// console.log(err) 

const regex = (/(<([^>]+)>)/ig);
    if (err.response) {
      //  console.log(err.response.status)
      //  console.log(err.response.status)
      err.response.data.message = err.response.data.message.replace(regex, '')
    var errorMessage = err.response.data.message
     // console.log(errorMessage)
    var error1 = `Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`
    
    var error2 = `Error: The password you entered for the username ${username} is incorrect. Lost your password?` 
    
    if(errorMessage == error1){
         Alert.alert("Username is incorrect")
          console.log("Username is incorrect")
      }
    else if(errorMessage == error2){
        Alert.alert("Password is incorrect")
        console.log("Password is incorrect")
    }
  }
  });
}
  }

if(Loading == false){
  return(
    <View style={{
                  justifyContent:'center', 
                  alignItems:'center',
                  height,
                  backgroundColor:'white'
                  }}>
      <ActivityIndicator size={'large'} color={"#57c3c4"}/>
      <Text 
            style={{
                  paddingTop:'5%',
                  fontSize:RFValue(18, height),
                  color:'black',
                  fontFamily:'Montserrat-Regular'
                  }}>Please wait.....</Text>
    </View>
  )
}
else{

  return (
         <ScrollView >    

        {/* Background of the Page */}
        <StatusBar  backgroundColor="#57c3c4"
                     animated={true}
                    />
        
    <SafeAreaView style={{
                          flex: 1,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}>
               
      <View
            style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: height + 50,
                  width,
                  backgroundColor:'#EEEEEE'
                }}
            >


        {/* Company Name and Logo  */}

      <View style={{
                      marginLeft:'auto',
                      marginRight:'auto', 
                      justifyContent:'center', 
                      alignContent:'center', 
                      marginTop:"25%"
                    }}>
          <Image
              style={{
                      height:height/10,
                      width:width/3,
                      marginLeft:'auto',
                      marginRight:'auto',
                      tintColor:'#57c3c4'
                      }}
                source={require('../image/logo.png')}
                />
  
    </View>

    {/* UserInfo */}
        <View
          style={{
                  height:height-150, 
                  width: width-25,
                  marginTop:'5%',
                  marginBottom:"30%",
                }}
        > 
    <View >
     
       {/* Login And Register View */}
      
<View style={{
              flex:0, 
              flexDirection:'row'
            }}>

  {/* Login  */}
  <View style={{
                marginBottom:'5%',
                marginLeft:'5%'
              }}>

<Text style={{
              color:'black',
              fontSize:RFValue(34, height),  
              textAlign:'center',
              marginLeft:'4%',
              fontFamily:'Montserrat-Bold',
              textShadowColor: 'black', 
              textShadowOffset: { width: 0.5, height: 0.5 }, 
              textShadowRadius: 1,
            }}>SIGN IN </Text>
</View>

<View style={{
               
                marginBottom:'5%',
                marginLeft:'5%'
              }}>
<TouchableOpacity onPress={() => navigation.navigate('Register')}
>
<Text style={{
              color:'#00000010',
              fontSize:RFValue(34, height),  
              textAlign:'center',
              marginLeft:'4%',
              fontFamily:'Montserrat-Bold',
              textShadowColor: 'black', 
              textShadowOffset: { width: 0.5, height: 0.5 }, 
              textShadowRadius: 1,
            }}>SIGN UP </Text>
</TouchableOpacity>
</View>
</View>
        <View style={{
                      backgroundColor:'white', 
                      height:height/4, 
                      justifyContent:'center',
                      borderRadius:10
                      }}>
          <TextInput
            inlineImageLeft="username"
            inlineImagePadding={25}
            style={{   
                    color:'black',
                    marginBottom: 5,
                    marginTop:10,
                    borderRadius: 2,
                    width:width-50,
                    fontSize:RFValue(18, height),
                    fontFamily:'Montserrat-SemiBold',
                    alignSelf: 'center',
                    borderWidth:0.2,
                    borderRadius:5
                }}
            placeholder="Username or Email*"
            placeholderTextColor="#80808050"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput  
                inlineImageLeft="password"
                inlineImagePadding={25}
                style={{   
                        color:'black',
                        marginBottom: 5,
                        marginTop:10,
                        borderRadius: 2,
                        width:width-50,
                        fontSize:RFValue(18, height),
                        fontFamily:'Montserrat-SemiBold',
                        alignSelf: 'center',
                        borderWidth:0.2,
                        borderRadius:5
                      }}
                  placeholder="Enter Password*"
                  placeholderTextColor="#80808050"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry
          />
    </View>

      <View style={{height:30}}>
      {isFieldInError('username') &&
        getErrorsInField('username').map(errorMessage => (
          <Text style={{
            fontSize:RFValue(12, height), 
            fontFamily:'Montserrat-SemiBoldItalic',
            marginLeft:'auto',
            marginRight:'auto',
            color:'black'
          }}>{errorMessage}</Text>
        ))} 
      {isFieldInError('password') &&
        getErrorsInField('password').map(errorMessage => (
          <Text style={{
            fontSize:RFValue(14, height), 
            fontFamily:'Montserrat-SemiBoldItalic',
            marginLeft:'auto',
            marginRight:'auto',
            color:'black'
          }}>{errorMessage}</Text>
        ))}
      </View>
     
    </View>
    
    <TouchableOpacity 
          onPress={onLoginFormHandler}
          >
        <Neumorphism
                   
                  lightColor={'#EEEEEE'}
                  darkColor={'#EEEEEE'}
                  shapeType={'flat'}
                  radius={40}
                      >
                  <View
                         style={{
                          width:width-30,
                          marginVertical:"5%",
                          backgroundColor:'#57c3c4',
                          borderRadius:40, 
                          height:height/13, 
                          alignItems:'center',
                          flexDirection:'row',
                          borderRadius:100
                        }}
                        >
                          <View style={{
                                        marginLeft:'30%'
                                        }}>
                          <Text style={{
                                        fontSize:RFValue(35, height), 
                                        color:'white',
                                        fontFamily:'Montserrat-Bold',
                                        letterSpacing:2,
                                        textShadowColor: '#000', 
                                        textShadowOffset: { width: 0.5, height: 0.5 }, 
                                        textShadowRadius: 1,
                                        textAlign:'center'
                                      }}>
                                  SignIn
                          </Text>
                          </View>
                     <View style={{
                                marginLeft:'20%',
                                }}>
                     <Image
                          source={require('../image/forwardarrow.png')}
                          style={{
                                  height:30, 
                                  width:30,
                                  backgroundColor:'white',
                                  borderRadius:50,
                                  borderWidth:2,
                                  borderColor:'white',
                                  shadowColor: '#000', 
                                  shadowOffset: { width: 0.5, height: 0.5 }, 
                                  shadowRadius: 1,
                                 }}
                                 />
                     </View>
                    
                  </View>
                     
                    
                     

      </Neumorphism>
          
      </TouchableOpacity>

        <TouchableOpacity style={{
                                  marginTop:'5%',
                                  marginLeft:'auto',
                                  marginRight:'auto',
                                }}>
                <Text style={{
                              fontSize:RFValue(16, height),
                              color:'black',
                              fontFamily:'Montserrat-ExtraLightItalic'
                            }}
                            >Forgot Password?</Text>
        </TouchableOpacity>

      <View 
          style={{
                  width: 200,
                  height:40,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom:15,
                  marginLeft:'auto',
                  marginRight:'auto',
                  marginTop:10
          }}
          >
            <Neumorphism
            lightColor={"#0AA1DD20"}
            darkColor={"#0AA1DD20"}
            shapeType={'flat'}
            radius={25}
            >
          <Text 
              style={{
                      width:width,
                      textAlign:'center',
                      paddingTop:15,
                      fontSize:RFValue(14, height),
                      fontFamily:'Montserrat-Bold',
                      marginLeft:'auto',
                      marginRight:'auto', 
                      color:'black'
              }}>
              By creating an account, you agree to our
            </Text>
            <View 
                  style={{
                          flexDirection:'row',
                          justifyContent:'center',
                          alignItems:'center'
                          }}>
                 <TouchableOpacity
                        onPress={() => Linking.openURL("https://www.ima-appweb.com/ima-appweb-terms-and-conditions.php")}>
                  <Text
                        style={{
                          fontSize:RFValue(14, height), 
                          paddingBottom:10, 
                          fontFamily:'Montserrat-Bold',
                          color:'#57c3c4'
                          }}
                        >
                  Terms of Services
                  </Text>
                   
                </TouchableOpacity> 
                  <Text 
                        style={{
                              color:'black',
                              fontSize:RFValue(14, height), 
                              marginLeft:5, 
                              paddingBottom:10, 
                              fontFamily:'Montserrat-Bold',
                              }}>and</Text>
                <TouchableOpacity
                        onPress={() => Linking.openURL("http://ima-appweb.com/app-privacy-policy.php")}>
                <Text
                      style={{
                        fontSize:RFValue(14, height), 
                        marginLeft:5, 
                        textAlign:'center',
                        paddingBottom:10, 
                        fontFamily:'Montserrat-Bold',
                        color:'#57c3c4'
                        }}
                      >Privacy Policy
                      </Text>
                
                </TouchableOpacity>
                </View>
            </Neumorphism>

      </View>
      
      </View>
      </View>
    {/* </LinearGradient> */}
    </SafeAreaView>
    </ScrollView>
    
 ) 
}  
}


export default Login

const style = StyleSheet.create({

  //Background of the Page
  background:{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            },
  color:{
          alignItems: 'center',
          justifyContent: 'center',
          height: height + 50,
          width,
        },

    // Company Name and Logo 
    companyBackground:{
                      marginLeft:'auto',
                      marginRight:'auto', 
                      justifyContent:'center', 
                      alignContent:'center', 
                      marginTop:"40%"
                    },
  companyImage:{
                height:55,
                width:55,
                marginBottom:5,
                marginLeft:'auto',
                marginRight:'auto'
                },
  companyTitle:{
                fontSize:RFValue(35, height), 
                color:'black',
                textAlign:'center'
                },

      //  UserInfo 
  userBackground:{
                  height:height-150, 
                  width: width-25,
                  marginTop:'5%',
                  marginBottom:"30%"
                },

  // Login Title
  loginRegisterView:{
                      // flexDirection:'row', 
                      flex:0, 
                      marginTop:"5%",
                      
                    },
  loginTitleView:{
                  marginTop:10, 
                  alignItems:'center',
                  alignItems:'center',
                 },
  loginTitle:{
              color:'black',
              fontSize:RFValue(28, height),  
              marginTop:20,
              textAlign:'center',
              fontFamily:'Montserrat-SemiBold',
            },
  registerView:{
                marginTop:10, 
                alignItems:'center',
                right:'15%',
                position: 'absolute',
                // borderWidth:0.2
                },
  registerTitle:{
                color:'black',
                fontSize:RFValue(28, height),  
                // flex:0,  
                fontFamily:'Montserrat-Regular',
                },

    // Welcome View
    welcome:{
      fontSize:RFValue(20, height), 
      fontFamily:'Quicksand-Bold', 
      marginTop:-30, 
      textAlign:'center' ,color:'black'
            },
    welcomeMessage:{
      fontSize:RFValue(17, height),
      color:'black',
      marginLeft:'auto',
      fontFamily:'Quicksand-Bold',
      marginRight:'auto',
      marginTop:5,
      fontStyle:'italic',
      textAlign:"center"
    },

    // LoginDetails

    userLoginView:{
      marginBottom: 5,
      marginTop:10,
      backgroundColor: "#DBDFFD",
      borderRadius: 30,
      width: "90%",
      marginLeft:'auto',
      marginRight:'auto'
       },


       userTitle:{
        fontSize:RFValue(17, height),
        fontWeight:'bold',
        textAlign:'center',color:'black'
      },

      passwordView:{
        backgroundColor: "#DBDFFD",
        borderRadius: 30,
        width: "90%",
        alignItems: "center",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:10,color:'black'
      },

      passwordTitle:{
        fontSize:RFValue(17, height),
        fontWeight:'bold',
        textAlign:'center',color:'black'
           }
})


// import React, { useEffect } from 'react';
// import { View, Button, Text } from 'react-native';
// import crashlytics from '@react-native-firebase/crashlytics';





// export default function Login() {

  

//   useEffect(() => {
//     crashlytics().log('App mounted.');
//   }, []);

//   return (
//     <View>
 
//         <Text>Hey I'm a spinner loader wannabe !!!</Text>
     
      
//     </View>
//   );
// }