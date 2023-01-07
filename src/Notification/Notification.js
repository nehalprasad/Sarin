// import { View, Text, Dimensions,Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { FlatList } from 'react-native-gesture-handler';
// import { RFValue } from 'react-native-responsive-fontsize';

// const {width,height} = Dimensions.get('window')


// export default function Notification({navigation, route}) {
//     const [Notification, setNotification] = useState([])



// const Data = () => {
//   var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://app.sarinskin.com/api/notification/',
// };

// axios(config)
// .then(function (response) {
//   // console.log(JSON.stringify(response.data.data));
//   setNotification(response.data.data)
// })
// .catch(function (error) {
//   console.log(error);
// });

// }

// useEffect(()=>{

//   Data()

// },[])

// const Demo = (data) => {

// // console.log(data)

// var status = data.data.status



// if(status == true){


// var image = data.data.image

// if(image == null){

//   image = null
//   // 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'

// }
// else{
//   image = `https://app.sarinskin.com${data.data.image}`
// }
// // console.log(image)
//   var name = data.data.name

//   // console.log(name)
//   var description= data.data.description
//   // console.log(description)
//   var header = data.data.header
  
  
//   var subheading = data.data.sub_header
  
//   // console.log(subheading)
//   return(
//         <View>
//           <View style={{
//                         borderWidth:1, 
//                         width:width-8, 
//                         marginLeft:4, 
//                         backgroundColor:'white',
//                         // height:height/6,
//                         marginBottom:5,
//                         }}>
//           <Text style={{fontFamily:'Kanit-Bold', fontSize:RFValue(22, height), textAlign:'center'}}>
//                 {name}
//           </Text >
//           <View style={{flexDirection:'row'}}>
//           <Image style={{
//                         // height:height/5,
//                         resizeMode:'stretch',
//                         width:width/4}}
//                         source={{uri: image}}
//           />
//           <View style={{marginLeft:10}}>

//           <Text style={{fontFamily:'Kanit-Bold', fontSize:RFValue(18, height), width:width-35}}
//          >{header} </Text>
//            <Text style={{fontFamily:'Kanit-SemiBold', fontSize:RFValue(15, height), width:width-110}}>
//           {subheading}
//           </Text>
        
        
//           <Text style={{fontFamily:'Kanit-Regular', fontSize:RFValue(12, height), width:width-110}}>
//             {description}
//           </Text>
//             </View>
//             </View>    
  
//           </View>
//         </View>
//    )

// }

// else{

//   return(
//     <>
//     {/* <Text>News</Text> */}
//     </>
//   )

// }
// }
//   return (
//    <FlatList
//    style={{backgroundColor:'white'}}
//    data={Notification}
//    keyExtractor={({ id }, index) => id}
//    renderItem={({ item }) => {
//     return <Demo data={item} />;
// }}
//    />
//   )
// }

import { View, Text, FlatList, Image, Dimensions, } from 'react-native'
import React, {useEffect, useState} from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import AsyncStorage from "@react-native-async-storage/async-storage";

const {width, height} = Dimensions.get('window')
const Notification = () => {
  const [NotificationData, setNotifictaionData] = useState()

   const Data = async() => {
      var axios = require('axios');
    
    var config = {
      method: 'get',
      url: 'https://app.sarinskin.com/api/notification/',
    };
    
    axios(config)
    .then(function (response) {
      // console.log(JSON.stringify(response.data.data));
      // console.log(JSON.stringify(response.data.data.length));

    //  const NotificationLength = JSON.stringify(response.data.data.length)

    //  AsyncStorage.setItem("Notification", NotificationLength)

      setNotifictaionData(response.data.data)
    })
    .catch(function (error) {
      console.log(error);
    });
    }    
    useEffect(()=>{
    
      Data()
    
    },[])
    

const Demo = (data) => {
  // console.log(data.data)
  var Status = data.data.status
 
  var Description = data.data.description

  var Name = data.data.name

  var SubHeader = data.data.sub_header

  var Header = data.data.header

  var Imagess = data.data.image

if(Status == true){


  if(Imagess == null){
    return(
      <>
          <View style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
          <View style={{
                        flexDirection:'row', 
                        width:width-20, 
                        borderBottomWidth:0.2, 
                        marginLeft:10, 
                        marginBottom:8,
                        justifyContent:'center', 
                        alignItems:'center'
                        }}>
              <View 
                    style={{
                            marginLeft:'5%', 
                            width:width-100,
                            flexDirection:'column'
                          }}>
                <Text 
                      style={{
                              fontSize:RFValue(20, height), 
                              fontFamily:'Montserrat-SemiBold'
                            }}>
                  {Header}
                </Text>
                <Text 
                      style={{
                              fontSize:RFValue(18, height), 
                              marginBottom:10,
                              // borderWidth:1,
                              width:width-120,
                              fontFamily:'Montserrat-Regular'
                            }}>
                 {SubHeader}
                </Text>
              </View>
          </View>
          </View>
      </>
    )
  }else{
        return(
          <>
          <View style={{marginTop:10, justifyContent:'center', alignItems:'center'}}>
          <View style={{
                        flexDirection:'row', 
                        width:width-20, 
                        borderBottomWidth:0.2, 
                        marginLeft:10, 
                        marginBottom:8,
                        justifyContent:'center', 
                        alignItems:'center'
                        }}>
            <Image 
                  style={{
                        height:height/12, 
                        width:width/6,
                        marginLeft:'2%',
                        borderRadius:50,
                        resizeMode:'contain'
                        }}
                  source={{uri:`https://app.sarinskin.com${Imagess}`}}
                />
              <View 
                    style={{
                            marginLeft:'5%', 
                            width:width-100,
                            flexDirection:'column'
                          }}>
                <Text 
                      style={{
                              fontSize:RFValue(20, height), 
                              fontFamily:'Montserrat-SemiBold'
                            }}>
                  {Header}
                </Text>
                <Text 
                      style={{
                              fontSize:RFValue(18, height), 
                              marginBottom:10,
                              // borderWidth:1,
                              width:width-120,
                              fontFamily:'Montserrat-Regular'
                            }}>
                 {SubHeader}
                </Text>
              </View>
          </View>
          </View>
          </>
    )
  }
  
}
else{
  return(
    <View>
    </View>
)}
 
}
  return (
    <View style={{backgroundColor:'white', height}}>
     <View style={{marginBottom:20}}>
            <Text style={{
                            fontSize:RFValue(42, height),
                            color:'#57c3c4', 
                            marginLeft:10,
                            height:height/19,
                            marginBottom:15,
                            fontFamily:'Montserrat-SemiBold'
                        }}>Notifications</Text>
                        </View>
    <FlatList
      style={{backgroundColor:'white'}}
      data={NotificationData}
      keyExtractor={({ id }, index) => id}
      renderItem={({ item }) => {
                 return <Demo data={item} />;
        }}
      // renderItem={renderItem}
   />
   </View>
  )}

export default Notification