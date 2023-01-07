import { View, 
        Text, 
        StyleSheet,
        TouchableOpacity, 
        Image, 
        FlatList, 
        ActivityIndicator, 
        Dimensions} from 'react-native'
import Category_Data from '../Category/Category_Data'
import ImageSlider from '../ImageSlider/ImageSlider'
import About from './About'
import {ScrollView } from 'react-native-virtualized-view'
import LinearGradient from 'react-native-linear-gradient'
import PromationalProducts from '../HomeScreen/PromationalProducts'
import Shop from '../HomeScreen/Shop'
import { useScrollToTop } from '@react-navigation/native';
import CategeoriesFlatlist from '../HomeScreen/CategeoriesFlatlist'
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Blog from '../Blogs/Blog'
const {width, height} = Dimensions.get('window')

import React, { PureComponent } from 'react'
import Working from '../HomeScreen/Working'
import Blog from '../Blogs/Blog'

export class VirtualizedScrollView extends PureComponent {
  constructor(props) {
    super(props)
  
    this.state = {
       isloading:true
    }
  }


  
  render() {
    

    if(this.state.isloading == false){
      return(
        <View>
          <ActivityIndicator size="large"/>
        </View>
      )
    }
else{
  return (
      <>
    <ScrollView style={style.container}>
       
        <ImageSlider/>
        <Working/>
{/* <Blog/> */}


        {/* <CategeoriesFlatlist/> */}
    



    <About/>
    

    </ScrollView>
   
    </>
  )
}}
}

 // Start of styling
const style = StyleSheet.create({
container:{
  backgroundColor:'white',
  height:'100%',
  // marginBottom:'10%'
  },
})
  
export default VirtualizedScrollView
