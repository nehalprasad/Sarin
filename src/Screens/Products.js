import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, StyleSheet, ActivityIndicator, Image, TouchableOpacity, Alert, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
import ImageZoom from 'react-native-image-pan-zoom';


const Products_data = ({navigation, route}) => {

  const product_data = route.params;
  const [products, setProducts] = useState([]);
  const [state, setState] = useState({});
  //  console.log(products[0].name)
  //  console.log(products[2].images[0].src)
 

  useEffect(() => {
    fetch("https://app.sarinskin.com/wp-json/wc/v3/products/?per_page=100&consumer_key=ck_2158fd672f9bf9bf9b798a2c33733777cec73376&consumer_secret=cs_3a1aa664d33e761ac06b7e5b169298f454f095dc")
      .then((response) => response.json())
      .then((json) => setProducts(json))
     
      .catch((error) => console.error(error))
     
     
      return () => {
        setState({}); // This worked for me
      };
      
  }, []);


  const Products = ({data}) => {

    let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
         // intiialize src with blank, if image not found it will set blank or default url
           if (data.images.length > 0) {
          // console.log("src = " + data.images[0].src);
          src = data.images[0].src;
        }


        return(
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('ProductsDetails', data)}
        // onPress={() =>  alert('Id : ' + data.id )}
          >

                    <View style={style.card}>            
                        <Image source={{uri: src}}  
                        style={style.image}/> 
                        <Text
                        style={style.heading}
                        numberOfLines={2}
                        >
                        {data.name}
                        </Text>
                    </View>
              </TouchableOpacity>
  )}
  return (
    <SafeAreaView>
      <Text>News</Text>
          <FlatList
            data={products}
            numColumns={2}
            initialNumToRender={20} 
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
                return <Products data={item} />;
            }}
          />
          </SafeAreaView>
         
  );
};

const style = StyleSheet.create({
    card: {
    height:190,
    width:150,
    borderColor:'black',
    borderWidth:2,
    borderRadius:30,
    marginLeft:40,
    marginTop:'10%',
    },
    heading:{
        color:"green",
        marginTop:2,
        margin:'auto',
        justifyContent:'space-between',
        textAlign:'center',
        alignContent:'center'
    },
    image:{
        marginTop:10,
        width:100, 
        height:100,
        borderRadius:30,
        marginLeft: "auto",
        marginRight: "auto",
  

    },

    
})

export default Products_data