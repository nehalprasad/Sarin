import { View, Text, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
import Data from './Data'
import { RFValue } from 'react-native-responsive-fontsize';
import Neumorphism from 'react-native-neumorphism';

const{height,width} = Dimensions.get('window')
const ExerciseList = () => {


// console.log(Data)
const Demo = ({data}) => {
  // console.log(data)
  return(
    <View style={{
                  marginTop:20,
                  backgroundColor:'white', 
                  color:'white',
                  // marginBottom:20
                  }}>
    <Neumorphism>
    <View style={{  
                  height:height/2.1,
                  width:width/2-20, 
                  marginLeft:10,
                  marginRight:5
                  // borderWidth:1,
                  // marginBottom:5,
                  // marginTop:20
                  }}>
      <Text style={{
                    color:'black',
                    fontSize:RFValue(22, height), 
                    textAlign:'center',
                    fontFamily:'NanumGothic-Bold'
                  }}
                    numberOfLines={1}>
            {data.name}
      </Text>
      <Image 
            style={{
                    // borderWidth:10,
                    
                    height:height/4.5, 
                    width:width/2-22,
                    resizeMode:'contain',
                    alignItems:'center',
                    // marginTop:-10
                  }}
            source={data.img}/>
        <Text style={{
                      color:'black',
                      fontSize:RFValue(16, height), 
                      fontFamily:'Quicksand-Regular',
                      marginLeft:5,
                      height:height/4.8,
                      width:width/2-30
                      }}
                      numberOfLines={7}>{data.about}</Text>
      
    </View>
    </Neumorphism>
    </View>

  )
}

  return (
   <View    style={{backgroundColor:'white',}}>
   <FlatList
            data={Data}
            numColumns={2}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => {
            return <Demo data={item} />;
            
            }}
            ListFooterComponent={
              <View style={{marginBottom:"10%"}}></View>
            }

   />
   </View>
  )
}

export default ExerciseList