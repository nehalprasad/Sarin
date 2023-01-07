import React, { Component } from 'react';
import { 
  ActivityIndicator,
  Linking,
  Image, 
  FlatList, 
  Text,
  ScrollView, 
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  PixelRatio
} from 'react-native';
import Neumorphism from 'react-native-neumorphism';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import PromationalProducts from '../HomeScreen/PromationalProducts';
import FlatListSlider from '../Default/FlatListSlider';
import Shop from '../HomeScreen/Shop';
import EnquiryForm from '../HomeScreen/EnquiryForm';
import Instagram from '../Instagram/Instagram';
const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()


export default class About extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      aboutData: [],
      isLoading: true,
      data: [
        {
          image:
          'https://i.ibb.co/xLpByvr/cartoon-doctor-little-girl-character-simple-cute-funny-illustration-106630241-removebg-preview.png',
          name: 'dr.doctor',
          id:'1',
          linking: 'https://instagram.com/imaappweb?igshid=YmMyMTA2M2Y='
        },
        {
          image:
            'https://i.ibb.co/c2qVXzR/animated-doctor-animated-pictures-of-a-doctor-11562922665japjgbanai-removebg-preview.png',
          desc:
            'dr.doctor',
            id:'2',
          linking: 'https://instagram.com/imaappweb?igshid=YmMyMTA2M2Y='
        },
      ],
    };
  }
  

  async getAboutUs() {
    try {
      const response = await fetch('https://app.sarinskin.com/api/about/');
      const json = await response.json();
      this.setState({
        isLoading: false,
        aboutData: json.data });
     
      // console.log(this.state.data)
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getAboutUs();
  }

  componentWillUnmount(){
    this.setState = (state,callback)=>{
      return;
  };
  }

  render() {
    
    if (this.state.isLoading) {

      return (
        <View  style={{
          flex: 1,
          justifyContent: "center",
          marginLeft:'auto',
          marginRight:'auto',
          marginTop:'25%',
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
     const finalAboutData  = this.state.aboutData

     const DemoData = ({data}) => {

      
      let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
     // console.log(data.image)
      // intiialize src with blank, if image not found it will set blank or default url
        // if (data.images.length > 0) 
        // {
        // src = data.images[0].src;
        // }
        var baseUrl = "https://app.sarinskin.com"

        var image = baseUrl + `${data.image}`
        var image2 = baseUrl + `${data.image2}`
        var image3 = baseUrl + `${data.image3}`
        var image4 = baseUrl + `${data.image4}`
        const navigation = useNavigation()
        return(
          // <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]}>
        <TouchableOpacity
        activeOpacity={0.8}
        style={{width}}>
  
                    {/* 1st Header  */}

                    <TouchableOpacity 
                    style={{
                          alignItems:'center',
                          justifyContent:'center'
                          }}
                    > 
                    <Text style={{
                        fontSize: RFValue(28, height),
                        textAlign:'center',
                        width:width-20,
                        color:'#57c3c4',
                        fontFamily:'Montserrat-Bold',
                        letterSpacing:1,
                        marginBottom:25,
                        marginLeft:10
                      }
                    }>
                      {data.heading1}</Text>       
                    {/* <View style={style.fitToWidth1th}> */}

                    <Image source={{uri: image}}  
                    style={{ 
                      width:width/1.07, 
                      height:height/3.3,
                      borderRadius:30,
                      resizeMode:'contain'
                      // marginLeft: '3%',
                      }}
                      />
                    {/* <View style={style.header1st}>   */}
                    <Text
                        style={{
                          // fontWeight:'bold',
                          textAlign:'center',
                          fontSize: RFValue(24, height),
                          // marginBottom:5,
                          letterSpacing:2,
                          color:'black',
                          fontFamily:'Montserrat-SemiBold',
                          marginTop:15,
                        }}>
                        {data.sub_heading1}
                    </Text>
                    <View style={{
                                  // borderWidth:1, 
                                  width:width-15, 
                                  marginLeft:7.5
                                }}>
                    <Text
                        style={{
                          color:'black',
                          fontSize: RFValue(16, height),
                          fontFamily:'Montserrat-Regular',
                        }}>
                        {data.description}
                    </Text>
                    </View>
                    </TouchableOpacity>
     
             <Shop/>
<PromationalProducts/>

<EnquiryForm/>


<Text style={{
              color:'#57c3c4',
              fontSize:RFValue(28, height), 
              // fontWeight:'bold', 
              marginLeft:'auto',
              marginRight:'auto', 
              marginTop:20,
              marginBottom:10,
              fontFamily:'Montserrat-Light'
            }}>
               Join Our Instagram Family
          </Text>
          <FlatListSlider
            data={this.state.data}
            width={width/1.3}
            timer={4000}
            component={<Preview />}
            onPress={
                            item => Linking.openURL(`${item.linking}`)
                        }
            indicatorActiveWidth={40}
            contentContainerStyle={style.contentStyle}
          />   
     <Instagram/>  
              </TouchableOpacity> 
            
              
  )}   //end of render
  

return (  // Start of View point in ScrollView
        <FlatList
        
          data={finalAboutData}
          listKey={({ id }, index) => id}
          renderItem={({ item }) => {
              return <DemoData data={item} />;
          }}
        />
           
);
  }}


const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
  width,
    },
    // ALl Heading
    header1:{
      marginTop:4,
      marginLeft:4,
      marginRight:4,
    },
    header2:{
      marginTop:4,
      marginLeft:4,
      marginRight:4,
    },
    header3:{
      borderWidth:2,
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:10,
      marginLeft:4,
      marginRight:4,
      
    },
    header4:{
      marginTop:4,
      marginLeft:4,
      marginRight:15,
      marginBottom:10
    },
    instagram:{color:'#00c897',
      fontSize:25, 
      fontWeight:'bold', 
      marginLeft:'auto',
       marginRight:'auto', 
      marginTop:20,
      marginBottom:10
    },
    //All Images
    image:{
        width:width-10, 
        height:300,
        borderRadius:30,
        marginLeft:5,
        resizeMode:'contain'
  },
  image2:{
    width, 
    height:400,
    borderRadius:30,
    marginLeft: 20,
    // marginRight: "auto",
    resizeMode:'contain'
},
  image3:{
    width:160, 
    height:200,
    borderRadius:30,
    marginLeft:5,
    marginBottom:5,
    resizeMode:'contain'
},
image4:{
  width:160, 
  height:200,
  borderRadius:30,
  marginRight:-5,
  resizeMode:'contain'
},
contentStyle: {
  paddingHorizontal: 16,
},

fitToWidth1th:{
  flexDirection: 'row',
  justifyContent: 'space-between',
},


  fitToWidth4th:{
  flexDirection: 'row',
  justifyContent: 'space-between',
},
header1st:{
width:"45%",
height:"100%",
marginLeft:7,
textAlign:'center',
marginRight:50,
},

container: {
      flex: 1,
      justifyContent: 'center',
      textAlign: 'center',
      paddingTop: 30,
      backgroundColor: '#ecf0f1',
      padding: 8,
    }, 
    activitycontainer:{
        flex: 1,
        justifyContent: "center"
      
    },

    heading1:{color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
      marginBottom:5,
      marginTop:5,
    },
    heading2:{color:'black',
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
      marginBottom:5,
      marginTop:5,
    },
    heading3:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
      marginBottom:5,
      marginLeft:80,
      marginTop:10,
      marginRight:5
    },
    heading4:{
      fontWeight:'bold',
      textAlign:'center',
      fontSize:20,
      marginBottom:5,
      marginTop:5,
    },
    ima:{
    width:'43%', 
    height:200,
    borderRadius:30,
    marginLeft:10,
    marginBottom:5,
    resizeMode:'contain'
    }
})