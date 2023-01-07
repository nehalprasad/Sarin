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
        Dimensions,
        PermissionsAndroid 
      } from 'react-native';
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Neumorphism from 'react-native-neumorphism';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('screen')
export default function OrderedProductInfo({navigation, route}) {
const [isLoading, setLoading] = useState(true)
const [dataSource, setDataSource] = useState({})
const [state, setState] = useState({});
const orderId = route.params


  const OrderInfo = async() => {
          
    const id = orderId.id
        
          const jsonValue = await AsyncStorage.getItem('UserToken')
        
              // console.log("UserToken")
            
              const json = JSON.parse(jsonValue)

              const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

              const adminToken = JSON.parse(jsonValue1)
      
              // console.log("adminToken")
              // console.log(adminToken)
      


          var axios = require('axios');
        
          var config = {
            method: 'get',
            url: `https://test.sarinskin.com/wp-json/wc/v3/orders/${id}`,
            headers: { 
              'Authorization': `Bearer ${adminToken}`, 
            }
          };
          
        await axios(config)
          .then((response) => {

            setDataSource(response.data)
            // console.log(JSON.stringify(response.data))
            setLoading(false)
          })
          .catch((error) => {
            console.log(error);
          });
        }

        useEffect(() => {

          


                OrderInfo()

                return () => {
                  setState({}); // This worked for me
                };

          },[])
  


        if(isLoading == true){
           return (
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
        else{

 // Total Cart Amount

   const total_price = dataSource.total

// // console.log(JSON.stringify(this.state.dataSource))


   const final_data  = dataSource.line_items;
          // console.log(final_data)
const Demo = ({data}) => {


  
      let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
     
      return(
        <TouchableOpacity 
        style={{
         
        }}>
        <View 
         style={{
                  backgroundColor:'#57c3c4',
                  borderRadius:10,
                  // height:height/7.4,
                  marginBottom:10 ,
                  width:width-10,
                  // borderWidth:1,
                  marginLeft:5,
                  marginTop:"3%",
                  marginBottom:5
                }}>
      
        {/* Data */}
          <View style={{
                  width:width-35,
                  marginLeft:10,}}>
            
              <Text style={{
                            marginLeft:5,
                            fontFamily:'Quicksand-Bold',
                            fontSize:RFValue(17, height),
                            marginTop:2,
                            // fontWeight:'bold',
                            letterSpacing:2, 
                            color:'black'
                          }}>
                            Product Name:- <Text
                                                style={{
                                                  marginLeft:5,
                                                  fontSize:RFValue(17, height),
                                                  fontWeight:'bold',
                                                  letterSpacing:2,  
                                                  fontFamily:'NanumGothic-Regular',
                                                  color:'white'}}
                                            >{data.name}</Text>
             
              
              </Text>
              <Text 
                 style=
                     {{
                      marginLeft:5,
                      fontFamily:'Quicksand-Bold',
                      fontSize:RFValue(17, height),
                      marginTop:2,
                      // fontWeight:'bold',
                      letterSpacing:2, 
                      color:'black'
                      }}
              >
                Rs -: 
                      <Text
                            style={{
                                    marginLeft:5,
                                    fontSize:RFValue(17, height),
                                    fontWeight:'bold',
                                    letterSpacing:2,  
                                    fontFamily:'NanumGothic-Regular',
                                    color:'white'}} >{data.price}.00</Text>
             
              </Text>
              <View style={{flexDirection:'row'}}> 
                  <Text 
                        style=
                              {{
                                // marginLeft:5,
                                fontFamily:'Quicksand-Bold',
                                fontSize:RFValue(17, height),
                                marginTop:2,
                                marginBottom:5,
                                // fontWeight:'bold',
                                // letterSpacing:2, 
                                color:'black'
                              }}
                                > Quantity -: 
                  </Text>
                  <Text
                            style={{
                                    marginTop:2,
                                    marginLeft:5,
                                    fontSize:RFValue(17, height),
                                    fontWeight:'bold',
                                    letterSpacing:2,  
                                    fontFamily:'NanumGothic-Regular',
                                    color:'white'}} >{data.quantity}
                  </Text>
              </View>
             
              
        </View>
      
      {/* </View> */}
     
        </View> 
          </TouchableOpacity>

            
)}   //end of render

return (  // Start of View point in ScrollView
  <SafeAreaView>
        <FlatList
        style={{backgroundColor:'white', height:'100%'}}
          data={final_data}
          keyExtractor={({ id }, index) => id}

          ListFooterComponent = {
            <TouchableOpacity 
            style={{
              borderColor:'black',
              // color:'green',
              width:width-10,
              borderRadius:5,
              marginLeft:5,
              // marginRight:10,
              marginTop:'5%',
              marginBottom:20,
              borderWidth:0.2,
              backgroundColor:'#ffffff',
              height:height/12

            }}>
               
               <Text
               style=
               {{
                fontSize:20,
                marginLeft:5,
                marginTop:7,
                color:'black',
                fontFamily:'NanumGothic-ExtraBold',
                textAlign:'center',
                letterSpacing:2,
                // paddingBottom:'8%'
               
              }}>Total Order Amount :-</Text>
              
              <Text
               style=
               {{
                fontSize:20,
                marginLeft:5,
                // marginTop:7,
                color:'#57c3c4',
                //height:height/5,
                fontFamily:'Quicksand-Bold',
                // fontWeight:'bold',
                textAlign:'center',
                letterSpacing:2,
                // paddingBottom:'8%'
               
              }}>Rs:{total_price}</Text> 
               
             </TouchableOpacity>
            }
          renderItem={({ item }) => {
              return <Demo data={item} />;
          }}
        />
        </SafeAreaView>
           
);
  }}

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

    