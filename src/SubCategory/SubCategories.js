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

    const subCategory = () => {

        const received = route.params
        // console.log(received.id)

      var axios = require('axios');

        var config = {
          method: 'get',
          url: `https://app.sarinskin.com/api/sub_category/?category=${received.id}`,
        };
        axios(config)
        .then(function (response) {
          // console.log(JSON.stringify(response.data.data));
          setLoading(false)
          setSubCategory(response.data.data)
         
        })
        .catch(function (error) {
          console.log(error);
        });
}

const List = async(date)=>{

   const data = date.data.name
  
  // console.log(data)
  const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
          
  const adminToken = JSON.parse(jsonValue1)
  // console.log(adminToken)

  var axios = require('axios');
          
  var config = {
    method: 'get',
    url: `https://test.sarinskin.com/wp-json/wc/v3/products/categories?slug=${data}`,
    headers: { 
      'Authorization': `Bearer ${adminToken}`
    }
  };

  axios(config)
  .then((response) => {
    // console.log(response.data)
    const data_id = response.data[0].id

    // console.log(data_id)

    var config = {
      method: 'get',
      url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${data_id}&per_page=100`,
      headers: { 
        'Authorization':  `Bearer ${adminToken}`
      }
    };
    
   axios(config)
    .then((response) => 
    {
      // setIsLoading(false)
      // console.log("response.data")

      setProducts(response.data)
      // setFocus(true)
    })
    // console.log(JSON.stringify(response.data));
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
  // alert(date.data.id)
  setSelectedItem(date.data.sub_category_name)
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
      <ActivityIndicator size="large" color="#00ff00" />

      </View>

    </Neumorphism>
    
  </View>
  </SafeAreaView>
  )
} else{
  




const Demo = (data) => {
  // console.log(`https://app.sarinskin.com${data.data.image}`)
  // console.log(data)
  return(
    <>

  <View   style={ data.data.sub_category_name === selectedItem ? {
        height:height/10, 
        width:width/6, 
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
      width:width/6, 
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
                      source={{uri: `https://app.sarinskin.com${data.data.image}`}}
                             />
                </TouchableWithoutFeedback>
                <Text
                    numberOfLines={3}
                    style={ data.data.sub_category_name === selectedItem ?
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
                    >{data.data.sub_category_name}</Text>
          </View>
    </>
  )
}

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
                  fontSize:RFValue(20, height),
                  fontFamily:'Teko-SemiBold',
                  color:'black'
                  }}>No Products Available</Text>
    </View>
  )

  }
else{


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
                              fontSize:RFValue(22, height)
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
                              fontSize:RFValue(22, height)
                          }}
                      >{data.price}</Text>
                      {/* <TouchableOpacity
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
                         
                          
                      </TouchableOpacity> */}
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
          <TouchableWithoutFeedback
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
          </TouchableWithoutFeedback>  
          <Text
              numberOfLines={2}
              style={{
                      width:width/2,
                      color:"black",
                      position:'absolute',
                      top:'30%',
                      textAlign:'center',
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
      marginLeft:6,
      backgroundColor:'white'
      }}>
        <Neumorphism
                    lightColor={'black'}
                    darkColor={'black'}
                    // size="flat"
                    radius={5}
                    >
      {/* <View
        style={{
            // marginLeft:-20
            backgroundColor:'white'
            }}> */}
        
      <FlatList
                // style={{marginLeft:10}}
                initialNumToRender={8}
                windowSize={4}
                data={SubCategory}
                keyExtractor={({id}, index) => index}
                renderItem={({ item }) => {
                return <Demo data={item} />;
                
                }}/>
     
    {/* </View> */}
    </Neumorphism>
    <View
        style={{
            marginTop:2,
            marginLeft:1,
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