import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useValidation } from 'react-native-form-validator';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Geocoder from 'react-native-geocoding';
import Geolocation from '@react-native-community/geolocation';
import DeviceNumber from 'react-native-device-number';
const{width, height} = Dimensions.get('window')

export default function Buy({route, navigation}) {

    const[address, setAddress] = useState('');
    const[Locality, setLocality] = useState('');
    const[city, setCity] = useState('');
    const[states, setStates] = useState('');
    const[firstname, setFirstName] = useState('');
    const[lastname, setLastName] = useState('');
    const[pincode, setPin] = useState('');
    const[mobile, setMobile] = useState('');
    const[email, setEmail] = useState('');

    const [products, setProducts] = useState()

// console.log(userEmail)
    const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { 
        address, 
        Locality, 
        city, 
        states,
        firstname,
        lastname,
        pincode, 
        mobile,
        email,
       },
    });

    const {cartDetails, price} = route.params
    
    //  console.log("Buy now Page")

    // console.log(JSON.stringify(cartDetails))

    const subtotal = price.total

    //  console.log(subtotal)

    const regex = /(<([^>]+)>)/ig;

const MobileInfo = () => {
                  DeviceNumber.get().then((res) => {
                    if(res){
                      // console.log(res.mobileNumber.slice(3, 13));
                      setMobile(res.mobileNumber.slice(3, 13))
                    }
                  });
               }


  const FetchCurrentLocation = () => {

    Geolocation.getCurrentPosition((info) => {

      // console.log(info.coords);

      var Latitude = info.coords.latitude
      var Longitude = info.coords.longitude

// console.log(Latitude);
// console.log(Longitude)

      Geocoder.init("AIzaSyD8S49smNf_J9A7-ZmbEYP4uG0fZaod1UI"); // use a valid API key
      Geocoder.from(Latitude, Longitude)
      // Geocoder.from(29.7524, 78.5269)     //Kotdwar pauri garhwal Uttrakhand
      // Geocoder.from(25.960569, 84.5358529)  //EKMA Bihar
      .then(json => {
        var addressComponent = json.results[0].address_components;
        var Length = addressComponent.length
        // console.log(json.results[0].address_components)
      
        // SET PIN 
        if(Length == "6"){
          setLocality(json.results[0].address_components[1].long_name)
          setCity(json.results[0].address_components[3].long_name)
          setPin(json.results[0].address_components[5].long_name)
          setPin(json.results[0].address_components[4].long_name)
        }
        else {
          setLocality(json.results[0].address_components[3].long_name)
          setCity(json.results[0].address_components[4].long_name)
          setPin(json.results[0].address_components[7].long_name)
          setStates(json.results[0].address_components[5].long_name)
        }
      })
      .catch(error => console.warn(error));
    })
  }

const onRegisterFormHandler = async (event) => {

  if(validate({
    address: {required: true },
    Locality: {required: true },
    city: { required: true },
    states: {required: true },
    firstname: {required: true },
    lastname: { required: true },
    pincode: { required:true,  numbers:true},
    mobile: { required: true, numbers:true },
    
  })){

  navigation.navigate("OrderDetail", 
  {
    cartDetails,
    subtotal,
    address1 : address,
    address2 : Locality,
    lastname: lastname,
    firstname : firstname,
    city : city,
    states : states,
    mobile : mobile,
    pincode : pincode,
    email:email
  })
  }
  const UserEmail = await AsyncStorage.getItem('Useremail')
  setEmail(UserEmail)
}

// console.log(email)
      return (

      <ScrollView>
      <View style={style.container}>
      <View style={{backgroundColor:'white',}}>
  
        {/* <Text style={style.header}> Add Address Detail</Text> */}
        <StatusBar style="auto" />
          <Text style={{
                       fontSize:RFValue(22, height),
                       fontFamily:'NanumGothic-Bold', 
                       color:'black',
                       marginTop:'3%',
                       marginBottom:'3%',
                       marginLeft:'auto',
                       marginRight:'auto'
                      }}>Contact Details</Text>
         <View>
         <View style={{flexDirection:'row', width:width/2-10,}}>
            <TextInput
                style={{
                        borderWidth:0.2,
                        marginLeft:5,
                        marginRight:5,
                        marginTop:4,
                        width: width/2-10,
                        textAlign:'auto',
                        color:'#57c3c4',
                        fontSize:RFValue(16, height),
                        fontFamily:'Quicksand-Bold'
                      }}
                placeholder="First Name*"
                placeholderTextColor="#16003B"
                value={firstname}
                onChangeText={setFirstName}
               
            />
       
            <TextInput
              style={{
                      borderWidth:0.2,
                      marginLeft:5,
                      marginRight:5,
                      marginTop:4,
                      width: width/2-10,
                      width: width/2-10,
                      textAlign:'auto',
                      color:'#57c3c4',
                      fontSize:RFValue(16, height),
                      fontFamily:'Quicksand-Bold'
                    }}
              placeholder="Last Name*"
              placeholderTextColor="#16003B"
              value={lastname}
              onChangeText={setLastName}
            />
       </View>
       <TextInput
              style={{
                borderWidth:0.2,
                marginLeft:5,
                marginRight:5,
                marginTop:4,
                textAlign:'auto',
                color:'#57c3c4',
                fontSize:RFValue(16, height),
                fontFamily:'Quicksand-Bold'
                    }}
              placeholder="Mobile No.*"
              placeholderTextColor="#16003B" 
              value={mobile}
              maxLength = {10}
              onChangeText={setMobile}
              onFocus={() => MobileInfo()}
              keyboardType='number-pad'
            />

         </View>

          



         <Text style={{
                        fontSize:RFValue(22, height),
                        fontFamily:'NanumGothic-Bold', 
                        color:'black',
                        marginTop:'3%',
                        marginBottom:'3%',
                        marginLeft:'auto',
                        marginRight:'auto'
                      }}>
                      Address Details</Text>


            {/* <View > */}
              <TouchableOpacity 
                                style={{ 
                                        flexDirection: 'row', 
                                        justifyContent:'center', 
                                        alignItems:'center', 
                                        paddingBottom:'2%' 
                                      }}
                              onPress={() => FetchCurrentLocation()}
                              
                              >
                  <Image
                    source={require('../image/location.png')}
                    style={{ 
                            height: 25, 
                            width: 25,
                            tintColor:'#57c3c4'  
                          }}
                  />
                  <View style={{paddingLeft:'1%'}}>
                        <Text 
                              style={{
                                      fontFamily:'Montserrat-Black',
                                      fontSize:RFValue(14, height),
                                      color:'#57c3c4'
                                      }}
                              >Use my current location</Text>
                  </View>
              </TouchableOpacity>
            {/* </View> */}



         <View>
            <TextInput
                    style={{
                      borderWidth:0.2,
                      marginLeft:5,
                      marginRight:5,
                      marginTop:4,
                      textAlign:'auto',
                      color:'#57c3c4',
                      fontSize:RFValue(16, height),
                      fontFamily:'Quicksand-Bold'
                          }}
              placeholder="Address (House No., Building, Street, Area)*"
              placeholderTextColor="#16003B"
              value={address}
              onChangeText={setAddress}
            />
       
            <TextInput
              style={{
                      borderWidth:0.2,
                      marginLeft:5,
                      marginRight:5,
                      marginTop:4,
                      textAlign:'auto',
                      color:'#57c3c4',
                      fontSize:RFValue(16, height),
                      fontFamily:'Quicksand-Bold'
                    }}
              placeholder="Locality/Town*"
              placeholderTextColor="#16003B"
              value={Locality}
              onChangeText={setLocality}
              
            />
        
        <View style={{flexDirection:'row', width:width/2-10}}>
            <TextInput
              style={{
                      borderWidth:0.2,
                      marginLeft:5,
                      marginRight:5,
                      marginTop:4,
                      width: width/2-10,
                      textAlign:'auto',
                      color:'#57c3c4',
                      fontSize:RFValue(16, height),
                      fontFamily:'Quicksand-Bold'
                    }}
              placeholder="City*"
              placeholderTextColor="#16003B"
              value={city}
              onChangeText={setCity}
              
            />
        
       
            <TextInput
              style={{
                borderWidth:0.2,
                marginLeft:5,
                marginRight:5,
                marginTop:4,
                width: width/2-10,
                textAlign:'auto',
                color:'#57c3c4',
                fontSize:RFValue(16, height),
                fontFamily:'Quicksand-Bold'
                    }}
              placeholder="State*"
              placeholderTextColor="#16003B"
              value={states}
              onChangeText={setStates}
            />
            </View>
       
   
       
            <TextInput
              style={{
                borderWidth:0.2,
                marginLeft:5,
                marginRight:5,
                marginTop:4,
                width: width-10,
                textAlign:'auto',
                color:'#57c3c4',
                fontSize:RFValue(16, height),
                fontFamily:'Quicksand-Bold'
                    }}
              placeholder="Pin Code*"
              placeholderTextColor="#16003B"
              value={pincode}
              maxLength = {6}
              onChangeText={setPin}
            />
      
      </View>
          
{/*         
        
            <TextInput
             style={{
              borderWidth:0.2,
              marginLeft:5,
              marginRight:5,
              marginTop:4,
              // width: width/1.5-10,
              textAlign:'auto',
              color:'#57c3c4',
              fontSize:RFValue(14, height),
              fontFamily:'Quicksand-Bold'
                    }}
              placeholder='Email Address'
              placeholderTextColor="#16003B" 
              value={email}
              onChangeText={setEmail}
            /> */}
        </View >


      <View style={{height:60,
                    }}>
      <View style={{ 
              width,
              marginLeft:'auto', 
              marginRight:'auto' , 
              marginTop:5
              }}>
              {isFieldInError('address') &&
              getErrorsInField('address').map(errorMessage => (
              <Text key="uniqueid1" style={{
                color:'black',
                fontSize:RFValue(12, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('Locality') &&
              getErrorsInField('Locality').map(errorMessage => (
              <Text key="uniqueid2" style={{
                color:'black',
                fontSize:RFValue(14, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center' 
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('city') &&
              getErrorsInField('city').map(errorMessage => (
              <Text key="uniqueid3" style={{
                color:'black',
                fontSize:RFValue(12, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('states') &&
              getErrorsInField('states').map(errorMessage => (
              <Text key="uniqueid4" style={{
                color:'black',
                fontSize:RFValue(14, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('firstname') &&
              getErrorsInField('firstname').map(errorMessage => (
              <Text key="uniqueid5" style={{
                color:'black',
                fontSize:RFValue(12, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))}
              {isFieldInError('lastname') &&
                      getErrorsInField('lastname').map(errorMessage => (
                        <Text key="uniqueid6" style={{
                          color:'black',
                          fontSize:RFValue(14, height),
                          fontFamily:'NanumGothic-ExtraBold', 
                          textAlign:'center'
                        }}>{errorMessage}</Text>
                      ))}
                      {isFieldInError('pincode') &&
              getErrorsInField('pincode').map(errorMessage => (
              <Text key="uniqueid7" style={{
                color:'black',
                fontSize:RFValue(12, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('mobile') &&
              getErrorsInField('mobile').map(errorMessage => (
              <Text key="uniqueid8" style={{
                color:'black',
                fontSize:RFValue(14, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              {isFieldInError('email') &&
              getErrorsInField('email').map(errorMessage => (
              <Text  style={{
                color:'black',
                fontSize:RFValue(12, height),
                fontFamily:'NanumGothic-ExtraBold', 
                textAlign:'center'
              }}>{errorMessage}</Text>
              ))} 
              </View>

</View>

    






<View style={{
              // backgroundColor:'green', 
              marginTop:-2,
              height:height}}>
      <TouchableWithoutFeedback 
            onPressIn={onRegisterFormHandler}
            
            >
            <View  style= {{  
                            width:width-10,
                            // marginTop:'3%',
                            backgroundColor:'#57c3c4',
                            borderRadius:15,
                            // borderColor:'#57c3c4',
                            // borderWidth:0.2, 
                            marginLeft:'1%', 
                            height:height/13, 
                            alignItems:'center',
                            justifyContent:'center'
                          }}>
            <Text style={{   
                          fontSize:RFValue(28, height), 
                          color:'white',
                          fontFamily:'Quicksand-SemiBold'
                          }} >
              GO TO PAYMENT's
            </Text>
            </View>
        </TouchableWithoutFeedback>
        </View>
      </View>
      </ScrollView>
      )
    
  }
   
  const style = StyleSheet.create({
    container:{
      backgroundColor:'white', 
      color:'white'
    },
   input:{
    borderWidth:0.2,
    marginLeft:5,
    marginRight:5,
    marginTop:4
   },
   header:{
    marginTop:10,
    fontSize:RFValue(35, height),
    fontWeight:"bold",
    marginBottom:10,
    textAlign:'center'
  },
    register:{
      backgroundColor:"lime",
      borderWidth:0.2,
      marginLeft:5,
      marginRight:5,
      height:55,
      marginTop:10,
      // marginBottom:25
  
    },
    payment:{
      marginTop:8,
      fontSize:RFValue(28, height),
      fontWeight:'bold',
      textAlign:"center",
      color:'green',
      
    }
  });

