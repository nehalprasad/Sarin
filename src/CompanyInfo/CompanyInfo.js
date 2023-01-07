import { Text, View,StyleSheet,FlatList,Image, Linking, TouchableOpacity, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('window')

export default function CompanyInfo() {

    const[data, setData] = useState([]);
    const [state, setState] = useState({});
    useEffect(() => 
    {

    var axios = require('axios');

            var config = {
            method: 'get',
            url: 'https://app.sarinskin.com/api/companyInfo/',
            };
        
            axios(config)
            .then((response) => {
            //  console.log(response.data.data)
                setData(response.data.data)

                // console.log(response.data.data[0].logo)

                const logo = response.data.data[0].logo

            // AsyncStorage.setItem("Logo", `https://app.sarinskin.com${logo}`)
            })
            .catch((error) => {
            console.log(error);
            }  );


            return () => {
                setState({}); // This worked for me
              };
            }, [])


            const Demo = ({data}) => 
            {

                return(
                    // <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]} >
                    <SafeAreaView style={style.container}>
                          
                        {/* LOGO */}
                        <Image 
                            style={style.logo}
                            source ={{uri : `https://app.sarinskin.com${data.logo}`}}/>

                        {/* Address */}
                        <Text style={style.head}>Address:</Text>
                        <Text style={style.address}>
                             {data.address}</Text>


                        {/* Email-Id */}
                        <View style={{flexDirection:'row'}}>
                          
                            <TouchableOpacity 
                            onPress={() => 
                            Linking.openURL(`mailto:${data.email_address}?subject=Help Center&body=I would like to share my concern `)}
                        >
                            <Image  style={style.mail}
                                source={require('../image/email.png')}/>
                                  <Text style={style.title}>
                            {data.email_address}
                            </Text>
                        </TouchableOpacity>
                        </View>
                       
                        
                        {/* Facebook */}
                        <TouchableOpacity 
                            onPress={() => Linking.openURL(`${data.facebook_url}`)}
                        >
                            <Image  style={style.facebook}
                                source={{uri:"https://cdn-icons-png.flaticon.com/512/1077/1077041.png"}}/>
                                <Text style={style.title}>
                                {data.facebook_url}
                            </Text>

                        </TouchableOpacity>
               

                        {/* Instagram */}
                        <TouchableOpacity 
                            onPress={() => Linking.openURL(`${data.instagram_url}`)}
                        >
                            <Image  style={style.instagram}
                                source={require('../image/instagram.png')}/>
                                <Text style={style.title}>
                                {data.instagram_url}
                            </Text>
                        </TouchableOpacity>
               
           
                        {/* Landline */}
                        <TouchableOpacity 
                            onPress={() => Linking.openURL(`tel:${data.landline_number}`)}
                        >
                            <Image  style={style.landline}
                                source={require('../image/landline.png')}/>
                                 <Text style={style.title}>
                                 {data.landline_number}
                            </Text>
                        </TouchableOpacity>
               
               
               
                        {/* Phone Number */}
                        <TouchableOpacity 
                            onPress={() => Linking.openURL(`tel:${data.phone_number}`)}
                        >
                            <Image  style={style.call}
                                source={{uri:"https://cdn-icons-png.flaticon.com/512/126/126509.png"}}/>
                                 <Text style={style.title}>
                                 {data.phone_number}
                            </Text>
                        </TouchableOpacity>
          
          
              {/* Whatsapp */}
                        
                        <TouchableOpacity 
                            onPress={() => Linking.openURL(`whatsapp://send?text=hello&phone==+91${data.phone_number}`)}
                        >
                            <Image  style={style.call}
                                source={require('../image/whatsapp.png')}/>
                                 <Text style={style.title}>
                                 {data.phone_number}
                            </Text>
                        </TouchableOpacity>


                    </SafeAreaView> 
         
                    )
            }

        return (
            <FlatList data={data}
            style={{
                height:height*2
            }}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => {
                return <Demo data={item} key={item.id} />;
            }} 
            />      
            )
    }

const style = StyleSheet.create({
    container:{
        height:height,
        backgroundColor:'white'
    },
    head:{
        fontSize:RFValue(22, height),
        color:'black',
        marginLeft:20,
        fontFamily:'Quicksand-Bold'
      
    },
       address:{
        fontSize:RFValue(16, height),
        color:'#57c3c4',
        marginLeft:20,
        width:width-30,
        fontFamily:'Kanit-SemiBold'
       },
    
        company:{
            fontSize:20,
            fontWeight:'bold',
            marginTop:10,
            marginLeft:10,
            textAlign:'center'
        },
        logo:{
            height:100,
            width:100,
            marginTop:5,
            resizeMode:'contain',
            marginLeft:'35%',
            tintColor:'#57c3c4'
        },
        
        call:{
            height:35,
            width:35,
            resizeMode:'contain',
            tintColor:'black',
            marginTop:35,
            marginLeft:'6%'
        },
        facebook:{
            height:35,
            width:35,
            marginTop:35,
            resizeMode:'contain',
            marginLeft:'6%',
        },
        mail:{
            height:35,
            width:35,
            marginTop:15,
            resizeMode:'contain',
            marginLeft:'8%',
            tintColor:'black'
        },
        instagram:{
            height:35,
            width:35,
            resizeMode:'contain',
            tintColor:'black',
            marginTop:35,
            marginLeft:'6%'
            },
        landline:{
            height:35,
            width:35,
            resizeMode:'contain',
            tintColor:'black',
            marginTop:35,
            marginLeft:'6%'
        },
        title:{
            marginLeft:100, 
            marginTop:-32, 
            fontSize:RFValue(16, height),
            color:'#57c3c4',
            fontFamily:'Quicksand-SemiBold'
        }
    })
