import React, { useEffect, useState } from 'react';
import { SafeAreaView,
          FlatList, 
          Text, 
          View, 
          StyleSheet, 
          ActivityIndicator, 
          Image, 
          TouchableOpacity, 
          Alert,
          Dimensions,
          PixelRatio, 
          ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import Neumorphism from 'react-native-neumorphism';

import { useNavigation } from '@react-navigation/native';


const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()

const PromationalProducts = () => {
    const navigation = useNavigation();

const [promotionalProducts, setPromotionalProducts] = useState()
const [state, setState] = useState({});

  
const Data = async() => {
    

    const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')

    const adminToken = JSON.parse(jsonValue1)

    // console.log("adminToken")
    // console.log(adminToken)


    
    var axios = require('axios');
    var config = {
      method: 'get',
      url: 'https://test.sarinskin.com/wp-json/wc/v3/products/?include=11967,12007,11991,11979,11967,11875,5269,5015,5013',
      headers: { 
        'Authorization': `Bearer ${adminToken}`, 
        'Content-Type': 'text/plain'
      },
    };
    
    axios(config)
    .then((response) =>{
    //     console.log("Promoitional Page");
    //   console.log(JSON.stringify(response.data));
      setPromotionalProducts(response.data)
    })
    .catch( (error) => {
      console.log(error);
    });
}

useEffect(() => {

    Data()

    return () => {
      setState({}); // This worked for me
    };

},[])
const onEnd = () => {
  
  Alert.alert('No more Data');
}

const final_data = promotionalProducts
if (final_data==0){
  return (
      <View  style={{
        flex: 1,
        justifyContent: "center",
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'-10%',
        height
        // marginBottom:'auto'
      
    }}>
            <Neumorphism
      lightColor={'#dedddd'}
      darkColor={'#dedddd'}
      shapeType={'flat'}
      radius={50}
      style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
        <View style={{marginTop:6}}>
        <ActivityIndicator size="large" color="#00ff00" />

        </View>

      </Neumorphism>
      
    </View>
  )
}
else{
// console.log(final_data)
const Demo = ({data}) => {

    // console.log(data.id)
      
         let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
         // intiialize src with blank, if image not found it will set blank or default url
           if (data.images.length > 0) 
           {
           src = data.images[0].src;
           }
         return(
   
   
  //  <SafeAreaView >       
                            <Neumorphism>
                           <View style={{
                                        height:height/5,
                                        width:width/3.3,
                                        // borderWidth:0.2,
                                        // marginBottom:'3%',
                                        justifyContent:'center',
                                        alignItems:'center',
                                        marginLeft:15,
                                        marginTop:15,
                                        // marginBottom:-1000
                                         }}>
                         
                             <TouchableOpacity
                                 activeOpacity={0.8}
                                //  onPress={() =>  alert('Id : ' + data.id )}
                                //  onPress={() => navigation.navigate('ProductsDetails',
                                //                 )}
                                onPress={() => navigation.navigate('ProductsDetails',
                                data)}
                                 >      
                        
                           <Image
                                            style={{
                                                    // marginTop:'20%',
                                                    height:height/10,
                                                    resizeMode:'contain',
                                                    width:width/3.2,
                                                    // borderWidth:2,
                                                    marginLeft:'3%'
                                                  }} 
                                            source={{uri: src}}
                                            />
                           
                           <View style={{
                                        justifyContent: 'center', 
                                        alignItems: 'center',
                                        width:width/3,
                                        height:height/16
                                        }}>
                           <Text style={{

                                        textAlign:'center',
                                        color:'black',
                                        backgroundColor:'#ffffff',
                                        fontSize:RFValue(14, height),
                                        letterSpacing:2,
                                        fontFamily:'Montserrat-Regular'
                                        }}>{data.name}</Text>
                           </View>
                          
                           </TouchableOpacity>
                          
                           </View>
                           </Neumorphism>
                        
                        //  </SafeAreaView>
   
   
               
   )}   //end of render
   
   return (  // Start of View point in ScrollView
   
     <SafeAreaView style={{
                          // borderWidth:2
                          marginTop:'3%',
                          
                          }}>
       
           <FlatList
             
                data={final_data}
            //  numColumns={2}
                //  style={{ transform: [{ scaleX: -1 }] }}
                horizontal
                refreshing
                initialNumToRender={10}
                windowSize={2}
                pagingEnabled={true}
                flashScrollIndicators
                ListFooterComponent={
                  <>
                  <View style={{ 
                                marginRight:20
                                }}>
                  </View>
                  </>
                }
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => {
                 return <Demo data={item} />;
             }}
           />
           <Text style={{
                      textAlign:'center', 
                      fontSize:RFValue(24,height), 
                      fontFamily:'Quicksand-SemiBold',
                      marginTop:10,
                      color:'#57c3c4',
                      }}>Our Most Selled Products</Text>
           </SafeAreaView>
              
   );
}
}

export default PromationalProducts
const style = StyleSheet.create({
    container:{
    backgroundColor:'white',
    height:'100%'
    },
    card:{
      height:160,
      width:150,
      backgroundColor:'#E8F9FD',
      marginLeft:"15%",
      marginRight:"-2%",
      marginTop:15,
      borderRadius:50,
      marginBottom:20

    },
    image:{
      height:100,
      width:100,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:50,
      resizeMode:'contain'
    },
    name:{
    fontSize:14.5,
    fontWeight:'bold',
    textAlign:'center',
    paddingLeft:15,
    paddingRight:15,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#112B3C',
    color:'black',
    marginTop:4
    }  ,
    ima:{
      height:100,
      width:100,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:50
    }
})