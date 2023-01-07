import {View,
        Text, 
        Image, 
        StyleSheet, 
        ScrollView, 
        Button, 
        Alert, 
        Dimensions,
        TextInput,
        TouchableHighlightBase,
        TouchableHighlight,
        ActivityIndicator
        } from 'react-native';

import React,{useState} from 'react';
import ImageZoom from 'react-native-image-pan-zoom';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const {width, height} = Dimensions.get('window')

const ProductDetails = ({navigation, route}) =>  {

const [qty, setqty] = useState('1');

const product_details = route.params;
// console.log(JSON.stringify(product_details))


// For Quantity

const Quantity = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    if (value || isFocus) {
      return (
        <Text></Text>
      );
    }
    return null;
  };



//   Rest

const onChangeQtyHandler = (item) => {
    setqty(item.label);
    // console.log(item.label)
};



const onCartHandler = async (event) => {
  
    // console.log(qty)
    // console.log(product_details.id)

    const jsonValue = await AsyncStorage.getItem('UserToken')

    const json = JSON.parse(jsonValue)

    var axios = require('axios');

    var config = {
      method: 'post',
      url: `https://test.sarinskin.com/wp-json/cocart/v2/cart/add-item?id=${product_details.id}&quantity=${qty}`,
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
      Alert.alert("Added to Cart")

      // Working();
      console.log("news")

    })
    .catch((error) => {
      console.log(error);
    });

};


let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
         // intiialize src with blank, if image not found it will set blank or default url
           if (product_details.images.length > 0) {
        //    console.log("src = " + product_details.images[0].src);
          src = product_details.images[0].src;
        }

        // To remove html Tags
        
        const regex = /(<([^>]+)>)/ig;

if(product_details.stock_status =="outofstock"){
  return(
    <ScrollView>
     {/* <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]} > */}
         <View style={{
                      backgroundColor:'white',
                      height:height*1.4
                    }}>
                 <ImageZoom 
                         cropWidth={width}
                         cropHeight={height/1.8}
                         imageWidth={width+10}
                         imageHeight={height/1.8}
                         // style={style.image}
                         >
                     <Image 
                         source={{uri: src}}
                         style={style.image}/>
                 </ImageZoom>
             <Text
                 numberOfLines={2}
                 style={style.name}>
                 {product_details.name}</Text>
                 <View style={{
                              flexDirection:'row',
                              marginTop:5
                              }}>
                    <Text
                          style={style.rupee}>
                          Rs :-</Text>

                    <Text
                          style={style.price}>
                          {product_details.price}.00</Text>
                 </View>
             <Text 
                 style={style.desc}>
                 PRODUCT DETAILS 
             </Text>
             <View style={style.descBox}>
                 <Text style={style.description}>
                     {product_details.description= product_details.description.replace(regex, '')}
                 </Text>
             </View>
             
             
             </View>
         {/* </LinearGradient> */}
     </ScrollView>
  )
}
else{
  return(
    <ScrollView>
     {/* <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]} > */}
         <View style={style.card}>
                 <ImageZoom 
                         cropWidth={width}
                         cropHeight={height/1.8}
                         imageWidth={width+10}
                         imageHeight={height/1.8}
                         // style={style.image}
                         >
                     <Image 
                         source={{uri: src}}
                         style={style.image}/>
                 </ImageZoom>
                <Text
                 numberOfLines={2}
                 style={style.name}>
                 {product_details.name}</Text>

                 <View style={{flexDirection:'row', marginTop:'2%'}}>
                 <Text
                 style={style.rupee}>
                 Rs. </Text>
                 <Text
                 style={style.price}>
                    {product_details.price}.00</Text>
                 </View>
            
             <Text 
                 style={style.desc}>
                 Product Details
             </Text>
             <View style={style.descBox}>
                 <Text style={style.description}>
                     {product_details.description= product_details.description.replace(regex, '')}
                 </Text>
             </View>
             
             
             </View>
             <View style={{backgroundColor:'white'}}>

            
             <View
                 style={style.fixToText}>
 
 <TouchableHighlight
   onPress={onCartHandler}
   style={{
           borderWidth:0.001,
           marginLeft:'-14%',
           borderRadius:10,
           backgroundColor:'#57c3c4',
           marginBottom:20,
           width:width/2.4,
           height:height/14,
           justifyContent:'center',
           alignItems:'center'
           }}>
     <Text   style={style.add}>
     Add to Cart
     </Text>
 </TouchableHighlight>
 
         {renderLabel()}
         <Dropdown
           fontFamily='Kanit-Black'
           style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
           placeholderStyle={style.placeholderStyle}
           selectedTextStyle={style.selectedTextStyle}
           containerStyle={{width:width/7,}}
           iconStyle={style.iconStyle}
           data={Quantity}
           maxHeight={300}
           labelField="label"
           valueField="value"
           placeholder={!isFocus ? 'Quantity' : '...'}
           value={value}
           onFocus={() => setIsFocus(true)}
           onBlur={() => setIsFocus(false)}
           onChange={item => {
             onChangeQtyHandler(item)
             setValue(item.value);
             setIsFocus(false);
           }}
         />
         </View>
         <TouchableHighlight
                 onPress={() => navigation.navigate("AddToCart")}
                 style={{
                 // borderWidth:0.001,
                 borderRadius:10,
                 backgroundColor:'#57c3c4',
                 marginBottom:20,
                 width:width/2.5,
                 height:height/14,
                 marginLeft:'32%',
                 justifyContent:'center',
                 alignItems:'center'
                 }}>
     <Text   style={style.buy}>
     Go to Cart
     </Text>
 </TouchableHighlight>
 </View>
         {/* </LinearGradient> */}
     </ScrollView>
 )}
 
}



const style = StyleSheet.create({
    card: {
      backgroundColor:'white',
    },
    descBox:{
        textAlign:'center',
        width:width-20,
        marginLeft:15,
        justifyContent:'space-around',

    },
    name:{
        color:"black",
        fontSize:RFValue(22, height),
        // marginTop:5,
        width:width-20,
        marginLeft:10,
        fontFamily:'NanumGothic-Bold',
        // textAlign:'center'
    },
    price:{
        color:"black",
        fontSize:RFValue(24, height),
        fontFamily:'NanumGothic-ExtraBold',
        // textAlign:'center',
        // width:width-20,
        marginLeft:10,
        justifyContent:'space-between',
    },
    rupee:{
      color:"black",
      fontSize:RFValue(24, height),
      fontFamily:'NanumGothic-Bold',
      marginLeft:10,
      justifyContent:'space-between',
  },

    image:{
      borderWidth:50,
      height:height/1.8,
        marginLeft:10,
        resizeMode:'contain'
    },
    desc:{
        marginTop:12,
        fontSize:RFValue(24, height),
        fontFamily:'NanumGothic-ExtraBold',
        color:'black', 
        marginLeft: 10
    },
    description:{
        color:"black",
        fontSize:RFValue(18, height),
        fontFamily:'SimpleLineIcons',   
        justifyContent:'space-between',
        marginLeft:-5,
        // marginTop:10,
        letterSpacing:1.5
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignContent:'center',
        marginLeft:60,
        marginRight:70,
        marginTop:5,
        // marginBottom:20,   
        backgroundColor:'white' 
      },
    add:{
      color:'white',
      fontSize:RFValue(24, height),
      justifyContent:'space-evenly',
      fontFamily:'NanumGothic-Regular',
      },
    buy:{
      color:'white',
      fontSize:RFValue(24, height),
      justifyContent:'space-evenly',
      fontFamily:'NanumGothic-Regular',
      },



      dropdown: {
        height:height/16,
        width:width/3,
        marginLeft:'8%',
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'pink',
        left: 35,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color:'#57c3c4'
      },
      placeholderStyle: {
        fontSize:RFValue(16, height),
        color:'#57c3c4', 
        fontWeight:'bold'

      },
      selectedTextStyle: {
        paddingLeft:'35%',
        color:'green',
        fontSize:RFValue(20, height),
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,color:'red'
      },
    
})
export default ProductDetails;
