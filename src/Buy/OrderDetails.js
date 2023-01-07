import { 
    StyleSheet,
    SafeAreaView, 
    TouchableOpacity,
    Text, 
    FlatList,
    View,
    ScrollView, 
    ActivityIndicator,
    Image, 
    Alert, 
    Dimensions,
    PermissionsAndroid
} from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';

import OTPTextInput from 'react-native-otp-textinput'
import auth from '@react-native-firebase/auth';
import SmsAndroid from 'react-native-get-sms-android'
import firestore from '@react-native-firebase/firestore';


const {width, height} = Dimensions.get('window')


const OrderDetails = ({navigation , route}) => {
        const [IsLoading, setIsLoading] = useState(true)
        const [AppData, setAppData] = useState([])
        const [Items, setItems] = useState([])
        const [Prd, setPrd] = useState([])
        const {
            cartDetails, 
            subtotal,
            address1,
            address2, 
            city, 
            firstname,
            lastname,
            pincode,
            mobile,
            email,
            states
            } = route.params

  const [Code, setCode] = useState('')
  const [confirm, setConfirm] = useState(null);
  const [Name, setName] = useState('')
  const [Phone, setPhone] = useState('')
  const [Messages, setMessages] = useState([])
  const [Count, setCount] = useState('')
  const [Permission, setPermission] = useState(false)
  const [PaymentMethod, setPaymentMethod] = useState('')
  const [PaymentTitle, setPaymentTitle] = useState('')

const PaymentMethods = () => {
  var PaymentUrl = "https://app.sarinskin.com/api/paymentMethod/"
 
  fetch(PaymentUrl)
  .then((response) => response.json())
  .then((response) => {
    setAppData(response)
    setIsLoading(false)
    // console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
}

useEffect(()=> {
  PaymentMethods()
},[])


  const onBuyHandler = async(data) => {
    console.log(data.payment_method)
    console.log(data.payment_method_tittle)
    await setPaymentMethod(data.payment_method)
    await setPaymentTitle(data.payment_method_tittle)

    await navigation.navigate("Otp",
        {
          cartDetails,
          subtotal,
          address1,
          address2,
          lastname,
          firstname,
          city,
          states,
          mobile,
          pincode,
          email,
          PaymentMethod,
          PaymentTitle
        })
  }

// const createThreeButtonAlert = (id) =>

//       Alert.alert(
//         `Your Order is Created with Order Id:- ${id}`,
//         "Thank you for Shopping with us..",
//         [
//           {
//             text: "Do More Shopping",
//             onPress: () => navigation.navigate('Categories'),
            
//           },
//           { text: "OK", onPress: () =>  navigation.navigate('Home') }
//         ]
//       );


      // const Draft = () => {

      //   cartDetails.map((val, key) => {
      //     var eachItem = {};
      //       eachItem = {
      //          "product_id": val.id,
      //          "quantity": val.quantity.value
      //       }
      //      Items.push(eachItem)         
      
      //     //  console.log(Items)
      //     });
      // }

if (IsLoading) {
  return (

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
  )
}

else{
  const final_data = AppData.data





  const Demo = ({data}) => {
    return(
      <TouchableOpacity 
                      style={{
                        backgroundColor:'white',
                      }}
        onPress={() => onBuyHandler(data)}
        // onPress={() => {}}
                >
      <Neumorphism 
                  lightColor={'#dedddd'}
                  darkColor={'#979797'}
                  shapeType={'flat'}
                  style={{
                          width:width-10,
                          marginTop:'3%',
                          backgroundColor:'#57c3c4',
                          borderRadius:25,
                          marginLeft:'1%', 
                          height:height/13, 
                          alignItems:'center', 
                          justifyContent:'center',
                          marginBottom:'3%'
                        }}
                >
              <Text style= {{  
                            fontSize:RFValue(24, height), 
                            color:'white',
                            fontFamily:'Quicksand-SemiBold'
                            }}>
                                  {data.payment_method_tittle}</Text>

      </Neumorphism> 
        </TouchableOpacity>
    )
  }


  if (!confirm) {
  return(
    <SafeAreaView>
      <FlatList
    style={{backgroundColor:'white', height:'100%'}}
      data={final_data}
      keyExtractor={({ id }, index) => id}
      ListHeaderComponent={
        <Text style={{
          fontFamily:'NanumGothic-Bold',
          fontSize:RFValue(25, height), 
          marginTop:15,
          textAlign:'center',
          // marginLeft:'5%',
          width:width-10,
          marginBottom:"5%",
          color:'black'
          }}>
          Choose Payment Method
        </Text>
      }
      renderItem={({ item }) => {
      
          return <Demo data={item} />;
      }}
    />
    </SafeAreaView>
  )
}
}

  return (
    <>
      <View style={{ justifyContent: 'center', alignItems: 'center', height: height + 30, backgroundColor: 'white' }}>
        <View style={{ marginBottom: '10%' }}>
          <OTPTextInput
            inputCount={6}
            tintColor="#57c3c4"
            offTintColor="black"
            containerStyle={{}}
            textInputStyle={{ borderWidth: 1, width: width / 9 }}
            handleTextChange={code => setCode(code)}
          />
        </View>

        <TouchableOpacity onPress={() => ConfirmCode(Code)}>
          <View style={{ width: width / 2.5, backgroundColor: '#57c3c4', padding: '2%', borderRadius: 2 }}>
            <Text
              style={{
                fontSize: RFValue(32, height),
                color: 'white',
                textAlign: 'center',
                fontFamily: 'Montserrat-SemiBold'
              }}>
              Confirm
            </Text>
          </View>

        </TouchableOpacity>
      </View>

    </>
  );





}

export default OrderDetails


const style = StyleSheet.create({
      
  spinnerTextStyle: 
    {
      color: '#FFF',
    }, 
  activitycontainer:{
        flex: 1,
        justifyContent: "center"
      
    },
 
  }) 