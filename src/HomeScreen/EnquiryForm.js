import { View, Text, TouchableWithoutFeedback, Dimensions, Alert, StyleSheet, ActivityIndicator, } from 'react-native'
import React,{useEffect, useState} from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Neumorphism from 'react-native-neumorphism';
const {width, height} = Dimensions.get('window')

export default function EnquiryForm() {
  const [Form, setForm] = useState(false)


  const ButtonAlert = () =>
      Alert.alert(
        "We had noted your Request.  Soon we will be in touch with you",
        "Thank You for contacting us. Have a wonderfull Day Ahead.",
        [
          { text: "OK", onPress: () => onOkPress() }
        ]
      );

      const onOkPress = () => {
        // console.log("onOkPress")
        setTimeout(Call1st, 100)
      
      }

      function Call1st(){
        setForm(true)
        setTimeout(Call2nd, 86400000)
      }

      function Call2nd(){
        setForm(false)
      }

  const onEnqirySubmit =async (event)  => {

      const UserName = await AsyncStorage.getItem('Username')
    
      //  console.log(UserName)
    
      const UserEmail = await AsyncStorage.getItem('Useremail')
    
    
      var axios = require('axios');
      var data = JSON.stringify({
        "user_name": `${UserName}`,
        "user_email": `${UserEmail}`,
        "user_phone": ""
      });
      
      var config = {
        method: 'post',
        url: 'https://app.sarinskin.com/api/add_enquiry/',
        headers: { 
          'Content-Type': 'application/json', 
        },
        data : data
      };
      
     await axios(config)
      .then(function (response) {
        //  console.log(JSON.stringify(response.data));
        if(response.data.success == "True"){
          ButtonAlert() 
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  if(Form ==  false){
    return (
      <View style={{
                    alignItems:'center',
                    justifyContent:'center'}}>
 
             <TouchableWithoutFeedback onPress={onEnqirySubmit} 
                 disabled={false}
             >
                 <View style={{
                                 // borderWidth:2,
                                 width:width/2,
                                 marginTop:'5%',
                                 backgroundColor:'#57c3c4',
                                 borderRadius:25, 
                                 height:height/13, 
                                 alignItems:'center',
                                 justifyContent:'center'
                                 }}>
                     <Text style={{
                                  //  textAlign:'center', 
                                   fontSize:RFValue(22, height), 
                                   justifyContent:'space-between',
                                   color:'white',
                                   fontFamily:'Montserrat-Regular',
                                 }}>
                         Enquire Now 
                     </Text>
                 </View>
             </TouchableWithoutFeedback>
         </View>
    )
  }
  else {
    return(
      <View style={{width:width-10, }}>
      <Text style={{fontFamily:'Kanit-Black', textAlign:'center', fontSize:RFValue(20, height), marginLeft:10, color:'#00C897',}}>
         
          Thank you for your patience..
      </Text>
      <Text style={{fontFamily:'Kanit-Black', textAlign:'center', fontSize:RFValue(16, height), marginLeft:10,color:'#00C897',}}>
            Enquiry Will be Available After 24Hours...
      </Text>

      </View>
    )
   
  }
  
  
}
