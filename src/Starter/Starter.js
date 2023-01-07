import { Dimensions, Text, View, Image, ActivityIndicator, StatusBar} from 'react-native'
import React, { Component } from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import Neumorphism from 'react-native-neumorphism'
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const {height, width} = Dimensions.get('window')


export class Starter extends Component {
  render() {
    return (
      
      <View style={{
                    backgroundColor:'#57c3c4', 
                    height, 
                    width,
                    }}>

<StatusBar  backgroundColor="#57c3c4"
                     animated={true}
                    />
         <View style={{
                        flexDirection:'column',
                        alignItems:'center',
                        marginTop:'auto',
                        marginBottom:'auto'                        
                        }}> 

         <Image 
                style={{
                        height:height/8, 
                        width:width/3,
                        tintColor:'white'
                      }}
                source={require('../image/logo.png')}
            />

          <UIActivityIndicator
                        size={45}
                        color='white'
                        style={{marginTop:35}}/>      
          </View>             
      </View>
    )
  }
}

export default Starter