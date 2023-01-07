// import { View, Text,
//     StyleSheet,
//     TouchableOpacity } from 'react-native'
// import React,{useState, useEffect } from 'react'
// import Razorpay from '../Payment/Razorpay'
// // import RazorpayCheckout from 'react-native-razorpay';
// export default function OrderDetail({route, navigation}) {

//   const [data, setData ] = useState()
//    const[items, setItems] = useState([])
//    const[order, setOrder] = useState()
//    const[Prd, setPrd] = useState()
//    const[razor, setRazor] = useState()
//   // const items = useRef([])

//   // var items: [];
   
//    const { 
//     cartDetails,
//     subtotal,
//     address1,
//     address2,
//     city,
//     states,
//     firstname,
//     lastname,
//     pincode,
//     mobile,
//     email
//         } = route.params

// const products = cartDetails

// const total = subtotal
// console.log(total)
//  console.log(products)
// // console.log(eachItem)

// useEffect(() => {

//   var PaymentUrl = "https://app.sarinskin.com/api/paymentMethod/"


// fetch(PaymentUrl)
// .then((response) => response.json())
// .then((response) => {
//   setData(response)
//   console.log("response")
//   console.log(response)
// })
// .catch((error) => {
//   console.log(error)
// })




// },[])

//       const CodMethod = () => {
  
//           products.map((val, key) => {
          
          
//           var eachItem = {};
//           let counter = 1;
//           console.log(products.length)
//           console.log(counter)
          
//             // console.log(val)
          
//             eachItem = {
//                "product_id": val.id,
//                "quantity": val.quantity.value
//             }
          
           
//           // setItems(eachItem);
//             // this.state.final_data.final_products.push(eachItem);
//            items.push(eachItem)
          
//           });
          

//            console.log(items)
     
       
//         var axios = require('axios');

//         var data1 = JSON.stringify({
//           "customer_id": "990006",
//           // "order_key": "wc_order_QGwHk5nKR1yVi",
//           "billing": {
//               "first_name":`${firstname}`,
//               "last_name": `${lastname}`,
//               "company": "",
//               "address_1": `${address1}`,
//               "address_2": `${address2}`,
//               "city": `${city}`,
//               "state": `${states}`,
//               "postcode": `${pincode}`,
//               "country": `${states}`,
//               "email": `${email}`,
//               "phone": `${mobile}`
//           },
//           "shipping": {
//               "first_name": `${firstname}`,
//               "last_name": `${lastname}`,
//               "company": "",
//               "address_1": `${address1}`,
//               "address_2": `${address2}`,
//               "city": `${city}`,
//               "state": `${states}`,
//               "postcode": `${pincode}`,
//               "country": "India",
//               "email": `${email}`,
//               "phone": `${mobile}`
//           },
//           "payment_method": "cod",
//           "payment_method_title": "Cash on delivery",
//           "line_items": items,
         
//       });
        
//         axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
//           headers: { 
//             'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU0MTYyMzU1LCJuYmYiOjE2NTQxNjIzNTUsImV4cCI6MTY1NDc2NzE1NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.G039TrIj27XF5khec7iGGIPXxU_HttJtgrOqpXO-WoI', 
//             'Content-Type': 'application/json', 
//             'Cookie': 'woocommerce_cart_hash=738132ccc986f2d7c4115e2d8874e511; woocommerce_items_in_cart=1; wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
//           }
//         })
//         .then(response => { 
//           console.log("Response from Order Confirmation ")
//           setPrd(response.data)
//           console.log(response)
//           var name = response.data
//           // var confirmation_id = response.data
//           navigation.navigate("Confirmation", name)

//           // console.log("Confirmation")
//           // console.log(Prd)


//           // Clear Cart

//           var axios = require('axios');

//           var config = {
//             method: 'post',
//             url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
//             headers: { 
//               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU0MjMzMTgyLCJuYmYiOjE2NTQyMzMxODIsImV4cCI6MTY1NDgzNzk4MiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDA2In19fQ.Xt1An45-WaaB--Y3gUVZuiPnDGFFJ8lp88A8E8WVBcw', 
//               'Cookie': 'wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
//             }
//           };
          
//           axios(config)
//           .then(function (response) {

//             console.log("Response From Clear Cart")
//             console.log(JSON.stringify(response.data));

//            // setOrder(response.data)
//           })
//           .catch(function (error) {
//             console.log("Error From Clear Cart")
//             console.log(error);
//           });



//         })
//         .catch(error => {
//           console.log("Response from Error")
//             console.log(JSON.stringify(error.response))
            
//         });
                  
       

       
//      }

//      const RazorPayMethod = () => {
//       // var options = {
//       //   description: 'Credits Towards Sarin Skin',
//       //   image: '',
//       //   currency: 'INR',
//       //   key: 'rzp_test_X5vKjT8qzlLqNE', // Your api key
//       //   amount: `${total}`,
//       //   name: `${firstname}`,
//       //   prefill: {
//       //     email: `${email}`,
//       //     contact:  `${mobile}`,
//       //     name: 'Razorpay Software'
//       //   },
//       //   theme: {color: '#F37254'}
//       // }
//       // RazorpayCheckout.open(options).then((data) => {
//       //   // handle success
//       //   // alert(`Success: ${data.razorpay_payment_id}`);
//       //   setRazor(data)
//       //   console.log(data)
//       //   var name = data
//       //   // var confirmation_id = response.data
//       //   navigation.navigate("Confirmation", name)

//       //   console.log(JSON.stringify(data.razorpay_payment_id));
//       // }).catch((error) => {
//       //   // handle failure
//       //   console.log(JSON.stringify(error))
//       //   alert(`Error: ${error.code} | ${error.description}`);
//       // });
//     }
// console.log("data")
//     console.log(data)
//     // console.log(products.description)
//   return (
//     <View>
//         <View>
//             {/* <Text style={style.header}>
//             Confirm Your Order
//             </Text> */}
//             </View>
//             <Text style={style.header}>
//               Choose Payment methods

//             </Text>
//             <TouchableOpacity  style={style.input}
//             value= "cod"
//             onPress={CodMethod}
//             >
//               <Text  style={style.header}> </Text>
//             </TouchableOpacity>
//             <Text onPress={()=>this.display('Hello World')}></Text>

//             {/* <TouchableOpacity  
//             style={style.input}
//             onPress={RazorPayMethod}>
//               <Text  style={style.header}>Razor Pay </Text>
//             </TouchableOpacity> */}
     
//     </View>
//   )
// }

// const style = StyleSheet.create({
//    input:{
//     borderWidth:2,
//     marginLeft:5,
//     marginRight:5,
//     marginTop:4
//    },
//    header:{
//     marginTop:10,
//     fontSize:20,
//     fontWeight:"bold",
//     marginBottom:20,
//     textAlign:'center'
//   },
//     register:{
//       backgroundColor:"lime",
//       borderWidth:2,
//       marginLeft:5,
//       marginRight:5,
//       height:40,
//       marginTop:25,
//       marginBottom:20
  
//     },
//     payment:{
//       marginTop:4,
//       fontSize:20,
//       fontWeight:'bold',
//       textAlign:"center",
      
//     },
//     card:{
//         borderWidth:2
//     },
//     name:{
//         fontSize:25,
//     }
//   });



// // import { View, Text } from 'react-native'
// // import React from 'react'

// // export default function OrderDetail({route}) {
// //   const { 
// //         cartDetails,
// //         subtotal,
// //         address1,
// //         address2,
// //         city,
// //         states,
// //         firstname,
// //         lastname,
// //         pincode,
// //         mobile,
// //         email
// //             } = route.params
    
// //   return (
// //     <View>
// //       <Text>OrderDetail</Text>
// //     </View>
// //   )
// // }


import React, { PureComponent, useEffect } from 'react'
import { StyleSheet,SafeAreaView, TouchableOpacity,Text, FlatList,View,ScrollView, ActivityIndicator, Image, Alert } from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { panGestureHandlerCustomNativeProps } from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
export class OrderDetail extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
      isLoading: true,
      appData:[],
      items:[], 
      prd:[],
    }
  }


  componentDidMount(){


    var PaymentUrl = "https://app.sarinskin.com/api/paymentMethod/"


    fetch(PaymentUrl)
    .then((response) => response.json())
    .then((response) => {
      // console.log("response")
      // console.log(response)
      this.setState({
        isLoading: false,
        appData : response,
        
      })
    })
    .catch((error) => {
      console.log(error)
    })
    
  }

  
//  Date = this.props.route.params = {
//     cartDetails,
//     subtotal,
//     address1,
//     address2,
//     city,
//     states ,
//     firstname ,
//     lastname ,
//     pincode,
//     mobile ,
//     email,
//   }

  render() {

    // this.state.Cart= this.state.cartDetails
  

   

    // const subtotal = this.props.route.params.subtotal
    // console.log("totalPrice")
    //  console.log(subtotal)

   

  // const cartDetails = this.props.route.params.cartDetails
  // const subtotal = this.props.route.params.subtotal
  // const address1 = this.props.route.params.address1
  // const address2 = this.props.route.params.address2

  // const city = this.props.route.params.city
  // const states = this.props.route.params.states

  // const firstname = this.props.route.params.firstname
  // const lastname = this.props.route.params.lastname
  // const pincode = this.props.route.params.pincode

  // const mobile = this.props.route.params.mobile
  // const email = this.props.route.params.email


  //   console.log(cartDetails)
  //   console.log(subtotal)
  //   console.log(address1)
  //   console.log(address2)
  //   console.log(city)
  //   console.log(states)
  //   console.log(firstname)
  //   console.log(lastname)
  //   console.log(pincode)
  //   console.log(mobile)
  //   console.log(email)



    const createThreeButtonAlert = (id) =>

    
    Alert.alert(
      `Your Order is Created with Order Id:- ${id}`,
      "Thank you for Shopping with us..",
      [
        {
          text: "Do More Shopping",
          onPress: () => this.props.navigation.navigate('Categories'),
          
        },
        { text: "OK", onPress: () =>  this.props.navigation.navigate('Home') }
      ]
    );


//     if (this.state.isLoading) {

//       return (

//         <View  style={style.activitycontainer}>
//           <Neumorphism
//           lightColor={'#dedddd'}
//           darkColor={'#979797'}
//           shapeType={'flat'}
//           radius={50}
//           style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
//             <View style={{marginTop:6}}>
//             <ActivityIndicator size="large" color="#00ff00" />
//             </View>
          
//           </Neumorphism>
          
//         </View>
//       )
    
//     } 
//     else{
      
    
//     // Total Cart Amount
    
//     // const total_price = this.state.dataSource.total
    
//     // console.log(JSON.stringify(this.state.dataSource))
    
//     const final_data = this.state.appData.data
   
      
//     // console.log("final_data")
//     // console.log(final_data)

//     const Demo = ({data}) => {
//       // console.log("1")
//       // console.log(data.payment_method)

//       const onBuyHandler = async (event) => {
        
//     //alert('Id : ' + data.id )
//     // console.log("2")
//     // console.log(data.payment_method)
// // For Cash on Delivery

//     // if (data.id == 1){

//       // console.log("cartDetails")
//       // console.log(cartDetails)
//       cartDetails.map((val, key) => {
//                   var eachItem = {};
//                     eachItem = {
//                        "product_id": val.id,
//                        "quantity": val.quantity.value
//                     }
//                    this.state.items.push(eachItem)


                  
//                   });


//       if(data.payment_method == "cod"){ 


//         const jsonValue = await AsyncStorage.getItem('UserToken')

//         // console.log("UserToken")
      
//         const json = JSON.parse(jsonValue)
//         // console.log(json)
//         // console.log(json)


//         const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

//         const adminToken = JSON.parse(jsonValue1)

//         // console.log("adminToken")
//         // console.log(adminToken)


//         const cartHash = await AsyncStorage.getItem("CartHash")

//       // console.log("User Cart Hash")
//       // console.log(cartHash)


      
//         const userId = await AsyncStorage.getItem('UserId')

//         // console.log("User id")
//         // console.log(userId)

                 
//                 var axios = require('axios');
        
//                 var data1 = JSON.stringify({
//                   "customer_id": userId,
//                   // "order_key": "wc_order_QGwHk5nKR1yVi",
//                   "billing": {
//                       "first_name":this.props.route.params.firstname,
//                       "last_name": this.props.route.params.lastname,
//                       "company": "",
//                       "address_1": this.props.route.params.address1,
//                       "address_2": this.props.route.params.address2,
//                       "city":this.props.route.params.city,
//                       "state": this.props.route.params.states,
//                       "postcode":this.props.route.params.pincode,
//                       "country": "India",
//                       "email": this.props.route.params.email,
//                       "phone": this.props.route.params.mobile
//                   },
//                   "shipping": {
//                       "first_name": this.props.route.params.firstname,
//                       "last_name": this.props.route.params.lastname,
//                       "company": "",
//                       "address_1": this.props.route.params.address1,
//                       "address_2": this.props.route.params.address2,
//                       "city":this.props.route.params.city,
//                       "state": this.props.route.params.states,
//                       "postcode":this.props.route.params.pincode,
//                       "country": "India",
//                       "email": this.props.route.params.email,
//                       "phone": this.props.route.params.mobile
//                   },
//                   "payment_method": data.payment_method,
//                   "payment_method_title": data.payment_method_tittle,
//                   "line_items": this.state.items,
//                   "prices_include_tax": true,
//                   "discount_total": "0.00",
//                   "discount_tax": "0.00",
//                   "shipping_total": "0.00",
//                   "shipping_tax": "0.00",
//                   "cart_tax": "0.00",
//                   "total": subtotal,
//                   "total_tax": "0.00",
                 
//               });
                
//                 axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
//                   headers: { 
//                     'Authorization': `Bearer ${adminToken}`, 
                  
//                     'Content-Type': 'application/json', 
//                     'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//                   }
//                 })
//                 .then(response => { 

                 
//                   console.log("Response from Order Confirmation ")
                  
//                   this.setState({
//                     prd : response.data
//                   })
                   
                  
//                   // console.log('response')
//                   // console.log(response)
                  
                  
//                   // console.log('responseData')
//                   // console.log(JSON.stringify(response.data))
                  
//                   var id = response.data.id
//                   // // var confirmation_id = response.data
//                   // this.props.navigation.navigate("Confirmation", name)


//                   createThreeButtonAlert(id)

        
//                   // console.log("Confirmation")
//                   // console.log(Prd)
        
        
//                   // Clear Cart
        
//                   var axios = require('axios');
        
//                   var config = {
//                     method: 'post',
//                     url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
//                     headers: { 
//                       'Authorization': `Bearer ${json}`, 
//                       'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//                     }
//                   };
//                   axios(config)
//                   .then((response) => {
//                     // console.log("Response From Clear Cart")
//                     // console.log(JSON.stringify(response.data));
//                    // setOrder(response.data)
//                   })
//                   .catch((error) => {
//                     console.log("Error From Clear Cart")
//                     console.log(error);
//                   });
//                 })
//                 .catch(error => {
//                   console.log("Response from Error")
//                     console.log(JSON.stringify(error.response))
                    
//                 });

//               } 
// else{

//   Alert.alert("Coming Soon")

//     //Razor Pay Method


//       // console.log("Razor pay")
//       // var options = {
//       //   description: 'Credits towards Sarin Skin',
//       //   // image: 'https://i.imgur.com/3g7nmJC.png',
//       //   currency: 'INR',
//       //   key: "rzp_test_18urzUm96IEZdf", // Your api key
//       //   amount: subtotal,
//       //   name: 'Sarin Skin',
//       //   prefill: {
//       //     email: email,
//       //     contact: mobile,
//       //     name: firstname 
//       //   },
//       //   theme: {color: '#F37254'}
//       // }
//       // RazorpayCheckout.open(options).then((razordata) => {
//       //   // console.log("data")
//       //   // console.log(razordata.razorpay_payment_id)

        
//       //   const jsonValue = AsyncStorage.getItem('UserToken')

//       //   // console.log("UserToken")
      
//       //   const json = JSON.parse(jsonValue)
//       //   // console.log(json)
//       //   // console.log(json)


//       //   const jsonValue1 = AsyncStorage.getItem('AdminToken1st')

//       //   const adminToken = JSON.parse(jsonValue1)

//       //   // console.log("adminToken")
//       //   // console.log(adminToken)


//       //   const cartHash = AsyncStorage.getItem("CartHash")

//       // // console.log("User Cart Hash")
//       // // console.log(cartHash)


      
//       //   const userId =AsyncStorage.getItem('UserId')

//       //   // console.log("User id")
//       //   // console.log(userId)

//       //   var axios = require('axios');
        
//       //   var data1 = JSON.stringify({
//       //     "customer_id": userId,
//       //     // "order_key": "wc_order_QGwHk5nKR1yVi",
//       //     "billing": {
//       //         "first_name":this.props.route.params.firstname,
//       //         "last_name": this.props.route.params.lastname,
//       //         "company": "",
//       //         "address_1": this.props.route.params.address1,
//       //         "address_2": this.props.route.params.address2,
//       //         "city":this.props.route.params.city,
//       //         "state": this.props.route.params.states,
//       //         "postcode":this.props.route.params.pincode,
//       //         "country": "India",
//       //         "email": this.props.route.params.email,
//       //         "phone": this.props.route.params.mobile
//       //     },
//       //     "shipping": {
//       //         "first_name": this.props.route.params.firstname,
//       //         "last_name": this.props.route.params.lastname,
//       //         "company": "",
//       //         "address_1": this.props.route.params.address1,
//       //         "address_2": this.props.route.params.address2,
//       //         "city":this.props.route.params.city,
//       //         "state": this.props.route.params.states,
//       //         "postcode":this.props.route.params.pincode,
//       //         "country": "India",
//       //         "email": this.props.route.params.email,
//       //         "phone": this.props.route.params.mobile
//       //     },
//       //     "payment_method": data.payment_method,
//       //     "payment_method_title": "Credit Card/Debit Card/NetBanking",
//       //     "transaction_id": razordata.razorpay_payment_id,
//       //     "line_items": this.state.items,
//       //     "prices_include_tax": true,
//       //     "discount_total": "0.00",
//       //     "discount_tax": "0.00",
//       //     "shipping_total": "0.00",
//       //     "shipping_tax": "0.00",
//       //     "cart_tax": "0.00",
//       //     "total": subtotal,
//       //     "total_tax": "0.00",
//       //     "status": "completed",
         
//       // });
        
//       //   axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
//       //     headers: { 
//       //       'Authorization': `Bearer ${adminToken}`, 
                  
//       //       'Content-Type': 'application/json', 
//       //       'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//       //     }
//       //   })
//       //   .then(response => { 

         
//       //     console.log("Response from Order Confirmation ")
          
//       //     this.setState({
//       //       prd : response.data
//       //     })
           
          
//       //     // console.log(response)
//       //     var name = response
//       //     // // var confirmation_id = response.data
//       //     this.props.navigation.navigate("Confirmation", name)

//       //     // console.log("Confirmation")
//       //     // console.log(Prd)


//       //     // Clear Cart

//       //     var axios = require('axios');

//       //     var config = {
//       //       method: 'post',
//       //       url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
//       //       headers: { 
//       //         headers: { 
//       //           'Authorization': `Bearer ${json}`, 
//       //           'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
//       //         }
//       //       }
//       //     };
//       //     axios(config)
//       //     .then((response) => {
//       //       // console.log("Response From Clear Cart")
//       //       // console.log(JSON.stringify(response.data));
//       //      // setOrder(response.data)
//       //     })
//       //     .catch((error) => {
//       //       console.log("Error From Clear Cart")
//       //       console.log(error);
//       //     });
//       //   })
//       //   .catch(error => {
//       //     console.log("Response from Error")
//       //       console.log(JSON.stringify(error.response))
            
//       //   });



//       //   // handle success
//       //   // alert(`Success: ${data.razorpay_payment_id}`);
       
//       // }).catch((error) => {
//       //   // handle failure 
//       //   // console.log("test")
//       //   // console.log(error.description.slice(52,89))
//       //   // console.log(`Error: ${error.code} | ${error.description}`);
//       //    alert(`${error.description.slice(52,88)}`);
//       // });
      
//     }
     
    


//   }

   
   
    
           
//           return(
//             <TouchableOpacity 
//             style={{
//               backgroundColor:'white',
//             }}
//             // onPress={()=> 
//             //   alert(data.payment_method_tittle + " "  + " " + data.payment_method)
//             // }
//           // //   onPress={() => this.props.navigation.navigate("ProductInfo",
//           // //  data.product_id)}
//             onPress={onBuyHandler}
//             >
//             <Neumorphism 
//              lightColor={'#dedddd'}
//              darkColor={'#979797'}
//              shapeType={'flat'}
//              style={
//               {height:60,
//                 marginBottom:10 ,
//                       width:"97.5%",
//                       backgroundColor:'#E8F9FD',
//                       marginLeft:5,
//                       marginRight:5,
//                       marginTop:15,}
//              }
//              >
//         <Text style={{
//           fontSize:24, 
//           marginLeft:'auto', 
//           marginRight:'auto',
//           paddingTop:5,
//           marginTop:10,
//           fontWeight:'bold',
//           color:'black'
//           }}>
//           {data.payment_method_tittle}</Text>
//             </Neumorphism> 
//               </TouchableOpacity>
    
                
//     )}   //end of render
    
//     return (  // Start of View point in ScrollView
//       <SafeAreaView>
//             <FlatList
//             style={{backgroundColor:'white', height:'100%'}}
//               data={final_data}
//               keyExtractor={({ id }, index) => id}
//               ListHeaderComponent={
//                 <Text style={{
//                   fontSize:27, 
//                   marginLeft:'auto', 
//                   marginRight:'auto',
//                   marginTop:15,
//                   fontWeight:'bold',
//                   marginBottom:20,
//                   color:'black'
//                   }}>
//                   Choose Payment Method
//                 </Text>
//               }
//               renderItem={({ item }) => {
              
//                   return <Demo data={item} />;
//               }}
//             />
//             </SafeAreaView>
               
//     );
    // }
return(
<>
<Text>TEst</Text>
</>

)
}
    }
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
    

export default OrderDetail