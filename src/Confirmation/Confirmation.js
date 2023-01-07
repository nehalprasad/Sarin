import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Neumorphism from 'react-native-neumorphism'


export default function Confirmation({navigation, route}) {

    const {data, raz} = route.params
    console.log("Confirmation Page")

    console.log(raz)

    // var Confirmation_id = data.id
    // var Transaction_id = data.transaction_id

    // var Method = data.payment_method_title
   console.log(data)
  return (
    <View style={style.view}>
        <Text style={style.header}>
            Order Is Created
        </Text>
      <Text style={style.details}>Order id:   
         {/* {Confirmation_id} */}
      </Text>
      <Text style={style.details}>Transaction id:   
        {/* {Transaction_id} */}
      </Text>
      <Text style={style.details}>Delivery Method:  
           {/* {Method} */}
      </Text>




      <TouchableOpacity 
         onPress={() => navigation.navigate('Home')}    
          >
        <Neumorphism
          style={style.freshbtn}
          lightColor={'#dedddd'}
          darkColor={'#979797'}
          shapeType={'flat'}
          radius={25}
        >
          <Text style={style.loginText}>
          Let's Start Again
          </Text>

</Neumorphism>
          
      </TouchableOpacity>

    </View>
  )
}



const style = StyleSheet.create({
    freshbtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 50,
        backgroundColor: "#79DAE8",
        marginBottom:15,
        paddingLeft:80,
        paddingRight:80,
        marginLeft:35,
        

      },
      
      fresh:{
        height:40,
        width:200,
        textAlign:'center',
        paddingTop:5,
        fontSize:20,
        fontWeight:'bold',
        backgroundColor: "#79DAE8",
          
    },
      view:{
        flex: 1,
        backgroundColor: "#ffffff",
        // alignItems: "center",
        // justifyContent: "center",
        marginTop:"-20%"
      },
      header:{
          fontSize:20,
          marginTop:100,
          fontWeight:'bold',
          marginLeft:"28%"
      },
      details:{
        fontSize:15,
        paddingTop:5,
        marginBottom:10,
        paddingLeft:10,
        // borderWidth:2,
        width:"90%",
        fontWeight:'bold',
        marginLeft:18,
        marginRight:10,
        marginTop:10,
        fontStyle:'italic' ,
 
    }

})