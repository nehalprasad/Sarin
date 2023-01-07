import React from "react";
import { useFetch } from "./Hook";
import { FlatList, 
    Text, 
    View, 
    StyleSheet, 
    TouchableOpacity, 
    ImageBackground,
    Image, 
    ActivityIndicator,
    SafeAreaView,
    PixelRatio,
    Dimensions,
    ImageBackgroundBase
  } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import Neumorphism from "react-native-neumorphism";
import { useNavigation } from '@react-navigation/native';
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-async-storage/async-storage";

const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()

function Category_Data() {
  const navigation = useNavigation();

  
  const [data, loading] = useFetch(
   "https://app.sarinskin.com/api/category"
  );
  return (
    <View >
      {loading ? (
        <View  style={{
          flex: 1,
          justifyContent: "center",
          marginLeft:'auto',
          marginRight:'auto',
          marginTop:'50%',
          marginBottom:'auto'
        
      }}>
              
          <View style={{marginTop:6, }}>
          <Neumorphism
                lightColor={'#dedddd'}
                darkColor={'#dedddd'}
                shapeType={'flat'}
                radius={50}
                style={{marginLeft:'auto', marginTop:-10, marginRight:'auto',height:50, width:50}}>
          <ActivityIndicator size="large" color="#00C897" style={{marginTop:5, tintColor: '#00C897', }} />
          </Neumorphism>
        
          </View>
      </View>
      ) : (
        <SafeAreaView style={{backgroundColor:'white'}}>
          <FlatList

                ListFooterComponent={
                          <>
                          <View style={{
                                height:height/7,
                                width:width-15,
                                marginLeft:'2%',
                                marginTop:10
                                }}>
                  <Neumorphism 
                      lightColor={'#dedddd'}
                      darkColor={'#979797'}
                      shapeType={'flat'}
                      radius={0}
                    >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        // onPress={() =>  alert('Id : ' + item.id )}
                        onPress={() => navigation.navigate('VIEW ALL')}
                        >      
                <Neumorphism 
                 lightColor={'#E8F9FD52'}
                 darkColor={'#E8F9FD'}
                 shapeType={'flat'}
                 radius={0}
                 >
                 <View style={{
                                justifyContent:'center', 
                                alignItems:'center',
                                height:height/7,
                                }}>
                      <Text style={{
                                      color:'#000000',
                                      textAlign:'center',
                                      width:width/1.65,
                                      textShadowColor: '#000', 
                                      textShadowOffset: { width: 0.5, height: 0.5 }, 
                                      textShadowRadius: 1,
                                      fontFamily:'Quicksand-Light',
                                      fontSize:RFValue(22, height)
                                  }}>VIEW ALL
                                  </Text>

                 {/* </View> */}
  
                  </View>
                 </Neumorphism>
                  </TouchableOpacity>
                  </Neumorphism>
                  </View>
                    <View style={{
                                  width:width-10,
                                  marginTop:'5%' , 
                                  marginLeft:'1%',
                                  paddingBottom:"30%",
                                  alignContent:'center',
                                  justifyContent:'center'
                                  }}>
                      <Text style={{
                                  fontFamily:'Quicksand-Bold', 
                                  fontSize:RFValue(20, height), 
                                  textAlign:'center',
                                  color:'#00000070',
                                  textShadowColor: '#000', 
                                  textShadowOffset: { width: 0.5, height: 0.5 }, 
                                  textShadowRadius: 1,
                                  }}>We are currently working to provide you more Categories</Text>
                  
                      </View> 
                          </>              
            }
            data={data}
            numColumns={1}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
                return   <SafeAreaView style={{width,}}>
                  <View style={{
                                height:height/7,
                                width:width-15,
                                marginLeft:'2%',
                                marginTop:10
                                }}>
                  <Neumorphism 
                      lightColor={'#dedddd'}
                      darkColor={'#979797'}
                      shapeType={'flat'}
                      radius={0}
                    >
                    <TouchableOpacity
                        activeOpacity={0.8}
                        // onPress={() =>  alert('Id : ' + item.id )}
                        onPress={() => navigation.navigate('SubCategory' , item)}
                        >      
                <Neumorphism 
                            lightColor={'#E8F9FD52'}
                            darkColor={'#E8F9FD'}
                            shapeType={'flat'}
                            radius={0}>
                  <View  style={{
                                  flexDirection:'row',
                                  backgroundColor:'white'
                                }}>
                 <View style={{
                                justifyContent:'center', 
                                alignItems:'center'
                              }}>
                      <Text style={{
                                      marginLeft:5,
                                      color:'#000000',
                                      textAlign:'center',
                                      width:width/1.65,
                                      textShadowColor: '#000', 
                                      textShadowOffset: { width: 0.5, height: 0.5 }, 
                                      textShadowRadius: 1,
                                      fontFamily:'Quicksand-Regular',
                                      fontSize:RFValue(18, height)
                                  }}>{item.category_name}</Text>

                    </View>
                    <Image style={{
                                  height:height/7,
                                  width:width/3,
                                  backgroundColor:'white',
                                  opacity:0.7,
                                  borderRadius:200,
                                  shadowColor: '#000', 
                                  shadowOffset: { width: 0.5, height: 0.5 }, 
                                  shadowRadius: 1,
                                  }}
                          source={{uri: `https://app.sarinskin.com/${item.image}`}}/>
                  </View>
                  </Neumorphism>
                  </TouchableOpacity>
                  </Neumorphism>
                  </View>
                </SafeAreaView>
            }}
          />
          </SafeAreaView>
      )}
       
    </View>
  );
}
export default Category_Data;

// Start of styling
const style = StyleSheet.create({
    container:{
    backgroundColor:'white',
    width
    },
    card:{
    },
})



