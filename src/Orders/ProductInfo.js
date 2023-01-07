// import { View, Text } from 'react-native'
// import React,{useEffect, useState} from 'react'

// export default function ProductInfo() {

//     const[data, setData] = useState()

//     useEffect(() => {

//         var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://test.sarinskin.com//wp-json/wc/v3/products/11979',
//   headers: { 
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU0MjQzNjY4LCJuYmYiOjE2NTQyNDM2NjgsImV4cCI6MTY1NDg0ODQ2OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.PSNbnGPpMrtwNzz-X47uTAnKhLlGcCjCTFKIi9IRa-4', 
//     'Cookie': 'wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
//   }
// };

// axios(config)
// .then(function (response) {
//   setData()
// })
// .catch(function (error) {
//   console.log(error);
// });


//     },[])

//   return (
//     <View>
//       <Text>ProductInfo</Text>
//     </View>
//   )
// }

import {View,
  Text, 
  Image, 
  StyleSheet, 
  ScrollView, 
  Button, 
  Alert, 
  Dimensions,
  TextInput,
  FlatList
  } from 'react-native';

import React,{useState, useEffect} from 'react';
import ImageZoom from 'react-native-image-pan-zoom';


const ProductInfo = ({navigation, route}) =>  {

const [state, setState] = useState({});
const [qty, setqty] = useState(1);
const [data, setData] = useState()

const productData = route.params;


  // console.log(productData)

const onChangeQtyHandler = (qty) => {
setqty(qty);
};



useEffect(() => {

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://test.sarinskin.com//wp-json/wc/v3/products/11979',
    headers: { 
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU0MjQzNjY4LCJuYmYiOjE2NTQyNDM2NjgsImV4cCI6MTY1NDg0ODQ2OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.PSNbnGPpMrtwNzz-X47uTAnKhLlGcCjCTFKIi9IRa-4', 
      'Cookie': 'wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
    }
  };
  
  axios(config)
  .then((response) => {
    // console.log(JSON.stringify(response.data));
    setData(response.data)
  })
  .catch((error) => {
    console.log(error);
  });

  return () => {
    setState({}); // This worked for me
  };

},[])


// console.log(data)

const onCartHandler = async (event) => {

// console.log(qty)
// console.log(product_details.id)

// var axios = require('axios');

// var config = {
// method: 'post',
// url: `https://test.sarinskin.com/wp-json/cocart/v2/cart/add-item?id=${product_details.id}&quantity=${qty}`,
// headers: { 
//   'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU0MTY1OTc4LCJuYmYiOjE2NTQxNjU5NzgsImV4cCI6MTY1NDc3MDc3OCwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDA2In19fQ.8NEB6nVJAsValzSdy6ZMj7AM1YRf0TA_MyTpdPk5QWU', 
//   'Cookie': 'woocommerce_cart_hash=3a7873131c8fe397bc2cb1cdd1a440ad; woocommerce_items_in_cart=1; wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
// }
// };

// axios(config)
// .then(function (response) {
// // console.log(JSON.stringify(response.data));
// Alert.alert("Added to Cart")
// })
// .catch(function (error) {
// console.log(error);
// });

};

const final_data = data

// console.log(JSON.stringify(final_data.name))
// console.log(typeof(final_data))




// const Demo = (data)=> {

// let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
//    // intiialize src with blank, if image not found it will set blank or default url
//   //    if (product_details.images.length > 0) {
//   // //    console.log("src = " + product_details.images[0].src);
//   //   src = product_details.images[0].src;
//   // }

//   // To remove html Tags
  

// console.log(data)


//   const regex = /(<([^>]+)>)/ig;

  
// return(

//   <ScrollView>
//   <View style={style.card}>
//           <ImageZoom 
//                   cropWidth={400}
//                   cropHeight={400}
//                   imageWidth={400}
//                   imageHeight={400}
//                   >
//               <Image 
//                   // source={{uri: src}}
//                   style={style.image}
//                   />
//           </ImageZoom>
//       <Text
//           style={style.name}>
//           {data.name}
//           </Text>
//       <Text
//           style={style.price}>
//           Rs:- 
//           {/* {data.price}   */}
//           </Text>
//       <Text 
//           style={style.desc}>
//           PRODUCT DETAILS 
//       </Text>
//       <View style={style.descBox}>
//           <Text style={style.description}>
//               {/* {product_details.description= product_details.description.replace(regex, '')} */}
//           </Text>
//       </View>
      
      
//       </View>
//       <View
//           style={style.fixToText}>

    
        
//       <Button
//                       style={style.add}
//                       title="Add to Cart"
//                       onPress={onCartHandler}
//                           />
    
//       <TextInput
//            placeholder="Qty"
//            keyboardType="numeric"
//            value={qty}
//            style={style.qty}
//            placeholderTextColor="#16003B"
//            onChangeText={onChangeQtyHandler}
//            />
     
//   </View>
//   <View style={style.buy}>
//   <Button
//           style={style.buy}
//           title="Go TO Cart"
//           // onPress={onBuyNowHandler}
//           //   onPress={() =>  alert('Id : ' + product_details.id )}
//           onPress={() => navigation.navigate('AddToCart')} 
//               />
//   </View>
  
// </ScrollView>
// )


// }
return(

<>

<Text>
  {/* {final_data.name} */}
</Text>
{/* <FlatList
          style={{backgroundColor:'white', height:'100%'}}
          data={final_data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => {
              return <Demo data={item} />;
          }}
        /> */}
</>
)}

const style = StyleSheet.create({
card: {
},
descBox:{
  textAlign:'center',
  marginLeft:5,
  marginRight:5,
  justifyContent:'space-around'
},
name:{
  color:"#406882",
  fontSize:25,
  marginTop:5,
  textAlign:'center'
},
price:{
  color:"black",
  fontSize:25,
  marginTop:5,
  textAlign:'center',
  fontWeight:'bold'
},

image:{
  marginTop:5,
  width:400, 
  height:400,
  borderRadius:30,
  resizeMode:'contain'
},
desc:{
  marginTop:12,
  fontSize:25, 
  color:'black', 
  marginLeft: 10
},
description:{
  color:"black",
  fontSize:18,   
  textAlign:'center',
  alignContent:'center',
  fontWeight:'normal',
  justifyContent:'space-between'
},
fixToText: {
  flexDirection: 'row',
  justifyContent:'space-between',
  alignContent:'center',
  marginLeft:60,
  marginRight:70,
  marginTop:5,
  marginBottom:20,    
},
add:{
      color:'yellow'
},
buy:{
      color:'green',
      marginLeft:80,
      marginRight:70,
      marginTop:5,
      marginBottom:20,
      width:"60%",

},
qty:{
    borderWidth:2,
    width:"20%",
    height:35,
    textAlign:'center'
}

})
export default ProductInfo;