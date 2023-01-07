import { View, Text, FlatList, Dimensions, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize';
const{height,width} = Dimensions.get('window')
const Exercise = ({navigation, route}) => {
  return (
    <View style={{
                alignItems:'center', 
                backgroundColor:'white',
                
                width,
                height
                }}>
      <TouchableOpacity
          style={{
                marginTop:'50%',
                borderWidth:2, 
                borderColor:'white',
                // backgroundColor:'#00c897',
                borderRadius:25,
                }}
          onPress={() => navigation.navigate('ExerciseList')}>
            <View style={{
                          justifyContent:'center',
                          alignItems:'center',
                          width:width-40,
                          height:height/12
                          }}>
                  <Text style={{
                             fontSize:RFValue(20, height),
                             color:'black',
                             fontFamily:'Montserrat-Bold',
                            //  fontStyle:'italic',
                             fontWeight:'400'
                             }}>See All Exercises</Text>
            </View>
      
      </TouchableOpacity>
      <TouchableOpacity
          style={{
                borderWidth:2, 
                borderColor:'black',
                borderColor:'white',
                // backgroundColor:'#00c897',
                borderRadius:25
                }}
          onPress={() => Alert.alert("We are Working on it.. Please Wait......")}>

        <View style={{
                          justifyContent:'center',
                          alignItems:'center',
                          width:width-40,
                          height:height/12
                          }}>
                  <Text style={{
                             fontSize:RFValue(20, height),
                             color:'black',
                             fontFamily:'Montserrat-Bold',
                            //  fontStyle:'italic',
                             fontWeight:'400'
                             }}>Make Your Schedule</Text>
          </View>
      </TouchableOpacity>
      <TouchableOpacity
          style={{
                borderWidth:2, 
                borderColor:'white',
                // backgroundColor:'#00c897',
                borderRadius:25
                }}
          onPress={() => Alert.alert("We are Working on it.. Please Wait......")}>
             <View style={{
                          justifyContent:'center',
                          alignItems:'center',
                          width:width-40,
                          height:height/12
                          }}>
                  <Text style={{
                              fontSize:RFValue(20, height),
                              color:'black',
                              fontFamily:'Montserrat-Bold',
                             //  fontStyle:'italic',
                              fontWeight:'400'
                             }}>View Your Schedule</Text>
                  </View>
      </TouchableOpacity>
     
    </View>
  )
}

export default Exercise



// import { View, Text } from 'react-native'
// import React from 'react'

// const Exercise = () => {
//   return (
//     <View>
//       <Text>Exercise</Text>
//     </View>
//   )
// }
// export default Exercise