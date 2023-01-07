import React, {Component} from 'react';
import {
    SafeAreaView,
    Dimensions,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Linking,
    Text,
    Alert
  } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Preview from './Preview';
import FlatListSlider from './FlatListSlider';
import Info from '../Info/Info';
import Members from '../Members/Members';
import { RFValue } from 'react-native-responsive-fontsize';
const {height,width} = Dimensions.get('window')

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data3:[],
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
            data1: [
              {
                image:
                  'https://sarinskin.com/wp-content/uploads/2021/11/SHOP-BY-SKIN-TYPE.jpg?id=4607',
                desc: '@dr.jushya_sarinskin',
              },
              {
                image:
                  'https://sarinskin.com/wp-content/uploads/2021/11/SHOP-BY-PRODUCT-TYPE-2.jpg?id=4609',
                desc:
                  '@dr.ankur',
              },
              {
                image:
                  'https://sarinskin.com/wp-content/uploads/2021/11/SHOP-BY-SKIN-OR-HAIR-CONCERN-img.jpg?id=4721',
                desc:
                  '@dr.ankur',
              },
              {
                image:
                  'https://i0.wp.com/sarinskin.com/wp-content/uploads/2022/03/baby-care.jpg?resize=370%2C493&ssl=1',
                desc:
                  '@dr.ankur',
              },
            ],
    };
  }


  shouldComponentUpdate(){
    const API_URL = "https://app.sarinskin.com/api/member/"

    fetch(API_URL)
    .then((response) => response.json())
    .then((responseJson) => {

      // console.log(responseJson.data)
      this.setState({
    data3:responseJson.data
      })
// setMemberData(responseJson.data)
    })

    .catch((error) => {
      console.log(error);
    });
    
  }
  render() {
    
    
    const date0 = this.state.data3
   

    const screenWidth = Math.round(Dimensions.get('window').width);
    return (
      <SafeAreaView style={{backgroundColor:'white'}}>
         {/* <LinearGradient colors={['#DFF6FF', '#F9F9F9', '#FCF9C6' ]} > */}
        <ScrollView>
          <View style={{height:'100%'}}>
          <FlatListSlider
            data={this.state.data1}
            timer={2000}
            imageKey={'image'}
            local={false}
            width={screenWidth}
            separator={0}
            loop={true}
            autoscroll={true}
            onPress={item => (JSON.stringify(item))}
            indicator
            animation
          />
          <View style={styles.separator} />
 
          <Text style={styles.instagram}>
               Meet Our Doctors
          </Text>
          <FlatListSlider
            data={this.state.data}
            width={275}
            timer={4000}
            component={<Preview />}
            onPress={
              item => this.props.navigation.navigate('Members',`${item.id}`)
                            // item => Alert.alert(`${item.id}`) 
                            // Linking.openURL(`${item.linking}`)
                        }
            indicatorActiveWidth={40}
            contentContainerStyle={styles.contentStyle}
          />
          <View style={[styles.separator,]}
          />

          {/* <Members/> */}
          {/* <FlatListSlider
            data={this.state.data}
            timer={5000}
            onPress={item => alert(JSON.stringify(item))}
            indicatorContainerStyle={{position:'absolute', bottom: 20}}
            indicatorActiveColor={'#8e44ad'}
            indicatorInActiveColor={'#ffffff'}
            indicatorActiveWidth={30}
            animation
          /> */}
          </View>
        </ScrollView>
        {/* </LinearGradient> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 20,
  },
  contentStyle: {
    paddingHorizontal: 16,
  },
  instagram:{
        fontSize:RFValue(30, height),
        letterSpacing:2, 
        color:'black',
        fontFamily:'Quicksand-Bold',
        // fontWeight:'bold', 
        marginLeft:'auto',
        marginRight:'auto', 
        marginTop:20,
        marginBottom:10
      }
});