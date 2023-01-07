import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import React,{useEffect, useState} from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import Neumorphism from 'react-native-neumorphism';
const {height, width} = Dimensions.get('window')

const Working = () => {
    const [CategoryData, setCategoryData] = useState()
    const [SubCategory1, setSubCategory1] = useState()
    const [SubCategory2, setSubCategory2] = useState()
    const [SubCategory3, setSubCategory3] = useState()
    const [SubCategory4, setSubCategory4] = useState()
    const [state, setState] = useState({});
    const navigation = useNavigation();
const Category = () => {

    var axios = require('axios');

    var config = {
      method: 'get',
      url: 'https://app.sarinskin.com/api/category/',
    };
    
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data));
      setCategoryData(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
}


const subCategory1 = () => {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app.sarinskin.com/api/sub_category/?category=1',
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data.data));
  setSubCategory1(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}

const subCategory2 = () => {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app.sarinskin.com/api/sub_category/?category=2',
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data.data));
  setSubCategory2(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}


const subCategory4 = () => {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app.sarinskin.com/api/sub_category/?category=4',
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data.data));
  setSubCategory4(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}

const subCategory3 = () => {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app.sarinskin.com/api/sub_category/?category=3',
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data.data));
  setSubCategory3(response.data.data)
})
.catch(function (error) {
  console.log(error);
});
}



useEffect(() => {
    Category()
    subCategory2()
    subCategory1()
    subCategory3()
    subCategory4()

    return () => {
      setState({}); // This worked for me
    };
},[])


  return (
   <SafeAreaView style={{
                          marginBottom:'5%', 
                          marginTop:"2%"
                          }}>
     <Text style={{
                    marginLeft:10,
                    fontSize:RFValue(32,height),
                    letterSpacing:2, 
                    marginTop:10,
                    color:'#57c3c4',
                    fontFamily:'Montserrat-Bold',
                    }}>Categories 
                    {/* {'>>'} */}
                    </Text>

    <View style={{
                  flexDirection:'row', 
                  marginTop:10,
                  height:height/1.75,
                  // borderWidth:1
                   }}>

   
    <FlatList 
      style={{
              position:'absolute',
              marginLeft:"1%", 
            }}
      initialNumToRender={4}
      windowSize={3}
      data={CategoryData}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => {
        return(
            <Neumorphism style={{
                                  // marginTop:5, 
                                  // marginLeft:5,
                                  marginBottom:3, 
                                  marginRight:1
                                  }}>
            <View style={{
                        height:height/7.5,
                        width:width/4,
                        justifyContent:'center',
                        alignSelf:'center',
                        alignItems:'center',
                        }}>
        <TouchableOpacity 
                        onPress={() => navigation.navigate("Category")}
                        style={{
                                justifyContent:'center',
                                alignItems:'center'
                              }}>
        <Image
            style={{
                    height:height/14,
                    width:width/7, 
                    borderRadius:5,
                    resizeMode:'contain',
                    borderWidth:1
                }}
            source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
            <View style={{ 
                          width:width/4, 
                          marginTop:4,
                          justifyContent:'center',
                          alignItems:'center'
                        }}> 
                <Text 
                            numberOfLines={2}
                            style={{
                               
                                fontSize:RFValue(10, height),
                                textAlign:'center',
                                color:'black',
                                fontFamily:'Montserrat-Bold',
                            }}>{item.category_name}</Text>
            </View>
            </TouchableOpacity>
            </View>
            </Neumorphism>
        )
              }}
    />
     <View style={{
                  flexDirection:'column',
                  height:height/1.8,
                  width:width/1.8,
                  marginLeft:'28%',
                  justifyContent:'space-between'
                }}>


{/* 1st CategeoriesFlatlist */}

<FlatList
            horizontal={true}
            initialNumToRender={4}
            windowSize={3}
            data={SubCategory1}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
    return(
        <View style={{ 
                        alignItems:'center', 
                        height:height/7,
                        justifyContent:'center', 
                      //  borderWidth:0.2,
                        width:width/5,
                        alignItems:'center',
                        marginTop:'3%'
                    }}>
                      <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate('Products_data',  {
                                                           dataName : item})}
                              >
        <Image 
            style={{
                    height:height/14,
                    width:width/7,
                    alignSelf:'center', 
                    opacity:0.8,
                    // marginLeft:2,
                    borderRadius:100,
                    resizeMode:'contain'
                  }}
            source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
            <View></View>
               <Text 
                        numberOfLines={2}
                        style={{
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                            // top:"34%",
                            }}>{item.sub_category_name}</Text></TouchableOpacity>
            </View>
        
        
    )
          }}
   />

{/* 2nd CategeoriesFlatlist */}
<FlatList
    horizontal={true}
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory2}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                      <View style={{ 
                        alignItems:'center', 
                        height:height/7,
                        justifyContent:'center', 
                      //  borderWidth:0.2,
                        width:width/5,
                    }}>
                      <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate('Products_data',  {
                                                          dataName : item})}
                              >
              <Image 
              style={{
                      height:height/14,
                      width:width/7,
                      alignSelf:'center', 
                      opacity:0.8,
                      // marginLeft:2,
                      borderRadius:100,
                      resizeMode:'contain'
                  }}
              source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
              <View></View>
              <Text 
                        numberOfLines={2}
                        style={{
                            width:width/5, 
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                            }}>{item.sub_category_name}</Text></TouchableOpacity>
              </View>
        
        
    )
          }}
   />


{/* 3rd CategeoriesFlatlist */}

<FlatList
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    horizontal={true}
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory3}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                  <View style={{ 
                                  // marginTop:6,
                                  alignItems:'center', 
                                  height:height/7,
                                  justifyContent:'center', 
                                  // borderBottomWidth:0.2,
                                  // borderRightWidth:0.2,
                                  width:width/5,
                              }}>
                  <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('Products_data',  {
                                                      dataName : item})}
                          >
          <Image 
          style={{
                  height:height/14,
                  width:width/7,
                  alignSelf:'center', 
                  opacity:0.8,
                  // marginLeft:2,
                  borderRadius:100,
                  resizeMode:'contain'
                }}
          source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
          <View></View>
          <Text 
                    numberOfLines={2}
                    style={{
                            // width:width/5, 
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                      // top:"34%",
                        }}>{item.sub_category_name}</Text></TouchableOpacity>
          </View>
        
        
    )
          }}
   />


{/* 4th CategeoriesFlatlist */}
 <FlatList
    // style={{marginLeft:-40}}
    horizontal={true}
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory4}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                  <View style={{ 
                    marginTop:'5%',
                    alignItems:'center', 
                    height:height/7,
                    justifyContent:'center', 
                    // borderBottomWidth:0.2,
                    // borderRightWidth:0.2,
                    width:width/5,
                }}>
                  <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('Products_data',  {
                                                      dataName : item})}
                          >
          <Image 
                style={{
                        height:height/14,
                        width:width/7,
                        alignSelf:'center', 
                        opacity:0.8,
                        // marginLeft:2,
                        borderRadius:100,
                        resizeMode:'contain'
                    }}
                  source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
          <View></View>
          <Text 
                    numberOfLines={2}
                    style={{
                      width:width/5, 
                      marginTop:4,
                      height:height/29,
                      // borderWidth:1,
                      textAlignVertical:'center',
                      fontSize:RFValue(11, height),
                      textAlign:'center',
                      color:'black',
                      fontFamily:'Montserrat-Regular',
                        }}>{item.sub_category_name}</Text></TouchableOpacity>
          </View>
        
        
    )
          }}
   />

    </View>
    <View style={{
                  flexDirection:'column',
                  height:height/2.1,
                  marginLeft:'1%',
                  marginTop:"6%",
                  justifyContent:'space-between'
                }}>
        
        <View style={{
                      // borderWidth:2, 
                      flexDirection:'row'
                      }}>
          
        <Image  
              style ={{
                        height:height/18,
                        width:width/9,
                        tintColor:'black'
                      }}
              source={require('../image/arrow.png')}
              />
        </View>
        <Image  
            style ={{ 
                    height:height/18,
                    width:width/9,
                    tintColor:'black'
                    }}
            source={require('../image/arrow.png')}
            />
        <Image  
              style ={{ 
                        height:height/18,
                        width:width/9,
                        tintColor:'black'
                      }}
              // source={require('../image/arrow.png')}
              />
        <Image  
            style ={{ 
                      height:height/18,
                      width:width/9,
                      tintColor:'black'
                    }}
            source={require('../image/arrow.png')}
            />
    </View>
  
    {/* <View style={{
                    flexDirection:'column', 
                    marginLeft:"25.5%",
                    paddingLeft:'1%', */}
                    {/* }}> */}


  {/* <View>
   <FlatList
            horizontal={true}
            initialNumToRender={4}
            windowSize={3}
            data={SubCategory1}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
    return(
        <View style={{ 
                        alignItems:'center', 
                        height:height/7,
                        justifyContent:'center', 
                      //  borderWidth:0.2,
                        width:width/5,
                        alignItems:'center'
                    }}>
                      <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate('Products_data',  {
                                                           dataName : item})}
                              >
        <Image 
            style={{
                    height:height/12,
                    width:width/6,
                    alignSelf:'center', 
                    opacity:0.8,
                    // marginLeft:2,
                    borderRadius:15,
                    resizeMode:'contain'
                  }}
            source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
            <View></View>
               <Text 
                        numberOfLines={2}
                        style={{
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                            // top:"34%",
                            }}>{item.sub_category_name}</Text></TouchableOpacity>
            </View>
        
        
    )
          }}
   />

</View> */}

   {/* <FlatList
    horizontal={true}
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory2}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                      <View style={{ 
                        alignItems:'center', 
                        height:height/7,
                        justifyContent:'center', 
                      //  borderWidth:0.2,
                        width:width/5,
                    }}>
                      <TouchableOpacity
                              activeOpacity={0.8}
                              onPress={() => navigation.navigate('Products_data',  {
                                                          dataName : item})}
                              >
              <Image 
              style={{
                    height:height/12,
                    width:width/6,
                    alignSelf:'center', 
                    opacity:0.8,
                    // marginLeft:2,
                    borderRadius:15,
                    resizeMode:'contain'
                  }}
              source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
              <View></View>
              <Text 
                        numberOfLines={2}
                        style={{
                            width:width/5, 
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                            }}>{item.sub_category_name}</Text></TouchableOpacity>
              </View>
        
        
    )
          }}
   /> */}
   {/* <View style={{}}> */}
    {/* <FlatList
    // style={{marginLeft:-40}}
    horizontal={true}
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory4}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                  <View style={{ 
                    alignItems:'center', 
                    height:height/7,
                    justifyContent:'center', 
                    borderBottomWidth:0.2,
                    borderRightWidth:0.2,
                    width:width/5,
                }}>
                  <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('Products_data',  {
                                                      dataName : item})}
                          >
          <Image 
          style={{
                height:height/12,
                width:width/6,
                alignSelf:'center', 
                opacity:0.8,
                // marginLeft:2,
                borderRadius:15,
                resizeMode:'contain'
              }}
          source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
          <View></View>
          <Text 
                    numberOfLines={2}
                    style={{
                      width:width/5, 
                      marginTop:4,
                      height:height/29,
                      // borderWidth:1,
                      textAlignVertical:'center',
                      fontSize:RFValue(11, height),
                      textAlign:'center',
                      color:'black',
                      fontFamily:'Montserrat-Regular',
                        }}>{item.sub_category_name}</Text></TouchableOpacity>
          </View>
        
        
    )
          }}
   /> */}
   {/* </View> */}



    {/* <FlatList
    ListFooterComponent={
        <View style={{marginRight:10}}></View>
    }
    horizontal={true}
    initialNumToRender={4}
    windowSize={3}
    data={SubCategory3}
    keyExtractor={({ id }, index) => id}
    renderItem={({ item }) => {
      return(
                  <View style={{ 
                                  // marginTop:6,
                                  alignItems:'center', 
                                  height:height/7,
                                  justifyContent:'center', 
                                  borderBottomWidth:0.2,
                                  borderRightWidth:0.2,
                                  width:width/5,
                              }}>
                  <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('Products_data',  {
                                                      dataName : item})}
                          >
          <Image 
          style={{
                  height:height/12,
                  width:width/6,
                  alignSelf:'center', 
                  opacity:0.8,
                  // marginLeft:2,
                  marginTop:14,
                  borderRadius:15,
                  resizeMode:'contain'
                }}
          source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
          <View></View>
          <Text 
                    numberOfLines={2}
                    style={{
                            // width:width/5, 
                            width:width/5, 
                            marginTop:4,
                            height:height/29,
                            // borderWidth:1,
                            textAlignVertical:'center',
                            fontSize:RFValue(11, height),
                            textAlign:'center',
                            color:'black',
                            fontFamily:'Montserrat-Regular',
                      // top:"34%",
                        }}>{item.sub_category_name}</Text></TouchableOpacity>
          </View>
        
        
    )
          }}
   /> */}
   {/* </View> */}
   
   </View>
   </SafeAreaView>
  )

}

export default Working

// import React, { Component } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';

// import Slider from 'react-native-fluid-slider';

// export default class App extends Component {
//   state = { value: 40 }

//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.sliderContainer}>
//           <Text style={styles.valueText}>
//             {this.state.value.toFixed()}
//           </Text>
//           <Slider
//             value={this.state.value}
//             onValueChange={value => this.setState({ value })}
//             onSlidingComplete={(value) => { console.warn('Sliding Complete with value: ', value) }}
//           />
//         </View>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: '#000',
//     paddingHorizontal: 70,
//   },
//   sliderContainer: {
//     width: '100%',
//   },
//   valueText: {
//     fontSize: 40,
//     textAlign: 'center',
//     margin: 10,
//     color: '#ee6d51',
//   },
// });