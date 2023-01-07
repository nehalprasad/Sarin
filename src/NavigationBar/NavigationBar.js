import { 
  View, 
  Text, 
  Image,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Linking, Dimensions } from 'react-native'
import SplashScreen from '../SplashScreen/SplashScreen';
import React,{useEffect, useState, PureComponent} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OrderedProductInfo from '../Orders/OrderedProductInfo';
import HomeScreen from '../Screens/HomeScreen';
import Category_Data from '../Category/Category_Data';
import SubCategory_Data from '../SubCategory/SubCategories';
import ProductDetails from '../Screens/ProductDetails';
import Products_data from '../Products/Products_data';
import Buy from '../Buy/Buy';
import Neumorphism from 'react-native-neumorphism';
import Products from '../Products/Products_data'
import AddToCart from '../Cart/AddToCart';
import Instagram from '../Instagram/Instagram';
import ImageSlider from '../ImageSlider/ImageSlider';
import About from '../Screens/About';
import Database from '../DataBase/Database';
import { useNavigation } from '@react-navigation/native';
import Shoplist from '../Products/Data';
import OrderDetail from '../Buy/OrderDetails';
import Test from '../Default/App';
import Info from '../Info/Info';
import Confirmation from '../Confirmation/Confirmation';
import ProductInfo from '../Orders/ProductInfo';
    // UserDetails
import UserDetails from '../UserDetails/UserDetails';
import LoginPage from '../Login/Login';
import Register  from '../Register/Register';
import PromationalProducts from '../HomeScreen/PromationalProducts';
import NowBuy from '../Buy/NowBuy';

import AllOrders from '../Orders/AllOrders';
import Otp from '../OTP/Otp';
import BottomTab from '../BottomTabs/BottomTab';

import CompanyInfo from '../CompanyInfo/CompanyInfo';
import AllPayment from '../Payment/AllPayment';
import Notification from '../Notification/Notification';
import Fresh from '../Buy/Test';
import MyTabs from '../Tab/HomeTab'
import Review from '../Review/Review';
import Shop from '../HomeScreen/Shop';
import SearchBar from '../SearchBar/SearchBar';
import EnquiryForm from '../HomeScreen/EnquiryForm';
import Members from '../Members/Members';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Starter from '../Starter/Starter';
import { act } from 'react-test-renderer';
import Working from '../HomeScreen/Working';
import ExerciseList from '../Exercise/ExerciseList';
import Blog from '../Blogs/Blog';
import { RFValue } from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window')

const Stack = createNativeStackNavigator();

export default function NavigationBar() {

const [token , setToken] = useState()
const [isSignout , setisSignout] = useState(false);
const [isLoading, setIsLoading] = useState(true)
const [CartQuantityValue, setCartQuantityValue] = useState()
const [NotificationLength, setNotificationLength] = useState()
const [state, setState] = useState({}); 


const Confirmation =  async() => {
    
      const jsonValue1 = await AsyncStorage.getItem("UserToken")
      const USERTOKEN = JSON.parse(jsonValue1)
      setToken(USERTOKEN)
      setIsLoading(false)

      const CartQuantity = await AsyncStorage.getItem('CartQuantity')
      setCartQuantityValue(CartQuantity)
      // console.log(CartQuantity)

      const Notification = await AsyncStorage.getItem('Notification')
      setNotificationLength(Notification)

}

useEffect(() => {

  Confirmation()
  return () => {
    setState({}); // This worked for me
  };
},[])

 
  const navigation = useNavigation();

  return (

        <Stack.Navigator>
              {isLoading ? (
                          <Stack.Screen  options={{headerShown: false}} name='Starter' component={Starter}/>
              ) : token == null ? (
          <>
                          <Stack.Screen  options={{headerShown: false}} name='SplashScreen' component={SplashScreen}/>
                          <Stack.Screen  options={{headerShown: false}}  name="MyTabs" component={MyTabs} />
    
                          <Stack.Screen  
                                  name="Home" component={BottomTab}
                                  options={{
                                          headerTitle: (props) => ( // App Logo
                                              <View style= {{flexDirection:'row'}}>
                                                      <TouchableOpacity 
                                                          style={style.logo1}
                                                          // onPress={() => navigation.navigate('Home')}
                                                          >  
                                                      <Image
                                                          style={style.logo}
                                                          source={require('../image/logo.png')}
                                                      />
                                                      </TouchableOpacity>
                                                                {/* Search */}

                                                      <TouchableOpacity style={style.search1}
                                                          onPress={() => navigation.navigate('SearchBar')}> 
                                                                              
                                                      <Image  style={style.search}
                                                          source={require('../image/search.png')}/>
                                                      </TouchableOpacity>
                                                  {/* Notifications */}
                                                      <TouchableOpacity style={style.notify1}
                                                          onPress={() => navigation.navigate('NOTIFICATIONS')}>
                                                      <Image  style={style.notify}
                                                        source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}/>
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(50, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:-28,
                                                                    left:16
                                                                    }}>.</Text>
                                                      </TouchableOpacity>
                                                  {/* AddToCart */}
                                                      <TouchableOpacity 
                                                        style={style.cart1}
                                                        onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                        style={style.cart}
                                                        source={require('../image/cart.png')}
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      {/* <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(24, height),
                                                                    top:4
                                                                    }}></Text> */}
                                                      </TouchableOpacity>
                                              </View>
                                    ),headerTitleStyle: { flex: 1, textAlign: 'center' },}}
                          />

                          <Stack.Screen name="Review" component={Review}/>
            
            {/* <Stack.Screen  options={{headerShown: false}}  name="MyTabs" component={MyTabs}/> */}
          
                
                          <Stack.Screen 
                                        name="Category" component={Category_Data}
                                        options={{ 
                                          headerTitle: (props) => ( // App Logo
                                          <>
                                                <Text style={{
                                                            fontSize:RFValue(18, height),
                                                            marginLeft:'-12%',
                                                            fontFamily:'NanumGothic-Bold',
                                                            color:'#57c3c4'
                                                            }}>
                                                    CATEGORIES
                                                </Text>
                                                    <TouchableOpacity 
                                                                    style={{
                                                                          height: height/15, 
                                                                          width:28,
                                                                          justifyContent:'space-around',
                                                                          marginLeft:"56%"
                                                                        }}
                                                                    onPress={() => navigation.navigate('AddToCart')}>
                                                          <Image
                                                                style={{ 
                                                                      height: height/19, 
                                                                      width:28,
                                                                      resizeMode:'contain',
                                                                      tintColor:"#57c3c4",
                                                                      }}
                                                                      source={require('../image/cart.png')}
                                                          />
                                                          <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                    </TouchableOpacity>
                                          </>
                                              ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                            }}
                           />

                          <Stack.Screen name= "ExerciseList" component={ExerciseList}
                                  options={{ 
                                    headerTitle: (props) => ( // App Logo
                                    <>
                                        <Text style={{
                                                    fontSize:RFValue(18, height),
                                                    marginLeft:'-12%',
                                                    fontFamily:'NanumGothic-Bold',
                                                    color:'#57c3c4'
                                                    }}>
                                        EXERCISES
                                        </Text>
                                            <TouchableOpacity 
                                                  style={{
                                                    height: height/15, 
                                                    width:28,
                                                    justifyContent:'space-around',
                                                    marginLeft:"61%"
                                                  }}
                                                  onPress={() => navigation.navigate('AddToCart')}>
                                            <Image
                                                  style={{ 
                                                        height: height/19, 
                                                        width:28,
                                                        resizeMode:'contain',
                                                        tintColor:"#57c3c4",
                                                        }}
                                                        source={require('../image/cart.png')}
                                            />
                                             <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                            </TouchableOpacity>
                                    </>
                                        ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                       }}

                          />
                          <Stack.Screen name= "Working" component={Working}/>

                          <Stack.Screen
                                        name= "SubCategory" component={SubCategory_Data}
                                        options={{ 
                                              headerTitle: (props) => ( // App Logo
                                              <>
                                                  <Text 
                                                        style={{
                                                              fontSize:RFValue(18, height),
                                                              marginLeft:'-12%',
                                                              fontFamily:'NanumGothic-Bold',
                                                              color:'#57c3c4'
                                                              }}>
                                                  CATEGORY
                                                  </Text>
                                                      <TouchableOpacity 
                                                                      style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"59%"
                                                                      }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                              </>
                                                  ),
                                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                                                }}
                          />
          
          
          
                          <Stack.Screen name= "VIEW ALL" component={Blog}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                                <Text style={{
                                                            fontSize:RFValue(18, height),
                                                            marginLeft:'-12%',
                                                            fontFamily:'NanumGothic-Bold',
                                                            color:'#57c3c4'
                                                            }}>
                                                VIEW ALL
                                                </Text>
                                                    <TouchableOpacity 
                                                                    style={{
                                                                      height: height/15, 
                                                                      width:28,
                                                                      justifyContent:'space-around',
                                                                      marginLeft:"64%"
                                                                    }}
                                                                    onPress={() => navigation.navigate('AddToCart')}>
                                                        <Image
                                                              style={{ 
                                                                    height: height/19, 
                                                                    width:28,
                                                                    resizeMode:'contain',
                                                                    tintColor:"#57c3c4",
                                                                    }}
                                                                    source={require('../image/cart.png')}
                                                        />
                                                         <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                    </TouchableOpacity>
                                            </>
                              ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                               }}
                          />


                          <Stack.Screen name='Instagram' component={Instagram}/>
                          <Stack.Screen 
                                        name="Products_data" component={Products_data}
                                              options={{ 
                                                headerTitle: (props) => ( // App Logo
                                                <>
                                                    <Text style={{
                                                                fontSize:RFValue(18, height),
                                                                marginLeft:'-12%',
                                                                fontFamily:'NanumGothic-Bold',
                                                                color:'#57c3c4'
                                                                }}>
                                                    PRODUCT's
                                                    </Text>
                                                        <TouchableOpacity 
                                                              style={{
                                                                height: height/15, 
                                                                width:28,
                                                                justifyContent:'space-around',
                                                                marginLeft:"59%"
                                                              }}
                                                              onPress={() => navigation.navigate('AddToCart')}>
                                                        <Image
                                                              style={{ 
                                                                    height: height/19, 
                                                                    width:28,
                                                                    resizeMode:'contain',
                                                                    tintColor:"#57c3c4",
                                                                    }}
                                                                    source={require('../image/cart.png')}
                                                        />
                                                         <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                        </TouchableOpacity>
                                                 </>
                                        ),
                                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                          />



                          <Stack.Screen 
                                      name="ProductsDetails" component={ProductDetails}
                                            options={{ 
                                                headerTitle: (props) => 
                                                  ( // App Logo
                                                <>
                                                  <Text style={{
                                                              fontSize:RFValue(18, height),
                                                              marginLeft:'-12%',
                                                              fontFamily:'NanumGothic-Bold',
                                                              color:'#57c3c4'
                                                              }}>
                                                    PRODUCT DETAILS
                                                  </Text>
                                                      <TouchableOpacity 
                                                            style={{
                                                              height: height/15, 
                                                              width:28,
                                                              justifyContent:'space-around',
                                                              marginLeft:"40%"
                                                            }}
                                                            onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                        <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                                  </>
                                                  ),
                                          headerTitleStyle: { flex: 1, textAlign: 'center' },
                                            }}
                            />
                  
                          <Stack.Screen name="AllPayment" component={AllPayment}/>
                          
                          <Stack.Screen name="NowBuy" component={NowBuy}/>

                          <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />
                          
                          <Stack.Screen name= "Members" component={Members}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                            DOCTOR's
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"63%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                  <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                            </>
                                            ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                          
                          />
          
                          <Stack.Screen name= "BuyNow" component={Buy}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                          ADD ADDRESS
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"51%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                   <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                            </>
                                            ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}

                                      />
                  
                        <Stack.Screen name= "Products" component={Products}/>
                        <Stack.Screen name= "AddToCart" component={AddToCart}

                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                              {/* <View
                                                  style={{
                                                    height: height/15, 
                                                    width:40,
                                                    justifyContent:'space-around',
                                                    marginLeft:"75%"
                                                  }}
                                                    >
                                                  <TouchableOpacity style={{
                                                                            height: height/15, 
                                                                            width:28,
                                                                            justifyContent:'center',
                                                                            // marginLeft:'600%',
                                                                            // borderWidth:2
                                                                           
                                                                          }}
                                                          onPress={() => navigation.navigate('NOTIFICATIONS')}>
                                                      <Image  style={{
                                                                      height: height/19, 
                                                                      width:28,
                                                                      resizeMode:'contain',
                                                                      tintColor:"#57c3c4",}}
                                                        source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}/>
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(100, height),
                                                                    bottom:7,
                                                                    left:12
                                                                    }}>.</Text>
                                                      </TouchableOpacity>

                                              </View> */}
                                        </>
                                          ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                        />
                  
                        <Stack.Screen name= "Fresh" component={Fresh}/>
                        <Stack.Screen name= "Shop" component={Shop}/>
                        <Stack.Screen name= "PromationalProducts" component={PromationalProducts}/>
                
                        <Stack.Screen name= "Info" component={Info}/>
                
                        <Stack.Screen name= "SearchBar" component={SearchBar}
                               options={{ 
                                headerTitle: (props) => 
                                  ( // App Logo
                                <>
                                      <View
                                          style={{
                                            // height: height/15, 
                                            // width:40,
                                            justifyContent:'space-around',
                                            // marginLeft:"63%"
                                            flexDirection:'row'
                                          }}
                                            >
                                              <TouchableOpacity 
                                                             style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"65%"
                                                                    }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}
                                                                 
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(50, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:-28,
                                                                    left:16
                                                                    }}>.</Text>
                                                      </TouchableOpacity>
                                           <TouchableOpacity 
                                                             style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"5%"
                                                                    }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                        <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                      </View>
                                </>
                                  ),
                              headerTitleStyle: { flex: 1, textAlign: 'center' },
                              }}
                              />
                
                
                        <Stack.Screen name= "ImageSlider" component={ImageSlider}/>
                        <Stack.Screen name= "About" component={About}/>
                        <Stack.Screen name= "Database" component={Database}/>
                
                        <Stack.Screen name= "Confirmation" component={Confirmation}/>
                
                        <Stack.Screen name= "NOTIFICATIONS" component={Notification}

                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                              {/* <Text style={{
                                                          fontSize:RFValue(18, height),
                                                          marginLeft:'-12%',
                                                          fontFamily:'NanumGothic-Bold',
                                                          color:'#57c3c4'
                                                          }}>
                                                NOTIFICATIONS
                                              </Text>
                                                  <TouchableOpacity 
                                                        style={{
                                                          height: height/15, 
                                                          width:28,
                                                          justifyContent:'space-around',
                                                          marginLeft:"52%"
                                                        }}
                                                        onPress={() => navigation.navigate('AddToCart')}>
                                                  <Image
                                                        style={{ 
                                                              height: height/19, 
                                                              width:28,
                                                              resizeMode:'contain',
                                                              tintColor:"#57c3c4",
                                                              }}
                                                              source={require('../image/cart.png')}
                                                  />
                                                   <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(100, height),
                                                                    bottom:7,
                                                                    left:19
                                                                    }}>.</Text>
                                                </TouchableOpacity> */}
                                          </>
                                          ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                        />


          
                        <Stack.Screen name= "OrderedProductInfo" component={OrderedProductInfo}
                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                          <Text style={{
                                                      fontSize:RFValue(18, height),
                                                      marginLeft:'-12%',
                                                      fontFamily:'NanumGothic-Bold',
                                                      color:'#57c3c4'
                                                      }}>
                                        ORDER's INFO
                                          </Text>
                                              <TouchableOpacity 
                                                    style={{
                                                      height: height/15, 
                                                      width:28,
                                                      justifyContent:'space-around',
                                                      marginLeft:"52%"
                                                    }}
                                                    onPress={() => navigation.navigate('AddToCart')}>
                                              <Image
                                                    style={{ 
                                                          height: height/19, 
                                                          width:28,
                                                          resizeMode:'contain',
                                                          tintColor:"#57c3c4",
                                                          }}
                                                          source={require('../image/cart.png')}
                                              />
                                                 <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                              </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
                        />
                 
          
           
                        <Stack.Screen name= "ProductInfo" component={ProductInfo}/>
                
                        <Stack.Screen  options={{headerShown: false}} name="CompanyInfo" component={CompanyInfo}/>
                
                        
                        <Stack.Screen name='User Details' component={UserDetails}/>
                        <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
                        <Stack.Screen options={{headerShown: false}} name= "Login" component={LoginPage} />
          
                  
                        <Stack.Screen name='AllOrders' component={AllOrders}
                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                          <Text style={{
                                                      fontSize:RFValue(18, height),
                                                      marginLeft:'-12%',
                                                      fontFamily:'NanumGothic-Bold',
                                                      color:'#57c3c4'
                                                      }}>
                                        ORDER's
                                          </Text>
                                              <TouchableOpacity 
                                                    style={{
                                                      height: height/15, 
                                                      width:28,
                                                      justifyContent:'space-around',
                                                      marginLeft:"67%"
                                                    }}
                                                    onPress={() => navigation.navigate('AddToCart')}>
                                              <Image
                                                    style={{ 
                                                          height: height/19, 
                                                          width:28,
                                                          resizeMode:'contain',
                                                          tintColor:"#57c3c4",
                                                          }}
                                                          source={require('../image/cart.png')}
                                              />
                                               <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                              </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
                      />
                  
                      <Stack.Screen name='EnquiryForm' component={EnquiryForm}/>
            
                
                
                
                      <Stack.Screen name="Shoplist" component={Shoplist}/>
                      <Stack.Screen name= "OrderDetail" component={OrderDetail}
                                    options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                              PAYMENT
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"64%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                  <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
     
                      />
                      <Stack.Screen name="Test" component={Test}/>
        </>



        ): (




        <>
       
                          <Stack.Screen  
                                  name="Home" component={BottomTab}
                                  options={{
                                          headerTitle: (props) => ( // App Logo
                                              <View style= {{flexDirection:'row'}}>
                                                      <TouchableOpacity 
                                                          style={style.logo1}
                                                          // onPress={() => navigation.navigate('Home')}
                                                          >  
                                                      <Image
                                                          style={style.logo}
                                                          source={require('../image/logo.png')}
                                                      />
                                                      </TouchableOpacity>
                                                                {/* Search */}

                                                      <TouchableOpacity style={style.search1}
                                                          onPress={() => navigation.navigate('SearchBar')}> 
                                                                              
                                                      <Image  style={style.search}
                                                          source={require('../image/search.png')}/>
                                                      </TouchableOpacity>
                                                  {/* Notifications */}
                                                      <TouchableOpacity style={style.notify1}
                                                          onPress={() => navigation.navigate('NOTIFICATIONS')}>
                                                      <Image  style={style.notify}
                                                        source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}/>
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(50, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:-28,
                                                                    left:16
                                                                    }}>.</Text>
                                                      </TouchableOpacity>
                                                  {/* AddToCart */}
                                                      <TouchableOpacity 
                                                        style={style.cart1}
                                                        onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                        style={style.cart}
                                                        source={require('../image/cart.png')}
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      {/* <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(24, height),
                                                                    top:4
                                                                    }}></Text> */}
                                                      </TouchableOpacity>
                                              </View>
                                    ),headerTitleStyle: { flex: 1, textAlign: 'center' },}}
                          />

                          <Stack.Screen name="Review" component={Review}/>
            
            {/* <Stack.Screen  options={{headerShown: false}}  name="MyTabs" component={MyTabs}/> */}
          
                
                          <Stack.Screen 
                                        name="Category" component={Category_Data}
                                        options={{ 
                                          headerTitle: (props) => ( // App Logo
                                          <>
                                                <Text style={{
                                                            fontSize:RFValue(18, height),
                                                            marginLeft:'-12%',
                                                            fontFamily:'NanumGothic-Bold',
                                                            color:'#57c3c4'
                                                            }}>
                                                    CATEGORIES
                                                </Text>
                                                    <TouchableOpacity 
                                                                    style={{
                                                                          height: height/15, 
                                                                          width:28,
                                                                          justifyContent:'space-around',
                                                                          marginLeft:"56%"
                                                                        }}
                                                                    onPress={() => navigation.navigate('AddToCart')}>
                                                          <Image
                                                                style={{ 
                                                                      height: height/19, 
                                                                      width:28,
                                                                      resizeMode:'contain',
                                                                      tintColor:"#57c3c4",
                                                                      }}
                                                                      source={require('../image/cart.png')}
                                                          />
                                                          <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                    </TouchableOpacity>
                                          </>
                                              ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                            }}
                           />

                          <Stack.Screen name= "ExerciseList" component={ExerciseList}
                                  options={{ 
                                    headerTitle: (props) => ( // App Logo
                                    <>
                                        <Text style={{
                                                    fontSize:RFValue(18, height),
                                                    marginLeft:'-12%',
                                                    fontFamily:'NanumGothic-Bold',
                                                    color:'#57c3c4'
                                                    }}>
                                        EXERCISES
                                        </Text>
                                            <TouchableOpacity 
                                                  style={{
                                                    height: height/15, 
                                                    width:28,
                                                    justifyContent:'space-around',
                                                    marginLeft:"61%"
                                                  }}
                                                  onPress={() => navigation.navigate('AddToCart')}>
                                            <Image
                                                  style={{ 
                                                        height: height/19, 
                                                        width:28,
                                                        resizeMode:'contain',
                                                        tintColor:"#57c3c4",
                                                        }}
                                                        source={require('../image/cart.png')}
                                            />
                                             <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                            </TouchableOpacity>
                                    </>
                                        ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                       }}

                          />
                          <Stack.Screen name= "Working" component={Working}/>

                          <Stack.Screen
                                        name= "SubCategory" component={SubCategory_Data}
                                        options={{ 
                                              headerTitle: (props) => ( // App Logo
                                              <>
                                                  <Text 
                                                        style={{
                                                              fontSize:RFValue(18, height),
                                                              marginLeft:'-12%',
                                                              fontFamily:'NanumGothic-Bold',
                                                              color:'#57c3c4'
                                                              }}>
                                                  CATEGORY
                                                  </Text>
                                                      <TouchableOpacity 
                                                                      style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"59%"
                                                                      }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    // bottom:7,
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                              </>
                                                  ),
                                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                                                }}
                          />
          
          
          
                          <Stack.Screen name= "VIEW ALL" component={Blog}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                                <Text style={{
                                                            fontSize:RFValue(18, height),
                                                            marginLeft:'-12%',
                                                            fontFamily:'NanumGothic-Bold',
                                                            color:'#57c3c4'
                                                            }}>
                                                VIEW ALL
                                                </Text>
                                                    <TouchableOpacity 
                                                                    style={{
                                                                      height: height/15, 
                                                                      width:28,
                                                                      justifyContent:'space-around',
                                                                      marginLeft:"64%"
                                                                    }}
                                                                    onPress={() => navigation.navigate('AddToCart')}>
                                                        <Image
                                                              style={{ 
                                                                    height: height/19, 
                                                                    width:28,
                                                                    resizeMode:'contain',
                                                                    tintColor:"#57c3c4",
                                                                    }}
                                                                    source={require('../image/cart.png')}
                                                        />
                                                         <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                    </TouchableOpacity>
                                            </>
                              ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                               }}
                          />


                          <Stack.Screen name='Instagram' component={Instagram}/>
                          <Stack.Screen 
                                        name="Products_data" component={Products_data}
                                              options={{ 
                                                headerTitle: (props) => ( // App Logo
                                                <>
                                                    <Text style={{
                                                                fontSize:RFValue(18, height),
                                                                marginLeft:'-12%',
                                                                fontFamily:'NanumGothic-Bold',
                                                                color:'#57c3c4'
                                                                }}>
                                                    PRODUCT's
                                                    </Text>
                                                        <TouchableOpacity 
                                                              style={{
                                                                height: height/15, 
                                                                width:28,
                                                                justifyContent:'space-around',
                                                                marginLeft:"59%"
                                                              }}
                                                              onPress={() => navigation.navigate('AddToCart')}>
                                                        <Image
                                                              style={{ 
                                                                    height: height/19, 
                                                                    width:28,
                                                                    resizeMode:'contain',
                                                                    tintColor:"#57c3c4",
                                                                    }}
                                                                    source={require('../image/cart.png')}
                                                        />
                                                         <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                        </TouchableOpacity>
                                                 </>
                                        ),
                                        headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                          />



                          <Stack.Screen 
                                      name="ProductsDetails" component={ProductDetails}
                                            options={{ 
                                                headerTitle: (props) => 
                                                  ( // App Logo
                                                <>
                                                  <Text style={{
                                                              fontSize:RFValue(18, height),
                                                              marginLeft:'-12%',
                                                              fontFamily:'NanumGothic-Bold',
                                                              color:'#57c3c4'
                                                              }}>
                                                    PRODUCT DETAILS
                                                  </Text>
                                                      <TouchableOpacity 
                                                            style={{
                                                              height: height/15, 
                                                              width:28,
                                                              justifyContent:'space-around',
                                                              marginLeft:"40%"
                                                            }}
                                                            onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                        <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                                  </>
                                                  ),
                                          headerTitleStyle: { flex: 1, textAlign: 'center' },
                                            }}
                            />
                  
                          <Stack.Screen name="AllPayment" component={AllPayment}/>
                          
                          <Stack.Screen name="NowBuy" component={NowBuy}/>
                          
                        <Stack.Screen options={{ headerShown: false }} name="Otp" component={Otp} />

                          <Stack.Screen name= "Members" component={Members}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                            DOCTOR's
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"63%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                  <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                            </>
                                            ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                          
                          />
          
                          <Stack.Screen name= "BuyNow" component={Buy}
                                        options={{ 
                                          headerTitle: (props) => 
                                            ( // App Logo
                                          <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                          ADD ADDRESS
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"51%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                   <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                            </>
                                            ),
                                    headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}

                                      />
                  
                        <Stack.Screen name= "Products" component={Products}/>
                        <Stack.Screen name= "AddToCart" component={AddToCart}

                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                              {/* <View
                                                  style={{
                                                    height: height/15, 
                                                    width:40,
                                                    justifyContent:'space-around',
                                                    marginLeft:"75%"
                                                  }}
                                                    >
                                                  <TouchableOpacity style={{
                                                                            height: height/15, 
                                                                            width:28,
                                                                            justifyContent:'center',
                                                                            // marginLeft:'600%',
                                                                            // borderWidth:2
                                                                           
                                                                          }}
                                                          onPress={() => navigation.navigate('NOTIFICATIONS')}>
                                                      <Image  style={{
                                                                      height: height/19, 
                                                                      width:28,
                                                                      resizeMode:'contain',
                                                                      tintColor:"#57c3c4",}}
                                                        source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}/>
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(100, height),
                                                                    bottom:7,
                                                                    left:12
                                                                    }}>.</Text>
                                                      </TouchableOpacity>

                                              </View> */}
                                        </>
                                          ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                        />
                  
                        <Stack.Screen name= "Fresh" component={Fresh}/>
                        <Stack.Screen name= "Shop" component={Shop}/>
                        <Stack.Screen name= "PromationalProducts" component={PromationalProducts}/>
                
                        <Stack.Screen name= "Info" component={Info}/>
                
                        <Stack.Screen name= "SearchBar" component={SearchBar}
                               options={{ 
                                headerTitle: (props) => 
                                  ( // App Logo
                                <>
                                      <View
                                          style={{
                                            // height: height/15, 
                                            // width:40,
                                            justifyContent:'space-around',
                                            // marginLeft:"63%"
                                            flexDirection:'row'
                                          }}
                                            >
                                              <TouchableOpacity 
                                                             style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"65%"
                                                                    }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={{uri:"https://cdn-icons-png.flaticon.com/128/2645/2645897.png"}}
                                                                 
                                                      />
                                                      <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(50, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:-28,
                                                                    left:16
                                                                    }}>.</Text>
                                                      </TouchableOpacity>
                                           <TouchableOpacity 
                                                             style={{
                                                                        height: height/15, 
                                                                        width:28,
                                                                        justifyContent:'space-around',
                                                                        marginLeft:"5%"
                                                                    }}
                                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                      <Image
                                                            style={{ 
                                                                  height: height/19, 
                                                                  width:28,
                                                                  resizeMode:'contain',
                                                                  tintColor:"#57c3c4",
                                                                  }}
                                                                  source={require('../image/cart.png')}
                                                      />
                                                        <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                      </TouchableOpacity>
                                      </View>
                                </>
                                  ),
                              headerTitleStyle: { flex: 1, textAlign: 'center' },
                              }}
                              />
                
                
                        <Stack.Screen name= "ImageSlider" component={ImageSlider}/>
                        <Stack.Screen name= "About" component={About}/>
                        <Stack.Screen name= "Database" component={Database}/>
                
                        <Stack.Screen name= "Confirmation" component={Confirmation}/>
                
                        <Stack.Screen name= "NOTIFICATIONS" component={Notification}

                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                              {/* <Text style={{
                                                          fontSize:RFValue(18, height),
                                                          marginLeft:'-12%',
                                                          fontFamily:'NanumGothic-Bold',
                                                          color:'#57c3c4'
                                                          }}>
                                                NOTIFICATIONS
                                              </Text>
                                                  <TouchableOpacity 
                                                        style={{
                                                          height: height/15, 
                                                          width:28,
                                                          justifyContent:'space-around',
                                                          marginLeft:"52%"
                                                        }}
                                                        onPress={() => navigation.navigate('AddToCart')}>
                                                  <Image
                                                        style={{ 
                                                              height: height/19, 
                                                              width:28,
                                                              resizeMode:'contain',
                                                              tintColor:"#57c3c4",
                                                              }}
                                                              source={require('../image/cart.png')}
                                                  />
                                                   <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(100, height),
                                                                    bottom:7,
                                                                    left:19
                                                                    }}>.</Text>
                                                </TouchableOpacity> */}
                                          </>
                                          ),
                                      headerTitleStyle: { flex: 1, textAlign: 'center' },
                                      }}
                        />


          
                        <Stack.Screen name= "OrderedProductInfo" component={OrderedProductInfo}
                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                          <Text style={{
                                                      fontSize:RFValue(18, height),
                                                      marginLeft:'-12%',
                                                      fontFamily:'NanumGothic-Bold',
                                                      color:'#57c3c4'
                                                      }}>
                                        ORDER's INFO
                                          </Text>
                                              <TouchableOpacity 
                                                    style={{
                                                      height: height/15, 
                                                      width:28,
                                                      justifyContent:'space-around',
                                                      marginLeft:"52%"
                                                    }}
                                                    onPress={() => navigation.navigate('AddToCart')}>
                                              <Image
                                                    style={{ 
                                                          height: height/19, 
                                                          width:28,
                                                          resizeMode:'contain',
                                                          tintColor:"#57c3c4",
                                                          }}
                                                          source={require('../image/cart.png')}
                                              />
                                                 <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                              </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
                        />
                 
          
           
                        <Stack.Screen name= "ProductInfo" component={ProductInfo}/>
                
                        <Stack.Screen  options={{headerShown: false}} name="CompanyInfo" component={CompanyInfo}/>
                
                        
                        <Stack.Screen name='User Details' component={UserDetails}/>
                        <Stack.Screen options={{headerShown: false}} name="Register" component={Register}/>
                        <Stack.Screen options={{headerShown: false}} name= "Login" component={LoginPage} />
          
                  
                        <Stack.Screen name='AllOrders' component={AllOrders}
                                      options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                          <Text style={{
                                                      fontSize:RFValue(18, height),
                                                      marginLeft:'-12%',
                                                      fontFamily:'NanumGothic-Bold',
                                                      color:'#57c3c4'
                                                      }}>
                                        ORDER's
                                          </Text>
                                              <TouchableOpacity 
                                                    style={{
                                                      height: height/15, 
                                                      width:28,
                                                      justifyContent:'space-around',
                                                      marginLeft:"67%"
                                                    }}
                                                    onPress={() => navigation.navigate('AddToCart')}>
                                              <Image
                                                    style={{ 
                                                          height: height/19, 
                                                          width:28,
                                                          resizeMode:'contain',
                                                          tintColor:"#57c3c4",
                                                          }}
                                                          source={require('../image/cart.png')}
                                              />
                                               <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                              </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
                      />
                  
                      <Stack.Screen name='EnquiryForm' component={EnquiryForm}/>
            
                
                
                
                      <Stack.Screen name="Shoplist" component={Shoplist}/>
                      <Stack.Screen name= "OrderDetail" component={OrderDetail}
                                    options={{ 
                                        headerTitle: (props) => 
                                          ( // App Logo
                                        <>
                                            <Text style={{
                                                        fontSize:RFValue(18, height),
                                                        marginLeft:'-12%',
                                                        fontFamily:'NanumGothic-Bold',
                                                        color:'#57c3c4'
                                                        }}>
                                              PAYMENT
                                            </Text>
                                                <TouchableOpacity 
                                                      style={{
                                                        height: height/15, 
                                                        width:28,
                                                        justifyContent:'space-around',
                                                        marginLeft:"64%"
                                                      }}
                                                      onPress={() => navigation.navigate('AddToCart')}>
                                                <Image
                                                      style={{ 
                                                            height: height/19, 
                                                            width:28,
                                                            resizeMode:'contain',
                                                            tintColor:"#57c3c4",
                                                            }}
                                                            source={require('../image/cart.png')}
                                                />
                                                  <Text style={{
                                                                    position: 'absolute',
                                                                    color:'black',
                                                                    fontSize:RFValue(14, height),
                                                                    fontFamily:'Montserrat-Bold',
                                                                    top:5,
                                                                    left:14
                                                                    }}>{CartQuantityValue}</Text>
                                                </TouchableOpacity>
                                          </>
                                          ),
                                  headerTitleStyle: { flex: 1, textAlign: 'center' },
                                    }}
     
                      />
                      <Stack.Screen name="Test" component={Test}/>
                      <Stack.Screen  options={{headerShown: false}} name='SplashScreen' component={SplashScreen}/>
                          <Stack.Screen  options={{headerShown: false}}  name="MyTabs" component={MyTabs} />
        
      
        </>
     )
     }  
    </Stack.Navigator>
  )
}


const style = StyleSheet.create({
  logo1:{ 
        width:width/3,
        height: height/14,
        marginLeft:-28
        },
  logo:{ 
        width:width/3.5,
        height: height/16,
        resizeMode:'contain',
        tintColor:"#57c3c4",
      },
  cart1:{
        height: height/15, 
        width:40,
        justifyContent:'space-around',
        marginLeft:'4%'
        },
  cart:{
        height: height/24, 
        width:25,
        resizeMode:'contain',
        tintColor:"#57c3c4",
       },
  notify1:{
          height: height/15,
          width:40,
          justifyContent:'space-around',
          marginLeft:'5%'
          },
  notify:{
          height: height/20, 
          width:25,
          resizeMode:'contain',
          tintColor:"#57c3c4",
        },
search1:{
        height: height/15, 
        width:40,
        marginLeft:'24%', 
        justifyContent:'space-around'
        },
search:{
        height: height/20, 
        width:25,
        resizeMode:'contain',
        tintColor:"#57c3c4",
      },
})