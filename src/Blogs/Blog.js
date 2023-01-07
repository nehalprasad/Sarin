// // import { View, Text, ActivityIndicator } from 'react-native'
// // import React,{useEffect, useState} from 'react'
// // import { FlatList } from 'react-native-gesture-handler'


// // const Blog = () => {
// //     const [BlogData, setBlogData] = useState()
// //     const [IsLoading, setIsLoading] = useState(true)

// // const Data = () => {
// //     var axios = require('axios');

// //     var config = {
// //       method: 'get',
// //       url: 'https://sarinskin.com/wp-json/wp/v2/posts/19481',
// //       headers: { 
// //         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FyaW5za2luLmNvbSIsImlhdCI6MTY1NzcxMjI4MSwibmJmIjoxNjU3NzEyMjgxLCJleHAiOjE2NTgzMTcwODEsImRhdGEiOnsidXNlciI6eyJpZCI6Ijk5MDAxMyJ9fX0.XUu8B-PkMJd5-uo69i6u_8wJe39PsRvJWlTh2TMGT6M'
// //       }
// //     };
    
// //     axios(config)
// //     .then(function (response) {
// //     //   console.log(JSON.stringify(response.data));
// //         setIsLoading(false)
// //         setBlogData(response.data)
       
// //     })
// //     .catch(function (error) {
// //       console.log(error);
// //     });
    
// // }

// // useEffect(()=>{
// //     Data()
// // },[])


// // console.log("BlogData")
// // console.log(typeof(BlogData))
// // // console.log(BlogData.type)
// // // console.log(typeof(BlogData.title.rendered))

// // if (IsLoading){
// //     return(
// //     <ActivityIndicator/>
// //     )
// // }
// // else{
// //     if (BlogData== undefined){
// //         return(
// //             <ActivityIndicator/>
// //             )
// //     }
// //     else{
// //     return(
// //         <View>
// //         <Text>{BlogData.title.rendered}</Text>

// //         </View>

// //     )
// // }
// // }







// // // const Demo = (data) => {
// // //     console.log(data)
// // //     return(
// // //         <View>
// // //         <Text>{data.post}</Text>
// // //         <Text>testst</Text>
        
// // //         </View>
// // //     )
// // // }





// // //   return (
// // //     <>
// // //     <Text>Testts</Text>
// // //       <FlatList
// // //       data={BlogData}
// // //       keyExtractor={({ id }, index) => id}
// // //       renderItem={({ item }) => {
// // //         return <Demo data={item} key={item.id} />;
// // //       }}/>
// // //     </>
// // //   )
// // }

// // export default Blog

// import { 
//         View, 
//         Text, 
//         FlatList, 
//         Dimensions, 
//         Image, 
//         TouchableOpacity,
//         Alert, 
//         ActivityIndicator,
//         StyleSheet,
//         TouchableWithoutFeedback
//     } from 'react-native'
// import React,{useEffect, useState} from 'react'
// import Neumorphism from 'react-native-neumorphism';
// import { useNavigation } from '@react-navigation/native'
// import { isLoading } from 'expo-font'
// import { RFValue } from 'react-native-responsive-fontsize';


// const {height, width} = Dimensions.get('screen')
// const Blog = () => {
//     const [Category, setCategory] = useState()
//     const [Products, setProducts] = useState()
//     const navigation = useNavigation()
//     const [Id, setId] = useState('118')
//     const [IsLoading, setIsLoading] = useState(true)
//     const [BgColor, setBgColor] = useState('white')
//     const [state, setState] = useState({});
//     const [ selectedItem, setSelectedItem ] = useState();


// const Data = () => {
//     var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://test.sarinskin.com/wp-json/wc/v3/products/categories/?per_page=100',
//   headers: { 
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU3Nzc4NjMyLCJuYmYiOjE2NTc3Nzg2MzIsImV4cCI6MTY1ODM4MzQzMiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.ia3Z4ciYfE-nU4NQz0To4cMqQp7kZOJKBxNHEzH7gdE'
//   }
// };

// axios(config)
// .then(function (response) {
// //   console.log(JSON.stringify(response.data));
//   setCategory(response.data)
// })
// .catch(function (error) {
//   console.log(error);
// }); 
// }

// const Productlist = (data)=>{

//   setSelectedItem(data.name)


// setId(data.id)

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${Id}&per_page=100`,
//   headers: { 
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU3Nzc4NjMyLCJuYmYiOjE2NTc3Nzg2MzIsImV4cCI6MTY1ODM4MzQzMiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.ia3Z4ciYfE-nU4NQz0To4cMqQp7kZOJKBxNHEzH7gdE'
//   }
// };

// axios(config)
// .then(function (response) {
//   // console.log(JSON.stringify(response.data));
//         setProducts(response.data)
//         // setIsLoading(false)
// })
// .catch(function (error) {
//   console.log(error);
// });
// }

// const SubCategory = () => {

//     setBgColor('#00c897')

//     var axios = require('axios');

//     var config = {
//   method: 'get',
//   url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${Id}&per_page=100`,
//   headers: { 
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvdGVzdC5zYXJpbnNraW4uY29tIiwiaWF0IjoxNjU3Nzc4NjMyLCJuYmYiOjE2NTc3Nzg2MzIsImV4cCI6MTY1ODM4MzQzMiwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiOTkwMDAzIn19fQ.ia3Z4ciYfE-nU4NQz0To4cMqQp7kZOJKBxNHEzH7gdE'
//   }
// };

// axios(config)
// .then(function (response) {
//     // setIsLoading(true)
//   // console.log(JSON.stringify(response.data));
//         setProducts(response.data)
       
// })
// .catch(function (error) {
//   console.log(error);
// });

// }

// useEffect(()=>{
//     Data()
//     SubCategory()

//     return () => {
//       setState({}); // This worked for me
//     };

// },[])


// const Demo = ({data}) => {
//         return(
//             <>

// <View   style={ data.data.sub_category_name === selectedItem ? {
//         height:height/10, 
//         width:width/7, 
//         marginHorizontal:5,
//         marginTop:5,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRightWidth:2,
//         borderColor:"#57c3c4",
//         marginBottom:5,
//         // backgroundColor:'#57c3c4'
//     }:{
//       height:height/10, 
//       width:width/6.6, 
//       marginHorizontal:5,
//       marginBottom:5,
//       marginTop:5,
//       alignItems:'center',
//       justifyContent:'center',
//       borderRightWidth:0.17,
//       backgroundColor:'white'
//     }}>
//                          <TouchableWithoutFeedback
//                             //  style={[isFocus==true && { backgroundColor:'black' }]}
//                               onPressIn={() =>  
//                                         Productlist(data)
//                                         }
//                               // onPress={() =>  
//                               //             Productlist(data)
//                               //             }
//                               // onFocus={() => setFocus(true)}
//                               // onPressOut={() => onpressout(1)}
                                      
//                                         // onPress={()=> alert(data.data.name)}
//                                           >
//                 <Image  
//                       style={{ 
//                                 height:height/17, 
//                                 width:width/8,
//                                 resizeMode:'contain',
//                                 borderRadius:100,
//                              }}
//                              source={{ uri : data.image.src}}
//                              />
//                 </TouchableWithoutFeedback>
//                 <Text
//                     numberOfLines={3}
//                     style={data.name === selectedItem ?
//                           {
//                             marginRight:2,
//                             textAlign:'center',
//                             color:'black',
//                             // fontFamily:'Kanit',
//                             fontWeight:'bold',
//                             fontSize:RFValue(12,height)
//                         }:{
//                         marginRight:2,
//                         textAlign:'center',
//                         color:'black',
//                         fontFamily:'NanumGothic-ExtraBold',
//                         fontSize:RFValue(12,height)
//                        }}
//                        >{data.name}</Text>
//           </View>
//     {/* </> */}








//           {/* <View style={style.Category}>
//                          <TouchableOpacity
//                              onPressIn={() =>  
//                                         Productlist(data)
//                                         }
//                                         // onPress={() =>  
//                                         //   Productlist(data)
//                                         //   }
//                                           >
             
//                 <Image  
//                         style={{ 
//                                 height:height/10, 
//                                 width:width/5,
//                                 borderRadius:100,
//                              }}
//                         source={{ uri : data.image.src}}
//                         />
//                 </TouchableOpacity>
//                 <Text
//                     numberOfLines={1}
//                     style={{
//                             width:width/4,
//                             textAlign:'center',
//                             color:'black',
//                             fontFamily:'Kanit-Bold',
//                             fontSize:RFValue(15,height)
//                         }}
//                     >{data.name}</Text>
//           </View> */}
//             </>
//         )
// }

// const Demo1 = ({data}) => {

//   // console.log(data.stock_status)

//   if(data.stock_status=="instock"){
//     return(
//       <>
//       <View   style={{
//                   alignItems:'center',
//                   justifyContent:'center'
//                   }}>
//       <View style={{
//                   height:height/5, 
//                   width:width/2.88, 
//                   borderWidth:0.2,
//                   alignItems:'center',
//                   justifyContent:'center'
//               }}>
//           <TouchableOpacity
//               onPress={() => navigation.navigate('ProductsDetails',
//               data)}>
//           <Image  
//                   style={{ 
//                           resizeMode:'contain',
//                           height:height/10, 
//                           width:width/3.1, 
//                           alignSelf:'center',
//                       //    borderWidth:2
//                        }}
//                   source={{ uri : data.images[0].src}}
//                   />
           
//           <Text
//               numberOfLines={2}
//               style={{
//                       width:width/4,
//                       textAlign:'center',
//                       color:'black',
//                       alignSelf:'center',
//                       fontFamily:'Kanit-SemiBold',
//                       fontSize:RFValue(17, height)
//                   }}
//               >{data.name}</Text>
//                <Text
//               numberOfLines={2}
//               style={{
//                       width:width/4,
//                       textAlign:'center',
//                       color:'black',
//                       alignSelf:'center',
//                       fontFamily:'Kanit-SemiBold',
//                       fontSize:RFValue(17, height)
//                   }}
//               >Rs-: {data.price}</Text>
//               </TouchableOpacity>   
//     </View>
//     </View>
//       </>
//   )
//   }
//   else{
//     return(
//       <>
//       <View   style={{
//                   alignItems:'center',
//                   justifyContent:'center'
//                   }}>
//       <View style={{
//                   height:height/5, 
//                   width:width/2.88, 
//                   borderWidth:0.2,
//                   alignItems:'center',
//                   justifyContent:'center'
//               }}>
//           <TouchableWithoutFeedback
//               disabled={true}
//               onPress={() => navigation.navigate('ProductsDetails',
//               data)}>
//           <Image  
//                   style={{ 
//                           resizeMode:'contain',
//                           height:height/10, 
//                           width:width/3.1, 
//                           alignSelf:'center',
//                       //    borderWidth:2
//                        }}
//                   source={{ uri : data.images[0].src}}
//                   />
//           </TouchableWithoutFeedback>  
//           <Text
//               numberOfLines={2}
//               style={{
//                       width:width/2,
//                       textAlign:'center',
//                       color:'#00c895',
//                       position:'absolute',
//                       top:'25%',
//                       fontFamily:'Kanit-SemiBold',
//                       fontSize:RFValue(20, height)
//                   }}
//               >Out of Stock</Text>  
//           <Text
//               numberOfLines={2}
//               style={{
//                       width:width/4,
//                       textAlign:'center',
//                       color:'black',
//                       fontFamily:'Kanit-SemiBold',
//                       fontSize:RFValue(17, height)
//                   }}
//               >{data.name}</Text>
//                <Text
//               numberOfLines={2}
//               style={{
//                       width:width/4,
//                       textAlign:'center',
//                       color:'black',
//                       fontFamily:'Kanit-SemiBold',
//                       fontSize:RFValue(17, height)
//                   }}
//               >Rs-: {data.price}</Text>
//     </View>
//     </View>
//       </>
//   )
//   } 
   
// } 



//   return (
//     <View style={{
//                     flexDirection:'row', 
//                     width:width-10, 
//                     marginLeft:5,
//                     backgroundColor:'white'
//                     }}>
//     <View
//         style={{
//             // marginLeft:-20
//             backgroundColor:'white'
//             }}>
//       <FlatList
//             data ={Category}
//             ListFooterComponent={
//                 <View style={{marginBottom:100}}>
//                 </View>
//             }
//             keyExtractor={({id}, index) => index}
//             renderItem={({ item }) => {
//             return <Demo data={item} />;
            
//             }}/>
//         </View>
//         <View
//         style={{
//             marginTop:2,
//             marginLeft:-4,
//             backgroundColor:'white'
//             }}>
//             <FlatList
//                 data ={Products}
//                 numColumns={2}
//                 ListFooterComponent={
//                     <View style={{marginBottom:100}}>
//                     </View>
//                                 }
//                 keyExtractor={({id}, index) => index}
//                 renderItem={({ item }) => {
//                         return <Demo1 data={item} />;          
//                     }}/>
//         </View>
//     </View>
//   )
// }

// export default Blog

// const style= StyleSheet.create({
//     Category:{
//         height:height/7, 
//         width:width/3.8, 
//         marginHorizontal:5,
//         marginTop:5,
//         alignItems:'center',
//         justifyContent:'center',
//         borderRightWidth:1,
//     }
// })


// import React, { useEffect, useState } from 'react';
// import { FlatList, Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Alert,Dimensions,PixelRatio, ImageBackground } from 'react-native';
// import { SafeAreaView } from 'react-navigation';
// import Neumorphism from 'react-native-neumorphism';
// import { useFetch } from './Hook';
// import { RFValue } from 'react-native-responsive-fontsize';
// const{width, height} = Dimensions.get('window')
// PixelRatio.getFontScale()
// const SubCategory_Data = ({navigation, route}) => {


//   const category_data = route.params;

//   const [data, loading] = useFetch(
//     `https://app.sarinskin.com/api/sub_category/?category=${category_data.id}`
//    );

//     return (
//       <>
//         {loading ? (
//           <View  style={{
//             flex: 1,
//             justifyContent: "center"
          
//         }}>
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
          
//         ) : (
//           <View style={{backgroundColor:'white'}}>
//             <FlatList
//               style={style.container}
//               data={data}
//               initialNumToRender={8}
//               windowSize={2}
//               refreshing
//               numColumns={3}
//               keyExtractor={({ id }, index) => id}
//               ListFooterComponent = 
//                     {
//                         <View style={{
//                           // marginTop:'5%' , 
//                           marginLeft:'1%',
//                           paddingBottom:10, 
//                           backgroundColor:'white'
//                           }}>
//                         <Text style={{
//                           fontFamily:'Kanit-Black', 
//                           fontSize:RFValue(25, height), 
//                           textAlign:'center', 
//                           color:'black'
//                           }}>More Products Coming Soon.......</Text>
//                         </View>
//                     }
//               renderItem={({ item }) => {
//                         return <SafeAreaView style={{}}>
//                         <View style={{
//                                       height:height/3,
//                                       width:width/3-8,
//                                       marginLeft:5,
//                                       marginTop:10
//                                       }}>
            
//                           <TouchableOpacity
//                               activeOpacity={0.8}
//                               // onPress={() =>  alert('Id : ' + item.id )}
//                               onPress={() => navigation.navigate('Products_data',  {
//                                                            dataName : item})}
//                               >      
//                       <Neumorphism 
//                           lightColor={'#ffffff'}
//                           darkColor={'#E8F9FD'}
//                           shapeType={'flat'}
//                           radius={0}
//                           style={{}}
//                           >
//                         <Image style={{
//                                     height:height/6,
//                                     borderWidth:1,
//                                     borderRadius:100,
//                                     resizeMode:'contain',
//                                   }} 
//                                 source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
//                         <View style={{
//                                 justifyContent: 'center', 
//                                 alignItems: 'center',
//                                 height:height/16.8
//                                 }}>
//                         <Text style={{
//                                 // fontWeight:'bold', 
//                                 color:'black',
//                                 textAlign:'center', 
//                                 fontSize:RFValue(14, height),
//                                 fontFamily:'Foundation'
//                                       }}>{item.sub_category_name}</Text>
//                         </View>
//                        </Neumorphism>
//                         </TouchableOpacity>
//                         </View>
                     
//                       </SafeAreaView>
//               }}
//             />
//             </View>
//         )}
//       </>
//     );
//             }

 
//   // Start of styling
//   const style = StyleSheet.create({
//       container:{
//       backgroundColor:'white',
//       height:'100%'
//       },
//       card:{
//         height:160,
//         width:150,
//         backgroundColor:'#E8F9FD',
//         marginLeft:"15%",
//         marginRight:"-2%",
//         marginTop:15,
//         borderRadius:50,
//         marginBottom:20
  
//       },
//       image:{
//         height:100,
//         width:100,
//         marginLeft:'auto',
//         marginRight:'auto',
//         borderRadius:50
//       },
//       name:{
//       fontSize:14.5,
//       fontWeight:'bold',
//       textAlign:'center',
//       paddingLeft:15,
//       paddingRight:15,
//       marginLeft:'auto',
//       marginRight:'auto',
//       color:'#112B3C',
//       marginTop:4
//       }  ,
//       ima:{
//         height:100,
//         width:100,
//         marginLeft:'auto',
//         marginRight:'auto',
//         borderRadius:50
//       }
//   })
// export default SubCategory_Data;
import AsyncStorage from "@react-native-async-storage/async-storage";
import Neumorphism from 'react-native-neumorphism';
import { View, 
          Text,
          FlatList, 
          Image, 
          Dimensions, 
          TouchableOpacity,
          TouchableWithoutFeedback,
          SafeAreaView,
          StyleSheet
        } from 'react-native'
import React,{useState, useEffect} from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { ActivityIndicator } from 'react-native-paper';
const {height, width} = Dimensions.get('screen')
const SubCategories = ({navigation , route}) => {
      const [SubCategory, setSubCategory] = useState()
      const [Category, setCategory] = useState()
      const [Products, setProducts] = useState()
      const [Id, setId] = useState('118')
      const[isLoading, setLoading] = useState(true)
      const [state, setState] = useState({});
      const [isFocus, setFocus] = useState(false)
      const [ selectedItem, setSelectedItem ] = useState();

    const subCategory = async() => {

      const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
          
      const adminToken = JSON.parse(jsonValue1)

      var axios = require('axios');

      var config = {
          method: 'get',
          url: 'https://test.sarinskin.com/wp-json/wc/v3/products/categories/?per_page=100',
          headers: { 
            'Authorization': `Bearer ${adminToken}`
          }
        };


        axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data.data));
          setLoading(false)
          setSubCategory(response.data)
         
        })
        .catch(function (error) {
          console.log(error);
        });
}

const List = async(date)=>{

   const data = date.data.slug
  
  // console.log(data)
  const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
          
  const adminToken = JSON.parse(jsonValue1)
  // console.log(adminToken)

 
  // console.log(date.data.id)

  // console.log(Id)
  var axios = require('axios');
  
  var config = {
    method: 'get',
    url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${Id}&per_page=100`,
    headers: { 
      'Authorization': `Bearer ${adminToken}`
    }
  };

  axios(config)
  .then((response) => {
  setProducts(response.data)
  })
  .catch((error) => {
    // console.log("text")
    // console.log(error);
    setProducts("1")
  });
  }



  const Data = async() => {

    const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
          
    const adminToken = JSON.parse(jsonValue1)

    var axios = require('axios');

    var config = {
        method: 'get',
        url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${Id}&per_page=100`,
        headers: { 
          'Authorization': `Bearer ${adminToken}`
        }
      };

axios(config)
.then(function (response) {
    // setIsLoading(true)
  // console.log(JSON.stringify(response.data));
        setProducts(response.data)
       
})
.catch(function (error) {
  console.log(error);
});
}

const Productlist = async(date)=>{
  setId(date.data.id)
  setSelectedItem(date.data.name)
  List(date)
}

useEffect(() => {
  subCategory()
  Data()
  return () => {
    setState({}); // This worked for me
  };
}, [])


const onCartHandler = async (data) => {

  const jsonValue = await AsyncStorage.getItem('UserToken')

  const json = JSON.parse(jsonValue)

  var axios = require('axios');

  var config = {
    method: 'post',
    url: `https://test.sarinskin.com/wp-json/cocart/v2/cart/add-item?id=${data.id}&quantity=1`,
    headers: { 
      'Authorization': `Bearer ${json}`, 
      //'Cookie': 'woocommerce_cart_hash=3a7873131c8fe397bc2cb1cdd1a440ad; woocommerce_items_in_cart=1; wp_cocart_session_d79e3cb8519ec200044300e8ec8ad9df=990006%7C%7C1654769624%7C%7C1654683224%7C%7C3e6c171d64ba957bda6db3de21f1ad88'
    }
  };
  
  axios(config)
  .then((response) => {
    // console.log(JSON.stringify(response.data));
  //   console.log("cart hash");
  //   console.log(response.data.cart_hash);
    AsyncStorage.setItem("CartHash" , response.data.cart_hash)
    alert("Added to Cart")
  })
  .catch((error) => {
    console.log(error);
  });

};

if(isLoading == true){
  return(
    <SafeAreaView>
    <View  style={{
      marginTop:'70%',
      alignItems:'center',

    
  }}>
          <Neumorphism
    lightColor={'#dedddd'}
    darkColor={'#dedddd'}
    shapeType={'flat'}
    radius={50}
    style={{width:60,height:60, marginLeft:'auto', marginRight:'auto',}}>
      <View style={{marginTop:5}}>
      <ActivityIndicator size="large" color="#57c3c4" />

      </View>

    </Neumorphism>
    
  </View>
  </SafeAreaView>
  )
} else{
  




const Demo = (data) => {
  // console.log(`https://app.sarinskin.com${data.data.image}`)
  // console.log(JSON.stringify(data.data.name))
  return(
    <>
<View   style={ data.data.name === selectedItem ? {
        height:height/10, 
        width:width/7, 
        marginHorizontal:5,
        marginTop:5,
        alignItems:'center',
        justifyContent:'center',
        borderRightWidth:2,
        borderColor:"#57c3c4",
        marginBottom:5,
        // backgroundColor:'#57c3c4'
    }:{
      height:height/10, 
      width:width/6.6, 
      marginHorizontal:5,
      marginBottom:5,
      marginTop:5,
      alignItems:'center',
      justifyContent:'center',
      borderRightWidth:0.17,
      backgroundColor:'white'
    }}>
                         <TouchableWithoutFeedback
                            //  style={[isFocus==true && { backgroundColor:'black' }]}
                              onPressIn={() =>  
                                        Productlist(data)
                                        }
                              // onPress={() =>  
                              //             Productlist(data)
                              //             }
                              // onFocus={() => setFocus(true)}
                              // onPressOut={() => onpressout(1)}
                                      
                                        // onPress={()=> alert(data.data.name)}
                                          >
                <Image  
                      style={{ 
                                height:height/17, 
                                width:width/8,
                                resizeMode:'contain',
                                borderRadius:100,
                             }}
                             source={{ uri : data.data.image.src}}
                             />
                </TouchableWithoutFeedback>
                <Text
                    numberOfLines={3}
                    style={ data.data.name === selectedItem ?
                          {
                            marginRight:2,
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Quicksand-Bold',
                            fontWeight:'bold',
                            fontSize:RFValue(12,height)
                        }:{
                        marginRight:2,
                        textAlign:'center',
                        color:'black',
                        fontFamily:'Quicksand-Regular',
                        fontSize:RFValue(12,height)
                       }}
                    >{data.data.name}</Text>
          </View>
    </>
  )
}

// if (isLoading == true) {
//   return (
//     <View  style={{
//       flex: 1,
//       justifyContent: "center", 
//       backgroundColor:'white'
    
//   }}>
//     <Neumorphism
//     lightColor={'#dedddd'}
//     darkColor={'#979797'}
//     shapeType={'flat'}
//     radius={50}
//     style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
//       <View style={{marginTop:6}}>
//       <ActivityIndicator size="large" color="#00ff00" />
//       </View>
    
//     </Neumorphism>
    
//   </View>
//   )

// } 
// else {
const Demo1 = ({data}) => {
  // console.log("data")
  // console.log(data)

  if (data == 1){
   
  return(
    <View style={{
                  height, 
                  width, 
                  justifyContent:'center', 
                  alignItems:'center',
                  marginLeft:'-20%',
                  marginTop:'-20%'
                  }}>
    <Text style={{
                  fontSize:RFValue(17, height),
                  fontFamily:'Teko-SemiBold',
                  color:'black'
                  }}>No Products Available</Text>
    </View>
  )

  }
else{

// console.log(data.name)
  if(data.stock_status=="instock"){
    return(
      <>
      <View   
            style={{
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
      <View 
            style={{
                  height:height/4, 
                  width:width/2.5, 
                  // borderWidth:0.17,
                  borderRightWidth:0.17,
                  borderBottomWidth:0.17,
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
          <TouchableOpacity
                  onPress={() => navigation.navigate('ProductsDetails',
                  data)}
                      >
                    
          <Image  
                style={{ 
                        resizeMode:'contain',
                        height:height/9, 
                        width:width/3.1, 
                        alignSelf:'center',
                       }}
                       source={{ uri : data.images[0].src}}
                  />
           <View style={{
                          // marginTop:'3%',
                          justifyContent:'center', 
                          alignItems:'center',
                          // marginTop:10,
                          alignContent:'center',
                          alignSelf:'center',
                          width:width/2.8,
                          height:height/12,
                          // borderWidth:1,
                          }}>    
          <Text
                numberOfLines={3}
                style={{
                       
                        // textAlign:'center',
                        color:'black',
                        fontFamily:'NanumGothic-Regular',
                        fontSize:RFValue(18, height)
                    }}
              >
                {data.name}
          </Text>
          </View>
                </TouchableOpacity>   
                <View style={{flexDirection:'row'}}>
                        <Text
                          numberOfLines={1}
                          style={{
                              // width:width/4,
                              // borderWidth:1,
                              marginTop:"11%",
                              marginLeft:5,
                              color:'black',
                              // alignSelf:'center',
                              fontFamily:'NanumGothic-Regular',
                              fontSize:RFValue(17, height)
                          }}
                            >Rs-: </Text>
                      <Text
                          numberOfLines={2}
                          style={{
                              // width:width/4,
                              marginTop:"8%",
                              color:'black',
                              // alignSelf:'center',
                              fontFamily:'Kanit-SemiBold',
                              fontSize:RFValue(17, height)
                          }}
                      >{data.price}</Text>
                      <TouchableOpacity
                        onPress={() => onCartHandler(data)}>
                        <View style={{
                                      borderWidth:0.2,
                                      height:height/30,
                                      justifyContent:'center',
                                      borderRadius:5, 
                                      marginTop:"10%",
                                      marginLeft:"18%",
                                      backgroundColor:'white',
                                      width:width/6.5,
                                      }}>
                            <Text style={{
                                          textAlign:'center',
                                          color:"#57c3c4",
                                          // fontFamily:'Kanit-Bold',
                                          fontSize:RFValue(17.5, height)
                                          }}>Add</Text>
                        </View>
                         
                          
                      </TouchableOpacity>
                </View>
                
               {/* <Text
                  numberOfLines={2}
                  style={{
                      width:width/4,
                      textAlign:'center',
                      color:'black',
                      alignSelf:'center',
                      fontFamily:'Kanit-SemiBold',
                      fontSize:RFValue(17, height)
                  }}
              >Rs-: {data.price}</Text> */}
          
    </View>
    </View>
      </>
  )
  }
  else{
    return(
      <>
      <View   style={{
                  alignItems:'center',
                  justifyContent:'center'
                  }}>
      <View style={{
                  height:height/4, 
                  width:width/2.5, 
                  borderRightWidth:0.17,
                  borderBottomWidth:0.17,
                  alignItems:'center',
                  justifyContent:'center'
              }}>
          <TouchableOpacity
              // disabled={true}
              onPress={() => navigation.navigate('ProductsDetails',
              data)}
              >
          <Image  
                  style={{ 
                          resizeMode:'contain',
                          height:height/10, 
                          width:width/3.1, 
                          alignSelf:'center',
                      //    borderWidth:2
                         
                       }}
                       source={{ uri : data.images[0].src}}
                  />

        <Text
              numberOfLines={2}
              style={{
                      width:width/2,
                      color:"black",
                      position:'absolute',
                      top:'30%',
                      fontFamily:'Quicksand-Bold',
                      fontSize:RFValue(22, height)
                  }}
              >Out of Stock</Text>  
              <Text
                  numberOfLines={2}
                  style={{
                          width:width/4,
                          textAlign:'center',
                          color:'black',
                          fontFamily:'NanumGothic-Regular',
                          fontSize:RFValue(17, height)
                      }}
                  >{data.name}</Text>

          </TouchableOpacity>  
   
               {/* <Text
              numberOfLines={2}
              style={{
                      width:width/4,
                      textAlign:'center',
                      color:'black',
                      fontFamily:'Kanit-SemiBold',
                      fontSize:RFValue(17, height)
                  }}
              >Rs-: {data.price}</Text> */}
    </View>
    </View>
      </>
  )
  }
}
}

  return (
    <View style={{
      flexDirection:'row', 
      width:width-10, 
      marginLeft:5,
      backgroundColor:'white'
      }}>
      <View
        style={{
            // marginLeft:-20
            backgroundColor:'white'
            }}>
      <FlatList
      initialNumToRender={8}
      windowSize={4}
      data={SubCategory}
      keyExtractor={({id}, index) => index}
      renderItem={({ item }) => {
      return <Demo data={item} />;
      
      }}/>
    </View>
    <View
        style={{
            marginTop:2,
            marginLeft:-4,
            backgroundColor:'white'
            }}>
              <FlatList
                        data={Products}
                        numColumns={2}
                        initialNumToRender={8}
                        windowSize={4}
                        ListFooterComponent={
                            <View style={{
                              // marginBottom:100
                              }}>
                            </View>
                                        }
                        keyExtractor={({id}, index) => index}
                        renderItem={({ item }) => {
                            return <Demo1 data={item} />;         
                            }}/>
    </View>
    </View>
  )
}
}
export default SubCategories

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  red: {
    backgroundColor: 'red',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});