import { 
        View, 
        Text, 
        FlatList, 
        Dimensions,
        Linking, 
        Image, 
        TouchableWithoutFeedback, 
        Alert,
        ImageBackground } from 'react-native'
import React,{useEffect, useState} from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Neumorphism from 'react-native-neumorphism'
import Blog from '../Blogs/Blog'
import Video from 'react-native-video'
const {height, width} = Dimensions.get('window')

export default function Instagram() {
  const [Data, setData] = useState([])
  const [Loading, setLoading] = useState(false)
  const [state, setState] = useState({});

const Instagram = () => {

  var axios = require('axios');

  var config = {
    method: 'get',
  url: 'https://graph.instagram.com/me/media?fields=media_type,media_url,permalink&access_token=IGQVJVM3BKYUk1R2ZAUOWxsYTVDR1NVR1lmZA2EyVUtNaDZALUjIzX0ZAUclhJVmFwRUhYbWM5dmI0dWJOR1YxLVU2WGZA4OG1EQTNIU2dYQkZA0VV9GZAW50b2lOZA0hzdUdnbnl1UmZA0VGhn'};
  
  axios(config)
  .then(function (response) {
    // console.log(JSON.stringify(response.data.data.length));
    // if(response.data.data.length>10){
      setLoading(true)
      setData(response.data.data)
    // }
    // setData(response.data.data)
    
  })
  .catch(function (error) {
    console.log(error);
  });

}  

useEffect(() => {
  Instagram()

  return () => {
    setState({}); // This worked for me
  };
},[])

// console.log(Data)

const Demo = (data) => {

  // console.log(data)
  // console.log(data.data.media_type)

if(data.data.media_type == "IMAGE"){
  // console.log(data.data.media_url)
  // console.log(data.data.permalink)
  return(
    <View style={{
                  marginBottom:'5%', 
                  marginTop:'35%',
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:40,
                  height:height/2.3, 
                  width:width/1.4, 
                  }}>
 
  <Image
      style={{
              height:height/3, 
              width:width/1.4, 
              resizeMode:'cover',
            }}
      source={{uri: data.data.media_url}}
      />
   
  
   
     <TouchableWithoutFeedback 
                  onPress={() =>  Linking.openURL(data.data.permalink )}
                 
  >
    <View
           style={{
            alignItems:'center',
            justifyContent:'center',
            bottom:'70%',
            height:height/4, 
            width:width/2,
          }}>
   <Image
          style={{ 
                  height:height/14, 
                  width:width/6,
                  resizeMode:'contain',
                  borderColor:'#00C897',
                  tintColor:'#57c3c4',
                }}
          source={require('../image/insta1.png')}
    />
    </View>
    </TouchableWithoutFeedback>
    </View>
  )
}
else {
  //  console.log(data.data.media_url)
  return(
    <>
 {/* <View style={{
                 marginBottom:'5%', 
                 marginTop:'35%',
                 justifyContent:'center',
                 alignItems:'center',
                 marginLeft:40,
                 height:height/2.3, 
                 width:width/1.4, 
                  }}>
 
  <Video
      style={{
              height:height/3, 
              width:width/1.4, 
              // resizeMode:'contain',
            }}
      source={{uri: data.data.media_url}}
      controls={true}
      resizeMode="cover"
      paused={false}
      muted={true}
      /> */}
   
  
   
     {/* <TouchableWithoutFeedback 
                  onPress={() =>  Linking.openURL(data.data.permalink )}
                 
  >*/}
    {/* <View 
           style={{
            alignItems:'center',
            justifyContent:'center',
            bottom:'70%',
            height:height/4, 
            width:width/2,
          }}> */}
   {/* <Image
          style={{ 
                  height:height/14, 
                  width:width/6,
                }} 
          
    />*/}
    {/* </View> */}
     {/*</TouchableWithoutFeedback> */}
    {/* </View> */}









     {/* <View style={{
                  marginBottom:'5%', 
                  marginTop:'35%',
                  // borderWidth:.2,
                  justifyContent:'center',
                  alignItems:'center',
                  marginLeft:25,
                  // borderWidth:1,
                  height:height/2.3, 
                  width:width/1.4, 
                  }}>
 
<Image
      style={{
              height:height/3, 
              width:width/1.4, 
              // marginLeft:20, 
              resizeMode:'contain',
              borderWidth:2
            }}
      source={{uri: data.data.media_url}}
      />
   
  
   {/* <Neumorphism> */}
     {/* <TouchableWithoutFeedback 
                  onPress={() =>  Linking.openURL(data.data.permalink )}
                 
  > */}
    {/* <View
           style={{
            alignItems:'center',
            justifyContent:'center',
            // borderWidth:2,
            // borderColor:'green',
            bottom:'70%',
            height:height/4, 
            width:width/2,
          }}> */}
    {/* <Video
          source={{uri: data.data.media_url}}
          style={{
                  height:height/3, 
                  width:width/1.4,  
                }}
          controls={true}
          resizeMode="contain"
          paused={false}
          muted={true}
          /> */}
    {/* </View>
    </TouchableWithoutFeedback>  */}
    {/* </Neumorphism> */}
    {/* </View> */}
     {/* <View style={{
                 marginBottom:'20%', 
                 marginTop:'35%',
                 // borderWidth:.2,
                 justifyContent:'center',
                 alignItems:'center',
                 marginLeft:25,
                 // borderWidth:1,
                 height:height/2.3, 
                 width:width/1.4, 
                  }}>
   <Video
          source={{uri: data.data.media_url}}
          style={{
                    height:height/2.3, 
                    width:width/1.4, 
                    // marginLeft:20, 
                    // resizeMode:'contain',
                    // borderWidth:0.22
                }}
          controls={true}
          resizeMode="contain"
          paused={false}
          muted={true}
          />

<TouchableWithoutFeedback 
  onPress={() =>  Linking.openURL(data.data.permalink )}
  >
     <View
           style={{
                  alignItems:'center',
                  justifyContent:'center',
                  borderWidth:2,
                  borderColor:'green',
                  bottom:'70%',
                  // height:height/8, 
                  // width:width/2,
          }}>
   <Image
          style={{ 
                  height:height/14, 
                  width:width/6,
                  resizeMode:'contain',
                  borderColor:'#00C897',
                  tintColor:'#57c3c4',
                  }}
          source={require('../image/insta1.png')}
    />
    </View>
    </TouchableWithoutFeedback>
      </View> */}
    </>
  )
}
}

  return (
    <View style={{marginBottom:1}}>
    <TouchableWithoutFeedback>
    <Text style={{
                  textAlign:'center', 
                  marginTop:20, 
                  fontSize:RFValue(28, height), 
                  color:'black',
                  fontFamily:'Montserrat-SemiBold'
                }}>Watch our Instagram Feeds</Text>
   
                </TouchableWithoutFeedback>
    <FlatList data={Data}
        horizontal={true}
        keyExtractor={({ id }, index) => id}
        ListFooterComponent={
          <View style={{marginLeft:'40%'}}>
          </View>
        }
        renderItem={({ item }) => {
        return <Demo data={item} key={item.id} />;
    }} 
    /> 
    </View>
  )
}