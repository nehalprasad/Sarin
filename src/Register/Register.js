import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  SafeAreaView,
  ScrollView,Dimensions,
  PixelRatio,
  StatusBar,
  Linking,
  TouchableWithoutFeedback
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { useValidation } from 'react-native-form-validator';
import LinearGradient from "react-native-linear-gradient";
 
import Neumorphism from "react-native-neumorphism";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from 'axios'
const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()

const Register = ({navigation, route}) => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState('');
  const [password, setPassword]  = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { 
        username, 
        firstname, 
        lastname, 
        email,
        password,
        // confirmPassword,
       },
    });

  const _onPressButton = async(event) => {
    
    if(validate({
      username: {required: true },
      firstname: {required: true },
      lastname: {required: true },
      email: { required: true ,email: true  },
      password: { required:true,hasNumber:true,hasUpperCase:true,hasLowerCase:true, },
      // confirmPassword: { required:true, equalPassword: password, },
    })){

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

        // const jsonValue = JSON.stringify(adminToken)

        // console.log("adminToken")
        // console.log(jsonValue)

        // AsyncStorage.setItem('AdminToken1st', jsonValue)

        var axios = require('axios');

        var config = 
          {
            method: 'post',
            url: `https://test.sarinskin.com/wp-json/wp/v2/users?username=${username}&first_name=${firstname}&last_name=${lastname}&email=${email}&password=${password}&roles=customer`,
            headers: 
            { 
              'Authorization': `Bearer ${adminToken}`
            }
          };
          // console.log(config);
        axios(config)
        .then((response) => {
          alert("Account Created")
          navigation.push("Login")
          // console.log(JSON.stringify(response.data));
        })
        .catch((error) => {
          alert(error.response.data.message);
          // console.log(error.description)
        });


      })
      .catch(function (error) {
        console.log(error);
      });  
      
    }

  };

  return ( 
    <ScrollView>  
       <StatusBar  
                backgroundColor="#57c3c4"
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
                  }}>


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

<View style={{
              flex:0, 
              flexDirection:'row'
            }}>

 {/* Login  */}
 <View style={{
                marginBottom:'5%',
                marginLeft:'5%'
              }}>
<TouchableOpacity onPress={() => navigation.navigate('Login')}
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
            }}>SIGN IN </Text>
  </TouchableOpacity>
</View>

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
           }}>SIGN UP </Text>

</View>

</View>
<View style={{
                      backgroundColor:'white', 
                      height:height/2.6, 
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
        placeholder="User Name*"
         placeholderTextColor="#80808050"
        onChangeText={setUsername} 
        value={username}
/>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
      <TextInput
              //  caretHidden={true}
               style={{   
                        color:'black',
                        marginBottom: 5,
                        marginTop:10,
                        borderRadius: 2,
                        fontFamily:'Montserrat-SemiBold',
                        width:width/2-32,
                        marginLeft:'1%',
                        fontSize:RFValue(18, height),
                        alignSelf: 'center',
                        borderWidth:0.2,
                        borderRadius:5,
                        paddingLeft:10      
                      }}
                  placeholder="First Name*"
                  placeholderTextColor="#80808050"
                  onChangeText={setFirstName} 
                  value={firstname}
      />
          <TextInput
              //  caretHidden={true}
               style={{   
                      color:'black',
                      marginBottom: 5,
                      marginTop:10,
                      borderRadius: 2,
                      fontFamily:'Montserrat-SemiBold',
                      width:width/2-20,
                      marginLeft:'1%',
                      fontSize:RFValue(18, height),
                      alignSelf: 'center',
                      borderWidth:0.2,
                      borderRadius:5,
                      paddingLeft:10
                      // textAlign:'center'     
             }}
                  placeholder="Last Name*"
                   placeholderTextColor="#80808050"
                  onChangeText={setLastName} 
                  value={lastname}
          />
          </View>
      <TextInput
              inlineImageLeft="email"
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
                  placeholder="E-mail*"
                   placeholderTextColor="#80808050"
                  onChangeText={setEmail} 
                  value={email}
          />
      <TextInput
              // caretHidden={true}
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
                  placeholder="Password*"
                   placeholderTextColor="#80808050" 
                  onChangeText={setPassword}
                  value={password}
                  secureTextEntry
          />
</View>
{/* <ScrollView> */}
      <View style={{
                  //  height:40,
                  //  position: 'absolute',
                   width,
                   height:30
                    }}>
      {isFieldInError('username') &&
      getErrorsInField('username').map(errorMessage => (
                <Text style={{
                              fontSize:RFValue(12, height), 
                              fontFamily:'Montserrat-SemiBoldItalic',
                              // marginLeft:'auto',
                              // marginRight:'auto',
                              textAlign:'center',
                              color:'black'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('firstname') &&
              getErrorsInField('firstname').map(errorMessage => (
              <Text style={{
                            fontSize:RFValue(12, height), 
                            fontFamily:'Montserrat-SemiBoldItalic',
                            textAlign:'center',
                            color:'black'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('lastname') &&
              getErrorsInField('lastname').map(errorMessage => (
              <Text style={{
                          fontSize:RFValue(12, height), 
                          fontFamily:'Montserrat-SemiBoldItalic',
                          textAlign:'center',
                          color:'black'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('email') &&
              getErrorsInField('email').map(errorMessage => (
              <Text style={{
                          fontSize:RFValue(12, height), 
                          fontFamily:'Montserrat-SemiBoldItalic',
                          textAlign:'center',
                          color:'black'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('password') &&
              getErrorsInField('password').map(errorMessage => (
              <Text style={{
                            fontSize:RFValue(12, height), 
                            fontFamily:'Montserrat-SemiBoldItalic',
                            // marginLeft:'auto',
                            // marginRight:'auto',
                            textAlign:'center',
                            color:'black'
              }}>{errorMessage}</Text>
              ))}
              {isFieldInError('confirmPassword') &&
                      getErrorsInField('confirmPassword').map(errorMessage => (
                        <Text style={{ 
                                      fontSize:RFValue(12, height), 
                                      fontFamily:'Montserrat-SemiBoldItalic',
                                      textAlign:'center',
                                      color:'black'
                                    }}>{errorMessage}</Text>
                      ))}
        </View>

{/* </ScrollView> */}
</View>

<View style={{
              backgroundColor:'#eeeeee',
              // borderWidth:1, 
              height:height/7.5,
              marginTop:'0.5%'
              }}>
{/* <View style={{backgroundColor:'#eeeeee'}}> */}
<TouchableHighlight 
          activeOpacity={1}
          onPress={_onPressButton}
          underlayColor={"#eeeeee"}
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
                           borderRadius:100,
                          //  borderWidth:1
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
                                  SignUp
                          </Text>
                          </View>
                     <View style={{
                                marginLeft:'16%',
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
          
      </TouchableHighlight>
      {/* </View> */}
      <View 
          style={{
                  width: width-20,
                  height:40,
                  // borderWidth:1,
                  borderRadius: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom:15,
                  marginLeft:'auto',
                  marginRight:'auto',
                  marginTop:5,
                  backgroundColor:'#eeeeee'
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
</View>
</SafeAreaView>
</ScrollView> 
  );
};

export default Register;
