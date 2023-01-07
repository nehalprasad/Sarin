import React, { useEffect, useState } from 'react';
import { 
  FlatList, 
  Text, 
  View, 
  StyleSheet, 
  ActivityIndicator, 
  Image, 
  TouchableOpacity, 
  Alert, 
  Dimensions,
  SafeAreaView } from 'react-native';
  import AsyncStorage from "@react-native-async-storage/async-storage";
  const{width, height} = Dimensions.get('window')
  import { RFValue } from 'react-native-responsive-fontsize';
  import { Dropdown } from 'react-native-element-dropdown';
  import Neumorphism from 'react-native-neumorphism';



const CartList = ({navigation, route}) => {

const [cartDetails , setCartDetails] = useState([])
const [price, setPrice] = useState()
const[isLoading, setLoading] = useState(true)
const [state, setState] = useState({});



const Data = async () => {


  const jsonValue = await AsyncStorage.getItem('UserToken')

  // console.log("UserToken")

  const json = JSON.parse(jsonValue)
  // console.log(json)
  // console.log(json)

  const userId = await AsyncStorage.getItem('UserId')

    // console.log("User id")
    // console.log(userId)

  // console.log(json)




  const cartHash = await AsyncStorage.getItem("CartHash")

  // console.log("User Cart Hash")
  // console.log(cartHash)

  var axios = require('axios');

  var config = {
    method: 'get',
    url: 'https://test.sarinskin.com/wp-json/cocart/v2/cart',
    headers: { 
      'Authorization': `Bearer ${json}`, 
      'Cookie': `woocommerce_cart_hash=${cartHash}; woocommerce_items_in_cart=1;`
    }
  };
  
   axios(config)
  .then(result => {
  //  console.log("data")
    // console.log(JSON.stringify(result.data.item_count))

    const cart = JSON.stringify(result.data.item_count) 
    // console.log(cart)

    AsyncStorage.setItem('CartQuantity', cart)

     setCartDetails(result.data.items)
     setPrice(result.data.totals)
     setLoading(false)
   
  })
  .catch((error) => {
    console.log(error);
  });
}


useEffect(()=> {
  Data();

  return () => {
    setState({}); // This worked for me
  };
  
},[])



const final_data = cartDetails

if(isLoading==true){
  return(
    <View  style={{
      flex: 1,
      justifyContent: "center", 
      backgroundColor:'white'
    
  }}>
    <Neumorphism
    lightColor={'#dedddd'}
    darkColor={'#979797'}
    shapeType={'flat'}
    radius={50}
    style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
      <View style={{marginTop:6}}>
      <ActivityIndicator size="large" color="#57c3c4" />
      </View>
    
    </Neumorphism>
    
  </View>
  )
}
else{
  
// console.log(price)

if (final_data==0){
  return(
    <View style= {{
                  backgroundColor:'white', 
                  height,
                  width,
                  justifyContent:'center',
                  alignItems:'center'
                  }}> 
    <Text style={{
                  fontSize:RFValue(25, height),  
                  fontFamily:'Quicksand-Bold',
                  color:'#57c3c4', 
                  marginTop:'-25%', 
                  }}>No items in the cart</Text>
    </View>
  )
}
else{



const Demo = ({data}) => {

  let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
     //   intiialize src with blank, if image not found it will set blank or default url
           if (data.featured_image.length > 0) {
        //    console.log("src = " + data.featured_image[0].src);
          src = data.featured_image;
        }
 

          const onRemoveHandler = async (event) => {


          const jsonValue = await AsyncStorage.getItem('UserToken')

          // console.log("UserToken")

          const json = JSON.parse(jsonValue)
  // console.log(json)

          var axios = require('axios');
        
          var config = {
            method: 'delete',
            url: `https://test.sarinskin.com/wp-json/cocart/v2/cart/item/${data.item_key}`,
            headers: { 
              'Authorization': `Bearer ${json}`
            }
          };
          
          // console.log(config.url)
          axios(config)
          .then((response) =>  {
          //  Alert.alert("item Removed")
          //  console.log("item Removed");
            navigation.replace("AddToCart" , )

          })
          .catch((error) => {
            console.log(error);
          });
         
        }
        

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



// const onChangeQtyHandler = (item) => {
//   // setqty(item.label);
// 


// };

const onChangeQtyHandler = async (item) => {

  // console.log(item.label)

  const jsonValue = await AsyncStorage.getItem('UserToken')

  // console.log("UserToken")

  const json = JSON.parse(jsonValue)
// console.log(json)

// console.log(data.item_key)
  var axios = require('axios');

  var config = {
    method: 'post',
    url: `https://test.sarinskin.com/wp-json/cocart/v2/cart/item/${data.item_key}/?quantity=${item.label}`,
    headers: { 
      'Authorization': `Bearer ${json}`
    }
  };
  
  // console.log(config.url)
  axios(config)
  .then((response) =>  {
  //  Alert.alert("item Removed")
  //  console.log("item Removed");
    navigation.replace("AddToCart" , )

  })
  .catch((error) => {
    console.log(error);
  });
 
}


const renderLabel = () => {
  if (value || isFocus) {
    return (
      <Text></Text>
    );
  }
  return null;
};
        

       // console.log(data.item_key)
  return(
    
      <View>
      <View style={{
                    height:height/6.5,
                    borderColor:'black',
                    marginLeft:10,
                    marginRight:10,
                    flexDirection:'row',
                    marginTop:5,
                    borderBottomWidth:0.20,
                  }}>
         
            <Image 
                  style={{
                          resizeMode:'contain',
                          width:width/3.5, 
                          height:height/7,
                          borderWidth:1,
                          borderRadius:100,
                          backgroundColor:'green'
                      }}
                  source={{uri: src}}/>
           
             <View 
                  style={{height:height/7}}>
                <View style={{flexDirection:'row', marginLeft:'10%'}}>
                <Text
                    numberOfLines={1}
                   style={{
                            marginTop:5,
                            justifyContent:'space-between',
                            alignContent:'center',
                            fontSize:RFValue(19, height),
                            color:'black',
                            width:width/1.7,
                            height:height/28,
                            paddingLeft:5,
                            fontFamily:'Montserrat-SemiBold',
                            // borderWidth:0.2
                        }}>
                    {data.name}
                </Text>
                
                
              </View>
            <View style={{marginLeft:'10%', marginTop:'3%'}}>
             <Text
             style={{
                    color:"black",
                    width:width/1.7,
                    paddingLeft:5,
                    fontSize:RFValue(18, height),
                    fontFamily:'Montserrat-ExtraBold',
                    letterSpacing:1
                    }}
             >Rs :-  
             { data.price.slice(-6,-2)}.00
             </Text>
             <View style={{
                            flexDirection:'row', 
                            justifyContent:'center' , 
                            marginRight:'12%', 
                            marginTop:'5%'
                          }}>
              <View style={{
                            width:width/2.7, 
                            // borderWidth:2
                            marginLeft:'-2%'
                            }}>
              {renderLabel()}
                    <Dropdown
                      fontFamily='Kanit-Black'
                      style={[style.dropdown, isFocus && { borderColor: 'blue' }]}
                      placeholderStyle={style.placeholderStyle}
                      selectedTextStyle={style.selectedTextStyle}
                      containerStyle={{width:width/7}}
                      iconStyle={style.iconStyle}
                      data={Quantity}
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? `${data.quantity.value}` : '...'}
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
        
        <TouchableOpacity 
                style={{
                        // borderWidth:2,
                        width:width/5, 
                        alignItems:'flex-end'
                      }}
                onPress={onRemoveHandler}
               //   onPress={() =>  console.log('Id : ' + data.item_key )}
                >
                <Image
                  style={{
                          height:height/32,
                          width:width/14,
                        }}
                  source={require('../image/delete.png')               
                 } 
                />
                </TouchableOpacity>
             </View>
             </View>
             </View>
             </View>
           </View>
     
        
)}   //end of render

return (  // Start of View point in ScrollView
<>
<View style={{
              height:height-70,
              backgroundColor:'white'
              }}>
                <View style={{marginBottom:20}}>
            <Text style={{
                            fontSize:RFValue(42, height),
                            color:'#57c3c4', 
                            marginLeft:10,
                            height:height/19,
                            fontFamily:'Montserrat-SemiBold'
                        }}>Cart</Text>
                        </View>
    <FlatList
    // style={{backgroundColor:'white', }}
      data={final_data}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => {
          return <>
          <Demo data={item} />
          </>;
      }}
    />
   
   <View style={{
                // marginBottom:'14%'
                marginTop:10,
                flexDirection:'row',
                height:height/9,
                backgroundColor:'#eeeeee',
                justifyContent:'center',
                alignItems:'center'
                }}>


    <View style={{
                width:width/2,
                marginLeft:5,
                flexDirection:'column',
                // borderWidth:1
                }}>
                  
      <View style={{flexDirection:'row'}}>
            <Text style={{
                          fontSize:RFValue(18, height),
                          fontFamily:'Montserrat-Regular', 
                          color:'black'
                          }}> Rs: {price.subtotal.slice(-6,-2)}.00 </Text>
            
            <Text style={{
                          fontFamily:'Montserrat-Regular',
                          fontSize:RFValue(18, height),
                          color:'black'
                          }}> + Rs: {price.shipping_total.slice(-6,-2)}.00 </Text>

      </View>

      <Text
            style={{
                    textAlign:'center', 
                    fontFamily:'Montserrat-LightItalic',
                    color:'black', 
                    fontSize:RFValue(14, height)
                    }}
            >(Shipping Charge)</Text>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:'4%'}}>
          <Text style={{
                        fontSize:RFValue(20, height),
                        fontFamily:'Montserrat-Bold',
                        color:'black'
                        }}> Total: </Text>
          <Text style={{
                    fontSize:RFValue(18, height),
                    fontFamily:'Montserrat-Regular',
                    color:'black',
                    paddingTop:'1%'
                    }}> Rs: {price.total.slice(-7,-2)}.00 </Text>

      </View>
     
    </View>
      <TouchableOpacity 
                        onPress={() => navigation.navigate('BuyNow',
                        {cartDetails:cartDetails,
                          price:price
                        } 
                      )}>
                       
         <View style= {{  
                            width:width/2-20,
                            // marginLeft:10,
                            marginTop:'3%',
                            backgroundColor:'#57c3c4',
                            borderRadius:25,
                            height:height/14, 
                            alignItems:'center', 
                            justifyContent:'center',
                            marginBottom:10,
                            flexDirection:'row'
                          }}>
         <Text  style={{ 
                        fontSize:RFValue(16, height), 
                        color:'white',
                        textAlign:'center',
                        alignSelf:'center',
                        justifyContent:'center',
                        fontFamily:'NanumGothic-ExtraBold',
                        letterSpacing:1
                        }} >CHECKOUT</Text>
          <Image
                style={{
                        height:30,
                        width:30,
                        marginLeft:'8%',
                        tintColor:'white'
                      }}
                source={require('../image/forwardarrow.png')}
                />   
                               </View>
         
         
       </TouchableOpacity>
       </View>
    
    </View>
</>

       


);
}
}
}
const style = StyleSheet.create({
  card: {
  height:height/6.5,
  borderColor:'black',
  marginLeft:10,
  marginRight:10,
  flexDirection:'row',
  marginTop:5,
  borderBottomWidth:0.20,
  },
  heading:{
      marginTop:5,
      justifyContent:'space-between',
      alignContent:'center',
      fontSize:RFValue(19, height),
      color:'black',
      width:width/1.7,
      height:height/28,
      paddingLeft:5,
      fontFamily:'Montserrat-Regular',
      // borderWidth:0.2
  },
  image:{
      resizeMode:'contain',
      width:width/3.5, 
      height:height/7,
      borderWidth:1,
      borderRadius:100,
      backgroundColor:'green'
  },
price:{
  color:"black",
  width:width/1.7,
  paddingLeft:5,
  fontSize:RFValue(17, height),
  fontFamily:'Montserrat-SemiBold',
  // borderWidth:0.8,
},
quantity:{
  color:"black",
  // width:width/1.7,
  paddingLeft:5,
  fontSize:RFValue(17, height),
  fontFamily:'Montserrat-Regular',
  // borderWidth:0.8,
},

final:{
  marginLeft:10,
  height:"6%",
  borderColor:'black',
  borderWidth:2,
  borderRadius:4,
  marginLeft:10,
  marginRight:10,
  flexDirection:'row',
},
finalprice:{
  fontSize:20,
  backgroundColor:'#646FD4',
  color:'black'
},
buy:{
  color:'black',
  marginLeft:10,
  marginRight:10,
  marginTop:5,
  marginBottom:20,
  borderWidth:1,
  backgroundColor:'#82DBD8'
},
proceed:{
  fontSize:26,
  marginLeft:5,
  marginTop:8,
  height:40,
  fontWeight:'bold',
  textAlign:'center',
  color:'black'
  
},
Amt:{
  fontSize:20,
  fontWeight:'bold',
  marginLeft:30,
  marginTop:7,
  color:'black'

},
remove1:{
  // marginLeft:
},

remove:{

},




dropdown: {
  height: 30,
  width:width/5,
  borderColor: 'gray',
  borderWidth: 2,
  borderRadius: 8,
  paddingHorizontal: 8,
  // marginTop:4,
  // marginLeft:"13%"
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

export default CartList;


