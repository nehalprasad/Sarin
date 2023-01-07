// // import { 
// //     View,
// //     Text, 
// //     StyleSheet, 
// //     Dimensions, 
// //     StatusBar, 
// //     FlatList, 
// //     SafeAreaView, 
// //     Image, 
// //     PixelRatio, 
// //     TouchableOpacity } from 'react-native'
// // import React from 'react'
// // import { RFValue } from 'react-native-responsive-fontsize';
// // import LinearGradient from 'react-native-linear-gradient';
// //   const{width, height} = Dimensions.get('window')

// // const SplashScreen = ({navigation, route}) => {
   

// //     const onEnd = () => {
// //         setTimeout(LoadingFunction, 2000);
// //         }
        
// //     function LoadingFunction() 
// //             {
// //         navigation.replace("MyTabs")
// //               }

// //     const DATA = [
// //           {
// //             id: '1',
// //             uri:'https://i.ibb.co/v3pDB3s/IMA-App-04.png',
// //             title: 'Welcome to IMA ',
// //             desc:'Wide range of Products available at lower prices and discount',
// //             desc2:''
// //           },
// //           {
// //             id: '2',
// //           uri:'https://i.ibb.co/W08C0mm/IMA-App-05.png',
// //           title: 'High quality Products',
// //           desc:'deliver to you doors with care',
// //           desc2:''
// //           },
// //           {
// //             id: '3',
// //              uri:'https://i.ibb.co/8DdBRg7/IMA-App-06.png',
// //             title: 'Find the best doctors',
// //             desc:'book instant appointments, consultations, and make better, more informed health decisions',
// //             desc2:''
// //           },
// //           // {
// //           //   id: '4',
// //           //    uri:'https://www.designerpeople.com/wp-content/uploads/2019/05/Inspiring-Healthcare-Products-Packaging-Design-9-720x300.jpg',
// //           //   title: 'Best deal on the market',
// //           //   desc:`... let's find your next product`,
// //           //   desc2:''
// //           // },
// //           // {
// //           //   id: '5',
// //           //    uri:'https://thumbs.dreamstime.com/b/conceptual-hand-writing-showing-lets-get-started-concept-meaning-to-begin-doing-working-something-you-had-started-colored-177881570.jpg',
// //           //   title: `It's all about shopping`,
// //           //   desc:'... seriously, it is',
// //           //   desc2:`Let's Begin`
// //           // },
// //         ];


// //         const Demo = ({data}) => {
// //             return(
// //     <View >
// //     <StatusBar barStyle='light-content'/>
// //     {/* <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]}> */}
// //     <SafeAreaView style={{ flex: 1, backgroundColor:'white' }}>
// //     <View style={{ width, height }}>
// //     <Image
// //       source={{uri : data.uri}}
// //               style={{
// //                 width:width-18,
// //                 height:height/1.7,
// //                 marginLeft:8,
// //                 resizeMode:'contain'
// //               }}
// //     />
// //     <View style={{
// //                     justifyContent: 'center',
// //                     alignItems: 'center',
// //                     marginVertical: 30,
// //                     // borderWidth:2,
// //                     width:width-16,
// //                     marginLeft:8
// //                   }}>
// //       <Text style={{
// //                     //  borderWidth:.2,
// //                     // width:width-16,
// //                     marginLeft:8,
// //                     fontSize:RFValue(32, height),
// //                     marginBottom: 5,
// //                     textAlign:'center',
// //                     color:'black',
// //                     fontFamily:'Quicksand-Bold'
// //                   }}> {data.title}</Text>
// //       <Text style={{
// //                     // borderWidth:.2,
// //                     fontSize:RFValue(16, height),
// //                     textAlign:'center',
// //                     color:'black',
// //                     fontFamily:'NanumGothic-ExtraBold'
// //                   }}> {data.desc}</Text>
      
// //     </View>
// //     <Text style={{ 
// //                     width:width/1.7,
// //                     marginTop:'-9%',
// //                     marginLeft:'38.8%',
// //                     fontSize:RFValue(35, height),
// //                     color:'black',
// //                     fontFamily:'Kanit-SemiBold'
// //                     }}> {data.desc2}</Text>
// //     <TouchableOpacity onPress={onEnd}>
// //         <View style={{
// //                       flexDirection:'row',
// //                       width:width-18,
// //                       marginLeft:9
// //                        }}>

// //         {/* <View style={{  
// //                         marginLeft:'60%',
// //                         height:50, 
// //                         width:width/3,
// //                         // marginTop:10, 
// //                         backgroundColor:'#57c3c4', 
// //                         borderRadius:25, 
// //                         alignItems:'center',
// //                         justifyContent:'center'
// //                         }}> */}
// //         <Text style={{
// //                         fontSize:RFValue(65, height),
// //                         marginLeft:'auto',
// //                         marginRight:'10%',
// //                         color:'#57c3c4',
// //                         fontFamily:'Quicksand-Regular',
                        
// //                         }}>
// //                   {`>>>`}
// //         </Text>
// //         {/* </View> */}
// //         </View>
        
// //     </TouchableOpacity>
// //   </View>
// //   </SafeAreaView>
// //   {/* </LinearGradient> */}
// //   </View>
// //             )
// // }


// //     return (
// //       <>
// //       <FlatList
// //               initialNumToRender={2}
// //               windowSize={2}
// //                 data={DATA}
// //                 onEndReached={onEnd}
// //                 horizontal
// //                 refreshing={true}
// //                 keyExtractor={({ id }, index) => id}
// //                 renderItem={({ item }) => {
// //                  return <Demo data={item} />;
// //              }}
// //            />
        
// //       </>
// //     );
// //   };
  
// //   const styles = StyleSheet.create({
// //     imageStyle: {
// //       width:width-18,
// //       marginLeft:8,
// //       resizeMode:'contain'
// //     },
// //     wrapper: {
// //       justifyContent: 'center',
// //       alignItems: 'center',
// //       marginVertical: 30,  
// //     },
// //     header: {
// //       fontSize: 40,
// //       marginBottom: 20,
// //       color:'#00C897',
// //       fontFamily:'Kanit-Bold'
// //     },
// //     paragraph: {
// //       fontSize: 17,
// //       color:'black',
// //       fontFamily:'Kanit-SemiBold'
// //     },
// //   });

// //   export default SplashScreen


// import { View, Text, Dimensions } from 'react-native'
// import React from 'react'
// import FlatListSlider from './FlatListSlider'
// import { FlatList } from 'react-native-gesture-handler'
// import Preview from './Preview'

// const{width, height} = Dimensions.get('window')
// const SplashScreen = () => {

//   const data =[
//        {
//         id:'1',
//         image: `https://i.ibb.co/4sXVP76/on-boarding-3.jpg`,
//         desc:'Make hassle-free payments'
//       },{
//         id:'2',
//         image:`https://i.ibb.co/4sXVP76/on-boarding-3.jpg`,
//         desc:'Shop for the health and beauty care needs from th comfort of your home'
//         },{
//           id:'3',
//           image:  `https://i.ibb.co/Nn1DwbL/3.jpg`,
//           desc:'Shop for the health and beauty care needs from th comfort of your home'
//       } ]



//   return (
//     <View style={{}}>
//           <FlatListSlider
//                data={data}
//                width={275}
//                timer={5000}
//                component={<Preview />}
//                onPress={item => alert(JSON.stringify(item))}
//                indicatorActiveWidth={40}
//                contentContainerStyle={{paddingHorizontal: 16}}
//           />
//     </View>
//   )
// }

// export default SplashScreen

import { 
        View, 
        Text, 
        Image, 
        Dimensions, 
        TouchableWithoutFeedback,
        StatusBar 
      } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

const {height, width} = Dimensions.get('window')
const data =[
         {
          id:'1',
          image: require('../image/onboard1.jpeg'),
          desc:'Make hassle-free payments'
        },{
          id:'2',
          image:  require('../image/onboard2.jpg'),
          desc:'Shop for the health and beauty care needs from the comfort of your home'
          },
        {
            id:'3',
            image:  require('../image/onboard3.jpg'),
            desc:'Get your orders delivered to you with ease'
        } ]
  


const SplashScreen = ({navigation, route}) => {

  const Demo = ({data}) => {
    // console.log(data)
    return (

      <View style={{
                    // justifyContent:'center', 
                    alignItems:'center',
                    height,
                    width,
                    // borderWidth:1
                    }}>
      <StatusBar  backgroundColor="#57c3c4"
                     animated={true}
                    />
        {/* <Text>SplashScreen</Text> */}
        <Image
            style={{
                    height:height/2,
                    width:width-20,
                    marginLeft:10,
                    marginTop:'30%'}}
            source={data.image}
            />
        <Text
              style={{
                      fontFamily:'Montserrat-SemiBold',
                      color:'black',
                      textAlign:'center'
                    }}
              >{data.desc}</Text>
      </View>
    )
  

 
}
return(
  <View style={{
                // justifyContent:'center', 
                alignItems:'center', 
                backgroundColor:'white', 
                height:height+40
                }}>
        <FlatList
        horizontal={true}
        data={data}
        keyExtractor={({id}, index) => index}
        renderItem={({ item }) => {
        return <Demo data={item} />;
        }}/>
        <View style={{justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
        <TouchableWithoutFeedback 
            onPress={() => navigation.replace("MyTabs")}>
        <Text style={{
                      position:'absolute',
                      bottom:160,
                      right:80,
                      color:'#57c3c4', 
                      fontFamily:'Montserrat-Bold',
                      textDecorationLine: "underline",
                      textDecorationStyle: "solid",
                      textDecorationColor: "#000",
                      fontSize:RFValue(28, height)
                      }}>Skip</Text>
        </TouchableWithoutFeedback>
        {/* <Text style={{
                      position:'absolute',
                      bottom:160,
                      left:60,
                      color:'black',
                      fontFamily:'Montserrat-Bold',
                      fontSize:RFValue(24, height)
                      }}>{' >>>'}</Text> */}
        {/* <View>               */}
        <Image
              style={{
                      height:20,
                      width:20,  
                      position:'absolute',
                      bottom:165,
                      left:110,
                    }}
              source={require('../image/arrow.png')}
              />
        <Image
              style={{
                      height:20,
                      width:20,  
                      position:'absolute',
                      bottom:165,
                      left:100,
                    }}
              source={require('../image/arrow.png')}
              />
        <Image
              style={{
                      height:20,
                      width:20,  
                      position:'absolute',
                      bottom:165,
                      left:90,
                    }}
              source={require('../image/arrow.png')}
              />
        {/* </View> */}
        </View>
    
  </View>
)

}

export default SplashScreen