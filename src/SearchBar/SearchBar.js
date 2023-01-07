import React, { useEffect, useState } from "react";
import { StyleSheet, 
    Text, 
    View, 
    FlatList, 
    Dimensions, 
    Image, 
    TextInput, 
    SafeAreaView, 
    TouchableOpacity,
    BackHandler, Alert
     } from "react-native";
import { Searchbar } from "react-native-paper";
import { RFValue } from 'react-native-responsive-fontsize'
import AsyncStorage from "@react-native-async-storage/async-storage";
const {width, height} = Dimensions.get('window')

export default function SearchOptions({navigation, route}) {

    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const [searchTimer, setSearchTimer] = useState(null);
    const [state, setState] = useState({});

    
  

    
    async function fetchData(text) {
        var axios = require('axios');

        const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
  
      const adminToken = JSON.parse(jsonValue1)
    
    var config = {
      method: 'get',
      url: `https://test.sarinskin.com/wp-json/wc/v3/products?search=${input}&per_page=100`,
      headers: { 
        'Authorization': `Bearer ${adminToken}`
      }
    };
    
    axios(config)
    .then(function (response) {
        // console.log("data")
        // console.log(JSON.stringify(response.data))
        setResults(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
        }


        useEffect(() => {


            fetchData()
    
            const backAction = () => {
            //   Alert.alert("Hold on!", "Are you sure you want to go back?", [
            //     {
            //       text: "Cancel",
            //       onPress: () => null,
            //       style: "cancel"
            //     },
            //     { text: "YES", onPress: () =>  null }
            //   ]);
            //   return true;
            };
        
            const backHandler = BackHandler.addEventListener(
              "hardwareBackPress",
              backAction
            );
        
           
    
            return () => {
                backHandler.remove();
                setState({}); // This worked for me
              };
          }, []);



// const Demo = ({data}) => {

// // console.log("start")
// // console.log(data)
// // console.log("end")

// if(data){

//         return(
//                     <TouchableOpacity
//                                     style={{backgroundColor:'white'}}
//                                     onPress={() => navigation.navigate('ProductsDetails',
//                                     data)}
//                                         // onPress={() =>  alert('Id : ' + item.name )}
//                         >
//                         <View style={{
//                                     flex:1,
//                                     flexDirection:"row", 
//                                     borderWidth:0.2,
//                                     width:width-10, 
//                                     height:height/12,
//                                     marginLeft:5, 
//                                     marginTop:5, 
//                                     backgroundColor:'white',
//                                     borderColor:'black',
//                                     justifyContent:"center",
//                                     alignItems:'center'
//                                     }}>
//                         <Image 
//                         style={{ height:height/12.5, 
//                                 width:width/4,
//                             resizeMode:'contain'}}
//                         source={{uri: data.images[0].src}}/>
//                         <Text numberOfLines={2}
//                                 style={{
//                                     fontFamily:'NanumGothic-Regular',
//                                     fontSize:RFValue(18,height), 
//                                     paddingTop:7, 
//                                     marginLeft:5, 
//                                     width:width/1.42,
//                                     textAlign:'center',
//                                     // borderWidth:.2,
//                                     backgroundColor:'white',
//                                     color:'#57c3c4' 
//                                     }}>{data.name}</Text>
//                         </View>
//                     </TouchableOpacity>   
//         )
// }
// else{
//     return(
//         <View style={{
//                     alignItems:'center', 
//                     justifyContent:'center',
//                     backgroundColor: 'white',}}>
//         <Text style={{
//                     fontSize:RFValue(25, height), 
//                     fontFamily:'Kanit-SemiBold'
//                     }}>No Such products</Text>
//         </View>
//     )
// }
// }

  const Demo = ({data}) => {

      // console.log(JSON.stringify(data.stock_quantity))
  
      // console.log(data.stock_status)

if(data.stock_status == "outofstock"){
      return(
        <>
    
    <View style={{
          width:width/2-10,
          borderWidth:0.2,
          marginBottom:1,
          height:height/3.5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
          borderRadius:5,
          marginTop:'0.5%',
          marginLeft:5
          }} > 
    <TouchableOpacity
                          // disabled={true}
                          activeOpacity={0.5}
                          onPress={() => navigation.navigate('ProductsDetails',
                                         data)}>
      {/* <Neumorphism  style={{
      width:width/2-25,
      // borderWidth:1,
      marginLeft:'8%',
      marginTop:'2%',
      marginBottom:'4%',
      backgroundColor:'#ffffff95',
      borderRadius:25,
      }}> */}
      <View style={{ justifyContent:'center',}}>
      <Image
                style={{
                  height:height/6,
                  borderRadius:15,
                  resizeMode:'contain',
                  borderRadius:50,
                  width:width/2-35,
                  marginLeft:10
                }}
              source={{
               uri: data.images[0].src,
                        }}     
              />
                 <Text style={{
                        color:'#57c3c4',
                        position: 'absolute',
                        bottom:"54%",
                        left:'15%',
                        
                        backgroundColor:'#ffffff99',
                        fontFamily:'Quicksand-Bold',
                        fontSize:RFValue(20, height),
                        alignSelf:'center',
                 }}>
                    Out of Stock 
                 </Text>
                 <Text 
                    numberOfLines={2}                  
                    style={{
                            color:'black',
                            fontSize:RFValue(18, height), 
                            fontFamily:'Quicksand-Regular',
                            paddingLeft:10,
                            // borderWidth:1,
                            width:width/2-15,
                          }}
                  >{data.name}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
                     
                       
                    </View> 
      {/* </Neumorphism> */}
      </TouchableOpacity>
    </View>  
    
  
    </>
      )

}else {
  return(
    <>
    <View style={{
          width:width/2-10,
          borderWidth:0.2,
          marginBottom:1,
          height:height/3.5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
          borderRadius:5,
          marginTop:'.5%',
          marginLeft:5
          }} > 
    <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('ProductsDetails',
                                         data)}>
      {/* <Neumorphism  > */}
      <View style={{ }}>
            <Image
                style={{
                        height:height/6,
                        borderRadius:15,
                        resizeMode:'contain',
                        borderRadius:50,
                        width:width/2-25,
                        marginLeft:10
                      }}
                 source={{
                     uri: data.images[0].src,
                              }}            
            />
                  <Text 
                    numberOfLines={2}                  
                    style={{
                            color:'black',
                            // height:height/12.3,
                            fontSize:RFValue(18, height), 
                            // marginBottom:15,
                            fontFamily:'Quicksand-Regular',
                            // marginRight:5,
                            paddingLeft:10,
                            width:width/2-10,
                            // textAlign:'center',
                            // borderWidth:1
                          }}
                  >{data.name}</Text>
      </View>
      <View style={{
                    flexDirection:'row',
                    // borderWidth:0.2,
                    paddingLeft:10,
                    width:width/2-10,
                      }}>
                      <Image
                      style={{ 
                        height:height/35.5, 
                        width:20, 
                        // marginLeft:10,
                        // paddingLeft:10,
                        marginTop:4,
                        marginLeft:8,
                        position:'absolute'
                      }}
                       source={require('../image/ruppee.png')}/>
        <Text style={{
                          color:'black',
                          //  height:height/20,
                          fontFamily:'Quicksand-SemiBold',
                          marginRight:5,
                          marginLeft:20,
                          textAlign:'center',
                          fontSize:RFValue(18, height), 
                          marginBottom:10
                       }}
                        >{data.price}.00</Text>
                       <View>
                      
                       </View>
                       
                    </View> 
      {/* </Neumorphism> */}
      </TouchableOpacity>
    </View>  
    
  
    </>
  )
}
  
  }









    return (
        <View style={{backgroundColor:'white', height}}>
            <Text style={{
                            fontSize:RFValue(42, height),
                            color:'#57c3c4', 
                            marginLeft:10,
                            fontFamily:'Montserrat-SemiBold'
                        }}>Search</Text>
            <View
                    style={{
                            flexDirection:'row',
                            width:width-40,
                            marginLeft:20,
                            marginTop:'5%',
                            justifyContent:'center',
                            alignItems:'center',
                            marginBottom:20
                            }}>
                    <TextInput
                        inlineImageLeft="search"
                        
                        style={{
                                flex: 1,
                                paddingLeft:80,
                                backgroundColor:'#95878750',
                                borderRadius:25,
                                fontFamily:'Montserrat-SemiBold',
                                fontSize:RFValue(18, height)
                                }}
                        autoCorrect={false}
                        // secureTextEntry
                        placeholder="  Search Products"
                        importantForAutofill ="yes"
                        placeholderTextColor={"black"}
                        onPress={() => getItem(item)}
                        onChangeText={(text) => {
                            if (searchTimer) {
                                clearTimeout(searchTimer);
                            }
                            setInput(text);
                            setSearchTimer(
                                setTimeout(() => {
                                    fetchData(text);
                                }, 1000),
                            );
                        }}
                        value={input}
                        />
                    </View>
                    <FlatList
                            numColumns={2}
                            style={{marginBottom:60}}
                            data={results}
                            renderItem={({ item }) => {
                                return <Demo data={item} />;
                            }}
                            keyExtractor={(item) => "" + item.id}
            />
        </View>









    //     <View style={{ backgroundColor:'white'}}>
    //      <TouchableOpacity
    //      onPress={() => navigation.navigate("Home")}>
    //      <Image
    //          style={{height:45, width:35, marginLeft:5, resizeMode:'contain', marginTop:10,}}
    //          source= {require('../image/back.png')}/>
    //      </TouchableOpacity>
   
    //     <View style={{marginTop:50, flexDirection:'row'}}>
    //         <Image
    //                 style={{
    //                         height:20, 
    //                         width:20,
    //                         position: 'absolute',
    //                         left:160,
    //                         top:23,
    //                         tintColor:'grey '
    //                     }}
    //                  source={require('../image/search.png')}
    //                 />
    //      <TextInput
    //      style={{
    //             height:45,
    //             borderWidth:0.2, 
    //             marginTop:10, 
    //             width:width-47, 
    //             fontSize:RFValue(20, height), 
    //             // marginLeft:2,
    //             color:'#57c3c4', 
    //             // textAlign:'center'
    //             // paddingLeft:'50%',
    //             borderRadius:50,
    //             // backgroundColor:'grey'
    //             }}
    //             placeholderTextColor={"black"}
    //             placeholder="Search for Products"
    //             onPress={() => getItem(item)}
    //             onChangeText={(text) => {
    //                 if (searchTimer) {
    //                     clearTimeout(searchTimer);
    //                 }
    //                 setInput(text);
    //                 setSearchTimer(
    //                     setTimeout(() => {
    //                         fetchData(text);
    //                     }, 1000),
    //                 );
    //             }
    //           }

              
    //             value={input}
    //         /> 
           
    //   </View>
            
    //         <FlatList
    //             style={{marginBottom:60}}
    //             data={results}
    //             renderItem={({ item }) => {
    //                 return <Demo data={item} />;
    //             }}
                
                
    //             keyExtractor={(item) => "" + item.id}
    //         />
    
    // </View>
    
    );
}   

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
