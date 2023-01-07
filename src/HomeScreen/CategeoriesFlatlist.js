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

const CategeoriesFlatlist = () => {

const navigation = useNavigation();
const [state, setState] = useState({});
const [categeoriesFlatlist, setCategeoriesFlatlist] = useState()
const [isLoading, setLoading] = useState(true)

  
const Data = async() => {
    

    const jsonValue1 =  await AsyncStorage.getItem('AdminToken1st')

    const adminToken = JSON.parse(jsonValue1)

    // console.log("adminToken")
    // console.log(adminToken)

    var axios = require('axios');
    var config = {
        method: 'get',
        url: 'https://test.sarinskin.com/wp-json/wc/v3/products/categories/?per_page=100',
        headers: { 
          'Authorization': `Bearer ${adminToken}`
        }
      };
    
   
    
   await axios(config)
    .then((response) =>{
    //     console.log("Promoitional Page");
    //   console.log(JSON.stringify(response.data));
      setCategeoriesFlatlist(response.data)
      setLoading(false)
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
const final_data = categeoriesFlatlist
// console.log("Promoitional Page");
// console.log(JSON.stringify(final_data))

if(isLoading == true){
    return (
        <View  style={{
          flex: 1,
          justifyContent: "center",
          marginLeft:'auto',
          marginRight:'auto',
          marginTop:'-50%',
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

const Demo = ({data}) => {

    let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
      // intiialize src with blank, if image not found it will set blank or default url
        if (data.image.length > 0) 
        {
        src = data.image.src;
        }
   
          
         return(
   
   
   <SafeAreaView >
                           <View style={style.container}>
                         
                             <TouchableOpacity
                                 activeOpacity={0.8}
                                //  onPress={() =>  alert('Id : ' + data.id )}
                                //  onPress={() => navigation.navigate('ProductsDetails',
                                //                 )}
                                onPress={() => navigation.navigate('Products_data',  {
                                    dataName : data
                                }
                                )}
                                 >      
                        
                           <ImageBackground style={style.image} source={{uri: data.image.src}}/>
                           
                           <View style={style.nameView}>
                           <Text style={style.name}>{data.name}</Text>
                           </View>
                           </TouchableOpacity>
                           </View>
                         </SafeAreaView>
   
   )}   //end of render
   
   return (  // Start of View point in ScrollView
     <SafeAreaView>
       <Text style={style.category}>Categories</Text>
           <FlatList
              initialNumToRender={10}
              windowSize={2}
                data={final_data}
                onEndReached={onEnd}
                horizontal
                refreshing
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => {
                 return <Demo data={item} />;
             }}
           />
           </SafeAreaView>
              
   );
}
}

export default CategeoriesFlatlist
const style = StyleSheet.create({
  container:
    {
      height:height/2.3,
      width:width/1.8,
      // paddingLeft:'5%',
      marginBottom:-40,
      marginTop:30,
      // marginRight:10
    },
  image:
    {
      height:height/3,  
      transform: [{ scaleX: -1 }]
    },
  image:{
      height:180,
      width:160,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:50,
      resizeMode:'stretch'
    },
    name:{
    fontSize:20,
    fontFamily:'Kanit-SemiBold',
    // fontWeight:'bold',
    textAlign:'center',
    paddingLeft:15,
    paddingRight:15,
    marginLeft:'auto',
    marginRight:'auto',
    color:'#00c897',
    marginTop:10
    }  ,
  ima:{
      height:100,
      width:100,
      marginLeft:'auto',
      marginRight:'auto',
      borderRadius:50
    },
nameView:
  {
    position: 'absolute', 
    top: 85, 
    left: 0, 
    right: 0, 
    bottom: -140, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
category:
  {
  textAlign:'center', 
  fontSize:RFValue(35,height),
  letterSpacing:2, 
  marginTop:30,
  color:'#00c897',
  fontFamily:'Kanit-Bold'
  }
})