import { View,
     Text,
     Dimensions,
     PixelRatio, 
     Image,
     ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
import Neumorphism from 'react-native-neumorphism';
import { useNavigation } from '@react-navigation/native';


const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()
 

const Shop = () => {
    const navigation = useNavigation();
  return (

<TouchableOpacity 
          onPress={() => navigation.navigate('Categories')}
          >

    <View style={{
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:10, 
                    flexDirection:'row', 
                    alignItems:'center', 
                    // marginLeft:'38%',
                    width}}>
              <Text style={{
                            fontSize:RFValue(28, height), 
                            textAlign:'center', 
                            fontFamily:'Montserrat-Bold',
                            marginRight:10,
                            color:'#57c3c4'
                            }}>Shop</Text>
    <Image 
          source={{uri:"https://cdn-icons-png.flaticon.com/128/31/31085.png"}} 
          style={{
                  height:height/20, 
                  width:width/14,
                  tintColor:'#57c3c4',
                  alignItems:'center'
                  }}/>

    </View>
     </TouchableOpacity>
  )
}
export default Shop