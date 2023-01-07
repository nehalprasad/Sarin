import { View, Text, SafeAreaView, Image, StyleSheet, ActivityIndicator, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'


const {width,height} = Dimensions.get('window')

export default function Members({navigation, route}) {

  const date = route.params
  // console.log(date)

    const [memberData, setMemberData] = useState()
    const [isLoading,setLoading] = useState(true)
    
const [state, setState] = useState({});
    const Data = async () => {
        const API_URL = "https://app.sarinskin.com/api/member/"

       fetch(API_URL)
        .then((response) => response.json())
        .then((responseJson) => {
  
          // console.log(responseJson.data)
          setMemberData(responseJson.data)
          setLoading(false)
        })
  
        .catch((error) => {
          console.log(error);
        });

    }

    useEffect(() => {
      
       
Data();

return () => {
  setState({}); // This worked for me
};
    },[])

    if(isLoading == true){
      return (
             <View style={{
              flex: 1,
              justifyContent: "center"
            
          }}
             >
               <ActivityIndicator size="large" color="#00ff00" />
             </View>
           )
        
   }
   else{

  if(date == 1){
    return (
      <View style={{
                    backgroundColor:'white',
                    alignItems:'center', 
                    justifyContent:'center'
                    }}>
          <ScrollView>
              <Text style={{
                fontSize:RFValue(28, height),
                textAlign:'center',
                fontFamily:'Quicksand-Bold', 
                marginBottom:5,
                marginTop:10
              }}>
                          {memberData[0].name}
                      </Text>
                      <Image
                      style={{
                              height:height/2.5, 
                              width:width-10, 
                              marginBottom:10, 
                              resizeMode:'contain'
                            }}
                      source={{uri: `https://app.sarinskin.com/${memberData[0].image}`}}/>
                      <Text style={{
                        fontSize:RFValue(20, height),
                        textAlign:'center',
                        fontFamily:'Quicksand-Medium',
                        marginLeft:10,
                        width:width-20,
                        marginBottom:20}}>
                      {memberData[0].description}
                      </Text>


   </ScrollView>
  
      </View>
    )
            }
    else{
      // console.log("men")
        return (
          <View style={{
                        backgroundColor:'white',
                        alignItems:'center', 
                        justifyContent:'center',
                        height
                        }}>
                <ScrollView>
                    <Text style={{
                      fontSize:RFValue(28, height),
                      textAlign:'center',
                      fontFamily:'Quicksand-Bold', 
                      marginBottom:5,
                      marginTop:10
                      }}>
                          {memberData[1].name}
                    </Text>
                    <Image
                         style={{
                          height:height/2.5, 
                          width:width-10, 
                          marginBottom:10, 
                          resizeMode:'contain'
                        }}
                        source={{uri: `https://app.sarinskin.com/${memberData[1].image}`}}/>
                    <Text style={{
                        fontSize:RFValue(18, height),
                        textAlign:'center',
                        fontFamily:'Quicksand-Medium',
                        // fontWeight:'600',
                        marginLeft:10,
                        width:width-20,
                        marginBottom:20}}>
                        {memberData[1].description}
                    </Text>
                </ScrollView>
  
      
          </View>
      )

    }
  }
  }



var styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});