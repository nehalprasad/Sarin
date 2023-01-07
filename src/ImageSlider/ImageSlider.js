import React, { Component } from 'react';
import {  Dimensions,PixelRatio, SafeAreaView,
View, SafeAreaViewBase, TouchableOpacity} from 'react-native'
import Neumorphism from 'react-native-neumorphism';
import FlatListSlider from '../Default/FlatListSlider';

const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()
export class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
       {image: `https://app.sarinskin.com/media/SHOP-BY-PRODUCT-TYPE-2_fQvatGI.jpg`,
      },{
        image:
      `https://app.sarinskin.com/media/SHOP-BY-SKIN-OR-HAIR-CONCERN_D9wFHr1.jpg`,
        },{image:  `https://app.sarinskin.com/media/SHOP-BY-SKIN-TYPE_X6awS6z.jpg`,
      },{
        image:
      `https://app.sarinskin.com/media/baby-care-300x400_0be6KxK.jpg`,       
    } ]
    };
  }
  
  render() {

    const height1 = height/2.5
    return (
      <Neumorphism
      // style={{marginTop:"1%"}}
      lightColor={'#dddddd'}
      darkColor={'#dddddd'}
      shapeType={'flat'}
      radius={0}>

      <SafeAreaView> 
          <FlatListSlider
              data={this.state.data}
              height={height/3}
              timer={2000}
              onPress={() => console.log()}
              indicatorContainerStyle={{position:'absolute', bottom: 20}}
              indicatorActiveColor={'#8e44ad'}
              indicatorInActiveColor={'#ffffff'}
              indicatorActiveWidth={30}
              animation
              // style={{resizeMode:'stretch'}}
          />
          </SafeAreaView>
      </Neumorphism>
    )
  }
}

export default ImageSlider