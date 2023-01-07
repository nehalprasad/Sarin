// import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
// import React from 'react'
// import RazorpayCheckout from 'react-native-razorpay'

// export default function Test() {
//   return (
//     <View>
//      <TouchableOpacity 
//        style={style.input}
//     onPress={() => {
//     var options = {
//       description: 'Credits towards consultation',
//       image: '',
//       currency: 'INR',
//       key: 'rzp_test_X5vKjT8qzlLqNE', // Your api key
//       amount: '100',
//       name: 'Nehal Prasad',
//       prefill: {
//         email: 'void@razorpay.com',
//         contact: '8586009385',
//         name: 'Razorpay Software'
//       },
//       theme: {color: '#F37254'}
//   }

//   console.log(typeof(options))
//   RazorpayCheckout.open(options).then((data) => {
//     // handle success
//     alert(`Success: ${data.razorpay_payment_id}`);
//     console.log(data)
//   }).catch((error) => {
//     // handle failure
//     console.log(error)
//     alert(`Error: ${error.code} | ${error.description}`);
//   });
// }}>
//     <Text style={style.header}>Go To Payments</Text>
// </TouchableOpacity>
//     </View>
//   )
// }


// const style = StyleSheet.create({
//     input:{
//      borderWidth:2,
//      backgroundColor:'aqua',
//      marginLeft:10,
//      marginRight:10,
//      marginTop:'60%'
//     },
//     header:{
//      marginTop:10,
//      fontSize:25,
//      fontWeight:"bold",
//      marginBottom:20,
//      textAlign:'center',
//      color:'red',
     
//    },
    
//    });
 
 import { View, Text,FlatList, Image } from 'react-native'
 import React, { useEffect, useState } from 'react'
 
 export default function Fresh() {
const [data, setData] = useState()

useEffect(() => {
    fetch("https://app.sarinskin.com/api/products")
    .then((response) => response.json())
    .then((response) => {
      //  console.log(response.results)
        setData(response.results)
        
    })
},[])

    


   return (
     <FlatList
     data={data}
              numColumns={2}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => {
                console.log(item.image)
                  return <>
                  <View style={{alignContent:'center', 
                  marginLeft:180, 
                  marginRight:200, 
                  marginTop:100}}>
                  <Text style={{fontSize:20}}>{item.price}</Text>
                  <View style={{height:100, width:200, borderWidth:2 , marginRight:250}}>
                  <Image
                  style={{height:100, width:170, resizeMode:'contain'}}
                  source ={{uri: item.image}}
                  />
                  </View>
                  
                  </View>

                  
                  </>;
              }}
            />
   )
 }
 