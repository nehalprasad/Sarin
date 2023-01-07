import { 
        View,
        Text,
        FlatList, 
        SafeAreaView,
        StyleSheet,
        TouchableOpacity, 
        Image,
        Dimensions,
        ActivityIndicator
        } from 'react-native'
import React, { useEffect, useState } from 'react'
import Neumorphism from 'react-native-neumorphism';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { RFValue } from 'react-native-responsive-fontsize';

const{height,width} = Dimensions.get('window')

const AllOrders = ({navigation, route}) =>  {
    const[orders, setOrders] = useState();
    const[isLoading, setIsLoading] = useState(true)
const [state, setState] = useState({});
   
// console.log(orders)

const getData = async () => {
  try {

//User Id
const UserId = await AsyncStorage.getItem('UserId')
// console.log("AllOrders")
// console.log(UserId)


//ADmin TOken 

  const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

  const adminToken = JSON.parse(jsonValue1)

  // console.log("adminToken")
  // console.log(adminToken)
  

  var axios = require('axios');

  var config = {
    method: 'get',
    url: `https://test.sarinskin.com/wp-json/wc/v3/orders?customer=${UserId}&per_page=100`,
    headers: { 
      'Authorization': `Bearer ${adminToken}`
    }
  };
  
  axios(config)
  .then((response) => {
    // console.log(JSON.stringify(response.data));
    setOrders(response.data)
    setIsLoading(false)
  })
  .catch((error) => {
    console.log(error);
  });

} catch (error) {
      
}
  
}
    useEffect(() => {
      getData()

      return () => {
        setState({}); // This worked for me
      };

  }, [2000]);

 if(isLoading){
    return(

   
  <View  style={{
    flex: 1,
    justifyContent: "center",
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:'-10%',
    height,
    width,
    backgroundColor:'white'
  
}}>
        <Neumorphism
  lightColor={'#dedddd'}
  darkColor={'#dedddd'}
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
else {



const OrderHistory = (data) => {

  // Order Id
const id = data.data.number

// Price Details
const price = data.data.total

// Payment Status
const status = data.data.status

//Order Date
const order = data.data.date_created

let OrderDate = order.slice(0,10)


// For image

return (
  <TouchableOpacity 
  onPress={() => navigation.navigate('OrderedProductInfo',{
    id:id
  })}>
  <View 
  //  lightColor={'#dedddd'}
  //  darkColor={'#979797'}
  //  shapeType={'flat'}
   style={style.card} >


{/* Header View */}
<View 
style={style.header}
>
<Text 
style={{
  marginLeft:5,
  fontSize:15,
  // marginTop:2,
  fontFamily:'NanumGothic-Bold',
  fontWeight:'bold',
  letterSpacing:2,
  color:'black'
}}>
        Order Id: {id} 
</Text>
</View>

{/* 2nd View */}

<View style={{
  flexDirection:'row'
}}>

  {/* Data */}
  <View
   style={style.dataSection}
   >
      
        <Text style=
        {style.names}
            >
        Amount: {price} 
        </Text>
        <Text 
           style=
           {style.names}
        >
        Payment Status: {status} 
        </Text>
        <Text 
         style=
         {style.names}
        >
        Ordered on:  {OrderDate} 
        </Text>

        
  </View>

</View>


{/* Bottom View */}
<View 
style={style.bottom}
>
</View>
  </View> 
    </TouchableOpacity>
)
}

  return (
<SafeAreaView>
      <FlatList
        style={style.container}
        data={orders}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
            return<OrderHistory data={item} key={item.id} />;
        }}
      />
      </SafeAreaView>
       )
      }
}
// Start of styling
const style = StyleSheet.create({
  container:{
  backgroundColor:'white',
  height:'100%'
  },
  card:{
    height:height/6,
    width:width-10,
    backgroundColor:'#57c3c499',
    borderRadius:2,
    marginLeft:5,
    marginRight:5,
    marginTop:10,
    marginBottom:10,  
  },
 bottom: {
    height:"14%",
    width:'97%',
    marginLeft:5,
    marginRight:5
  },
  names:{
    marginLeft:5,
    fontSize:RFValue(18, height),
    // marginTop:5,
    marginBottom:5,
    // fontWeight:'bold',
    letterSpacing:2,
    color:'black',
    fontFamily:'Quicksand-Regular'
  },
  dataSection:{
    width,
    marginLeft:10,
    marginTop:2
   },
   header:{
    // height:height/4,
    width:'97%',
    marginTop:5,
    marginLeft:5,
    marginRight:5
  }
})
export default AllOrders