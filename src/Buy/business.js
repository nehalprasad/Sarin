// import { 
//     StyleSheet,
//     SafeAreaView, 
//     TouchableOpacity,
//     Text, 
//     FlatList,
//     View,
//     ScrollView, 
//     ActivityIndicator,
//     Image, 
//     Alert, 
//     Dimensions} from 'react-native';
// import Neumorphism from 'react-native-neumorphism';
// import RazorpayCheckout from 'react-native-razorpay';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import React, {  } from 'react'
// import { RFValue } from 'react-native-responsive-fontsize';
// const {width, height} = Dimensions.get('window')

// const business = ({navigation , route}) => {
//         const [IsLoading, setIsLoading] = useState(true)
//         const [AppData, setAppData] = useState([])
//         const [Items, setItems] = useState([])
//         const [Prd, setPrd] = useState([])
//         const {
//             cartDetails, 
//             subtotal,
//             address1,
//             address2, 
//             city, 
//             firstname,
//             lastname,
//             pincode,
//             mobile,
//             email
//             } = route.params

//             console.log(cartDetails)
//   return (
//     <View>
//       <Text>business</Text>
//     </View>
//   )
// }

// export default business

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
    Dimensions} from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import RazorpayCheckout from 'react-native-razorpay';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { Component } from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window')


export class OrderDetails extends Component {
    constructor(props) {
        super(props)
      
        this.state = {
          isLoading: true,
          appData:[],
          items:[], 
          prd:[],
          cartDetails : this.props.route.params.cartDetails,
          subtotal : this.props.route.params.subtotal,
          address1 : this.props.route.params.address1,
          address2 : this.props.route.params.address2,
         
          city : this.props.route.params.city,
          states : this.props.route.params.states,
         
          firstname : this.props.route.params.firstname,
          lastname : this.props.route.params.lastname,
          pincode : this.props.route.params.pincode,
         
          mobile : this.props.route.params.mobile,
          email : this.props.route.params.email,
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

      shouldComponentUpdate(){
        return true;
      }
  render() {

    // console.log(JSON.stringify(this.state.cartDetails))
    // console.log(subtotal)
    // console.log(address1)
    // console.log(address2)
    // console.log(city)
    // console.log(states)
    // console.log(firstname)
    // console.log(lastname)
    // console.log(pincode)
    // console.log(mobile)
    // console.log(email)

    
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

      if (this.state.isLoading) {

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
              
          
    console.log(this.state.cartDetails)
  
            // Total Cart Amount
            
            // const total_price = this.state.dataSource.total
            
            // console.log(JSON.stringify(this.state.dataSource))
            
            const final_data = this.state.appData.data
           
              
            // console.log("final_data")
            // console.log(final_data)
        
            const Demo = ({data}) => {
              // console.log("1")
              // console.log(data.payment_method)
        
              const onBuyHandler = async (event) => {
                
            //alert('Id : ' + data.id )
            // console.log("2")
            // console.log(data.payment_method)
        // For Cash on Delivery
        
            // if (data.id == 1){
        
              // console.log("cartDetails")
              // console.log(cartDetails)


              this.state.cartDetails.map((val, key) => {
                          var eachItem = {};
                            eachItem = {
                               "product_id": val.id,
                               "quantity": val.quantity.value
                            }
                           this.state.items.push(eachItem)           
                          });
        
        
              if(data.payment_method == "cod"){ 
        
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
                              "first_name":this.props.route.params.firstname,
                              "last_name": this.props.route.params.lastname,
                              "company": "",
                              "address_1": this.props.route.params.address1,
                              "address_2": this.props.route.params.address2,
                              "city":this.props.route.params.city,
                              "state": this.props.route.params.states,
                              "postcode":this.props.route.params.pincode,
                              "country": "India",
                              "email": this.props.route.params.email,
                              "phone": this.props.route.params.mobile
                          },
                          "shipping": {
                              "first_name": this.props.route.params.firstname,
                              "last_name": this.props.route.params.lastname,
                              "company": "",
                              "address_1": this.props.route.params.address1,
                              "address_2": this.props.route.params.address2,
                              "city":this.props.route.params.city,
                              "state": this.props.route.params.states,
                              "postcode":this.props.route.params.pincode,
                              "country": "India",
                              "email": this.props.route.params.email,
                              "phone": this.props.route.params.mobile
                          },
                          "payment_method": data.payment_method,
                          "payment_method_title": data.payment_method_tittle,
                          "line_items": this.state.items,
                          "prices_include_tax": true,
                          "discount_total": "0.00",
                          "discount_tax": "0.00",
                          "shipping_total": "0.00",
                          "shipping_tax": "0.00",
                          "cart_tax": "0.00",
                          "total": this.state.subtotal,
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
                          
                          this.setState({
                            prd : response.data
                          })
                           
                          
                          // console.log('response')
                          // console.log(response)
                          
                          
                          // console.log('responseData')
                          // console.log(JSON.stringify(response.data))
                          
                          var id = response.data.id
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
                           // setOrder(response.data)
                          })
                          .catch((error) => {
                            console.log("Error From Clear Cart")
                            console.log(error);
                          });
                        })
                        .catch(error => {
                          console.log("Response from Error")
                            console.log(JSON.stringify(error.response))
                            
                        });
        
                      } 
        else{
        
          Alert.alert("Coming Soon")
        
            //Razor Pay Method
        
        
              // console.log("Razor pay")
              // var options = {
              //   description: 'Credits towards Sarin Skin',
              //   // image: 'https://i.imgur.com/3g7nmJC.png',
              //   currency: 'INR',
              //   key: "rzp_test_18urzUm96IEZdf", // Your api key
              //   amount: subtotal,
              //   name: 'Sarin Skin',
              //   prefill: {
              //     email: email,
              //     contact: mobile,
              //     name: firstname 
              //   },
              //   theme: {color: '#F37254'}
              // }
              // RazorpayCheckout.open(options).then((razordata) => {
              //   // console.log("data")
              //   // console.log(razordata.razorpay_payment_id)
        
                
              //   const jsonValue = AsyncStorage.getItem('UserToken')
        
              //   // console.log("UserToken")
              
              //   const json = JSON.parse(jsonValue)
              //   // console.log(json)
              //   // console.log(json)
        
        
              //   const jsonValue1 = AsyncStorage.getItem('AdminToken1st')
        
              //   const adminToken = JSON.parse(jsonValue1)
        
              //   // console.log("adminToken")
              //   // console.log(adminToken)
        
        
              //   const cartHash = AsyncStorage.getItem("CartHash")
        
              // // console.log("User Cart Hash")
              // // console.log(cartHash)
        
        
              
              //   const userId =AsyncStorage.getItem('UserId')
        
              //   // console.log("User id")
              //   // console.log(userId)
        
              //   var axios = require('axios');
                
              //   var data1 = JSON.stringify({
              //     "customer_id": userId,
              //     // "order_key": "wc_order_QGwHk5nKR1yVi",
              //     "billing": {
              //         "first_name":this.props.route.params.firstname,
              //         "last_name": this.props.route.params.lastname,
              //         "company": "",
              //         "address_1": this.props.route.params.address1,
              //         "address_2": this.props.route.params.address2,
              //         "city":this.props.route.params.city,
              //         "state": this.props.route.params.states,
              //         "postcode":this.props.route.params.pincode,
              //         "country": "India",
              //         "email": this.props.route.params.email,
              //         "phone": this.props.route.params.mobile
              //     },
              //     "shipping": {
              //         "first_name": this.props.route.params.firstname,
              //         "last_name": this.props.route.params.lastname,
              //         "company": "",
              //         "address_1": this.props.route.params.address1,
              //         "address_2": this.props.route.params.address2,
              //         "city":this.props.route.params.city,
              //         "state": this.props.route.params.states,
              //         "postcode":this.props.route.params.pincode,
              //         "country": "India",
              //         "email": this.props.route.params.email,
              //         "phone": this.props.route.params.mobile
              //     },
              //     "payment_method": data.payment_method,
              //     "payment_method_title": "Credit Card/Debit Card/NetBanking",
              //     "transaction_id": razordata.razorpay_payment_id,
              //     "line_items": this.state.items,
              //     "prices_include_tax": true,
              //     "discount_total": "0.00",
              //     "discount_tax": "0.00",
              //     "shipping_total": "0.00",
              //     "shipping_tax": "0.00",
              //     "cart_tax": "0.00",
              //     "total": subtotal,
              //     "total_tax": "0.00",
              //     "status": "completed",
                 
              // });
                
              //   axios.post('https://test.sarinskin.com/wp-json/wc/v3/orders/', data1, {
              //     headers: { 
              //       'Authorization': `Bearer ${adminToken}`, 
                          
              //       'Content-Type': 'application/json', 
              //       'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
              //     }
              //   })
              //   .then(response => { 
        
                 
              //     console.log("Response from Order Confirmation ")
                  
              //     this.setState({
              //       prd : response.data
              //     })
                   
                  
              //     // console.log(response)
              //     var name = response
              //     // // var confirmation_id = response.data
              //     this.props.navigation.navigate("Confirmation", name)
        
              //     // console.log("Confirmation")
              //     // console.log(Prd)
        
        
              //     // Clear Cart
        
              //     var axios = require('axios');
        
              //     var config = {
              //       method: 'post',
              //       url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart/clear',
              //       headers: { 
              //         headers: { 
              //           'Authorization': `Bearer ${json}`, 
              //           'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
              //         }
              //       }
              //     };
              //     axios(config)
              //     .then((response) => {
              //       // console.log("Response From Clear Cart")
              //       // console.log(JSON.stringify(response.data));
              //      // setOrder(response.data)
              //     })
              //     .catch((error) => {
              //       console.log("Error From Clear Cart")
              //       console.log(error);
              //     });
              //   })
              //   .catch(error => {
              //     console.log("Response from Error")
              //       console.log(JSON.stringify(error.response))
                    
              //   });
        
        
        
              //   // handle success
              //   // alert(`Success: ${data.razorpay_payment_id}`);
               
              // }).catch((error) => {
              //   // handle failure 
              //   // console.log("test")
              //   // console.log(error.description.slice(52,89))
              //   // console.log(`Error: ${error.code} | ${error.description}`);
              //    alert(`${error.description.slice(52,88)}`);
              // });
              
            }
             
            
        
        
          }
        
           
           
            
                   
                  return(
                    <TouchableOpacity 
                    style={{
                      backgroundColor:'white',
                    }}
                    // onPress={()=> 
                    //   alert(data.payment_method_tittle + " "  + " " + data.payment_method)
                    // }
                  // //   onPress={() => this.props.navigation.navigate("ProductInfo",
                  // //  data.product_id)}
                    onPress={onBuyHandler}
                    >
                    <Neumorphism 
                     lightColor={'#dedddd'}
                     darkColor={'#979797'}
                     shapeType={'flat'}
                     style={{
                              width:width-10,
                              marginTop:'3%',
                              backgroundColor:'#00C897',
                              borderRadius:25,
                              borderColor:'white',
                              borderWidth:5, 
                              marginLeft:'1%', 
                              height:height/11, 
                              alignItems:'center', 
                              marginBottom:'3%'
                            }}
                     >
                <Text style= {{  
                           fontSize:RFValue(28, height), 
                           color:'white',
                           fontFamily:'Kanit-Bold'
                          }}>
                  {data.payment_method_tittle}</Text>
                    </Neumorphism> 
                      </TouchableOpacity>
            
                        
            )}   //end of render
            
            return (  // Start of View point in ScrollView
              <SafeAreaView>
                    <FlatList
                    style={{backgroundColor:'white', height:'100%'}}
                      data={final_data}
                      keyExtractor={({ id }, index) => id}
                      ListHeaderComponent={
                        <Text style={{
                          fontFamily:'Kanit-SemiBold',
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
                       
            );
            }
   
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
  

export default OrderDetails