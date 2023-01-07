import React,{useEffect, useState, useMemo, useCallback} from 'react';
import Neumorphism from 'react-native-neumorphism';
import 
{ 
  FlatList,
  Text, 
  View,
  StyleSheet,
  ActivityIndicator,
  Image, 
  SafeAreaView,
  TouchableOpacity, 
  Alert,Dimensions,
  PixelRatio,
} from 'react-native';
// import { MultiSelect } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RFValue } from 'react-native-responsive-fontsize';
import { Dropdown } from 'react-native-element-dropdown';
import MultiSelect from 'react-native-multiple-select';
import FastImage from 'react-native-fast-image';

const{width, height} = Dimensions.get('window')
PixelRatio.getFontScale()


export default function Products_data({navigation, route}) {

      const[isLoading, setLoading] = useState(true)
      const[dataSourceed, setDataSourceed] = useState([])
      const dataName = route.params
      // console.log(dataName.dataName)
      const [state, setState] = useState({});
// For sorting

      const data = [
                { label: 'High to Low - Price', value: '1', orderby: "price" ,order:"desc" },
                { label: 'Low to High - Price', value: '2', orderby: "price" ,order:"asc" },
                { label: 'Customer Rating', value: '3', orderby: "rating" ,order:"desc" },
                { label: 'Popularity', value: '4', orderby: "popularity" ,order:"desc"  },
              ]


const [value, setValue] = useState('')
const [orderby, setOrderby] = useState('')
const [order, setOrder] = useState('')
const [isFocus, setFocus] = useState('')


// For Sorting 
    const SortingData = async(item) => {

      // console.log("andar")

      // console.log(item.value)
      // console.log(item.orderby)
      // console.log(item.order)
     

      const data  = dataName.dataName;
        
      const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
  
      const adminToken = JSON.parse(jsonValue1)

  
  
          var axios = require('axios');
  
          var config = {
            method: 'get',
            url: `https://test.sarinskin.com/wp-json/wc/v3/products/categories?slug=${data.name}`,
            headers: { 
              'Authorization': `Bearer ${adminToken}`
            }
          };
     
            axios(config)
          .then((response) => {
        
            const data_id = response.data[0].id

            var config = {
              method: 'get',
              url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${data_id}&per_page=100&orderby=${item.orderby}&order=${item.order}&`,
              headers: { 
                'Authorization':  `Bearer ${adminToken}`
              }
            };

           axios(config)
            .then((response) => 
               {
                setLoading(false);
                setDataSourceed(response.data)
               })
              // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });

    }


// For Filtering

// For Filter



// Dummy Data for the MutiSelect
const items = [
  // name key is must. It is to show the text in front
  // {id: 1, name: 'In Stock',key:'&stock_status=instock'},
  {id: 2, name: 'Out of Stock',key:'&stock_status=outofstock'},
  {id: 3, name: 'On Sale',key:'&on_sale=true'},
  {id: 4, name: 'Price Above 1000',key:'&min_price=1000'},
  // {id: 5, name: 'Price Above 2000',key:'&min_price=2000'},
  {id: 4, name: 'Price Below 1000',key:'&max_price=1000'},
  // {id: 5, name: 'Price Below 2000',key:'&max_price=2000'},
];

var filter1 = '';

const [selectedItems, setSelectedItems] = useState([]);

 const onSelectedItemsChange = async(selectedItems) => {
      // Set Selected Items
      setSelectedItems(selectedItems);
      // console.log(selectedItems)
    

      for(var i=0; i < selectedItems.length; i++){
        filter1 += filter1 + selectedItems[i];
      }

      // console.log(filter1);
      

      setLoading(true)
 
      const data  = dataName.dataName;
        
      const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
  
      const adminToken = JSON.parse(jsonValue1)

  
  
          var axios = require('axios');
  
          var config = {
            method: 'get',
            url: `https://test.sarinskin.com/wp-json/wc/v3/products/categories?slug=${data.name}`,
            headers: { 
              'Authorization': `Bearer ${adminToken}`
            }
          };

         
         
            axios(config)
          .then((response) => {
        
            const data_id = response.data[0].id

            var config = {
              method: 'get',
              url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${data_id}&per_page=100${filter1}`,
              // url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${data_id}&per_page=100&stock_status=instock&on_sale=true`,
              headers: { 
                'Authorization':  `Bearer ${adminToken}`
              }
            };

           axios(config)
            .then((response) => 
               {
                setLoading(false);
                setDataSourceed(response.data)
               })
              // console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
              console.log(error);
            });
         
    };


      const ProductData = async() => {


              const data  = dataName.dataName;
        
              // console.log(data.name)
                
              const jsonValue1 = await AsyncStorage.getItem('AdminToken1st')
          
              const adminToken = JSON.parse(jsonValue1)

          
          
                  var axios = require('axios');
          
                  var config = {
                    method: 'get',
                    url: `https://test.sarinskin.com/wp-json/wc/v3/products/categories?slug=${data.name}`,
                    headers: { 
                      'Authorization': `Bearer ${adminToken}`
                    }
                  };
                  
                    axios(config)
                  .then((response) => {
                
                    const data_id = response.data[0].id

                    var config = {
                      method: 'get',
                      url: `https://test.sarinskin.com/wp-json/wc/v3/products?category=${data_id}&per_page=100`,
                      headers: { 
                        'Authorization':  `Bearer ${adminToken}`
                      }
                    };
                    
                   axios(config)
                    .then((response) => 
                       {
                        setLoading(false);
                        setDataSourceed(response.data)
                       })
                      // console.log(JSON.stringify(response.data));
                    })
                    .catch((error) => {
                      console.log(error);
                    });
  
            }

            useEffect(()=>{

              ProductData()
              return () => {
                setState({}); // This worked for me
              };
            },[])
 


 // FOR SORTING


    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[style.label, isFocus && { color: 'blue' }]}>SORT BY
</Text>
        );
      }
      return null;
    };
                if (isLoading == true) {
                    return (
                      <View  style={{
                        flex: 1,
                        justifyContent: "center", 
                        backgroundColor:'white'
                      
                    }}>
                      <Neumorphism
                      lightColor={'#dedddd'}
                      darkColor={'#979797'}
                      shapeType={'flat'}
                      radius={50}
                      style={{width:50,height:50, marginLeft:'auto', marginRight:'auto',}}>
                        <View style={{marginTop:6}}>
                        <ActivityIndicator size="large" color="#57c3c4" />
                        </View>
                      
                      </Neumorphism>
                      
                    </View>
                    )
                  
                  } 
else{

   const final_data  = dataSourceed;

  //  console.log(JSON.stringify(final_data))

   
// const memoizedValue = useCallback(() => Demo, [final_data])



  const Demo = ({data}) => {

      // console.log(JSON.stringify(data.stock_quantity))
  
      // console.log(data.stock_status)

if(data.stock_status == "outofstock"){
      return(
        <>
    
    <View style={{
          width:width/2-10,
          borderWidth:0.2,
          marginBottom:1,
          height:height/3.5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
          borderRadius:5,
          marginTop:'0.5%',
          marginLeft:5
          }} > 
    <TouchableOpacity
                          // disabled={true}
                          activeOpacity={0.5}
                          onPress={() => navigation.navigate('ProductsDetails',
                                         data)}>
      {/* <Neumorphism  style={{
      width:width/2-25,
      // borderWidth:1,
      marginLeft:'8%',
      marginTop:'2%',
      marginBottom:'4%',
      backgroundColor:'#ffffff95',
      borderRadius:25,
      }}> */}
      <View style={{ justifyContent:'center',}}>
      <Image
                style={{
                  height:height/6,
                  borderRadius:15,
                  resizeMode:'contain',
                  borderRadius:50,
                  width:width/2-20,
                  marginLeft:5
                }}
              source={{
               uri: data.images[0].src,
                        }}     
              />
                 <Text style={{
                        color:'#57c3c4',
                        position: 'absolute',
                        bottom:"54%",
                        left:'15%',
                        
                        backgroundColor:'#ffffff99',
                        fontFamily:'Quicksand-Bold',
                        fontSize:RFValue(20, height),
                        alignSelf:'center',
                 }}>
                    Out of Stock 
                 </Text>
                 <Text 
                    numberOfLines={2}                  
                    style={{
                            color:'black',
                            fontSize:RFValue(18, height), 
                            fontFamily:'Quicksand-Regular',
                            paddingLeft:10,
                            // borderWidth:1,
                            width:width/2-15,
                          }}
                  >{data.name}</Text>
      </View>
      <View style={{flexDirection:'row'}}>
                     
                       
                    </View> 
      {/* </Neumorphism> */}
      </TouchableOpacity>
    </View>  
    
  
    </>
      )

}else {
  return(
    <>
    <View style={{
          width:width/2-10,
          borderWidth:0.2,
          marginBottom:1,
          height:height/3.5,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:'white',
          borderRadius:5,
          marginTop:'.5%',
          marginLeft:5
          }} > 
    <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => navigation.navigate('ProductsDetails',
                                         data)}>
      {/* <Neumorphism  > */}
      <View style={{ }}>
            <Image
                style={{
                        height:height/6,
                        borderRadius:15,
                        resizeMode:'contain',
                        borderRadius:50,
                        width:width/2-20,
                        marginLeft:5
                      }}
                 source={{
                     uri: data.images[0].src,
                              }}            
            />
                  <Text 
                    numberOfLines={2}                  
                    style={{
                            color:'black',
                            // height:height/12.3,
                            fontSize:RFValue(18, height), 
                            // marginBottom:15,
                            fontFamily:'Quicksand-Regular',
                            // marginRight:5,
                            paddingLeft:10,
                            width:width/2-10,
                            // textAlign:'center',
                            // borderWidth:1
                          }}
                  >{data.name}</Text>
      </View>
      <View style={{
                    flexDirection:'row',
                    // borderWidth:0.2,
                    paddingLeft:10,
                    width:width/2-10,
                      }}>
                      <Image
                      style={{ 
                        height:height/35.5, 
                        width:20, 
                        // marginLeft:10,
                        // paddingLeft:10,
                        marginTop:4,
                        marginLeft:8,
                        position:'absolute'
                      }}
                       source={require('../image/ruppee.png')}/>
        <Text style={{
                          color:'black',
                          //  height:height/20,
                          fontFamily:'Quicksand-SemiBold',
                          marginRight:5,
                          marginLeft:20,
                          textAlign:'center',
                          fontSize:RFValue(18, height), 
                          marginBottom:10
                       }}
                        >{data.price}.00</Text>
                       <View>
                      
                       </View>
                       
                    </View> 
      {/* </Neumorphism> */}
      </TouchableOpacity>
    </View>  
    
  
    </>
  )
}
  
  }


    return (  // Start of View point in ScrollView{}

  <SafeAreaView style={{backgroundColor:'white'}}>
        <FlatList
        
        ListHeaderComponent={

                    <View style={{flexDirection:'row'}}> 
          
          
                    {/* Sort By */}
                   
                <View style={style.container}>
                  {renderLabel()}
                  <Dropdown
                    activeColor='#00c85750'
                    // color="yellow"
                    fontFamily='Montserrat-Regular'
                 
                    // fontSize={'RFValue(35, height)'}
                    style={[style.dropdown, isFocus && { borderColor: '#57c3c4', borderWidth:3 }]}
                    placeholderStyle={style.placeholderStyle}
                    selectedTextStyle={style.selectedTextStyle}
                    iconStyle={style.iconStyle}
                    data={data}
                    initialNumToRender={2}
                    maxHeight={height/4}
                
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'SORT BY' : '...'}
                    value={value}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    // containerStyle={{fontSize:54}}
                  

                    onChange=
                      {
                    item => 
                        {
                    // Alert.alert("ID:" + item.value)
                    setValue(item.value);
                    SortingData(item)
                    setOrderby(item.orderby);
                    setOrder(item.order);
                    setLoading(true)
                        } 
                      }
                      renderLeftIcon={() => (
                        <AntDesign style={style.icon} color="#57c3c4" name="Safety" size={20} />
                      )}
                  />
                </View>


{/* For Filter */}

{/* <SafeAreaView 
style={style.container2}
>
      
         <MultiSelect
          hideTags
                    items={items}
                    uniqueKey="key"
                   
                    onSelectedItemsChange={onSelectedItemsChange}
                    selectedItems={selectedItems}
                    selectText="SELECT FILTERS"
                    // searchInputPlaceholderText="Search Items..."
                    // onChangeInput={(text) => console.log(text)}
                    tagRemoveIconColor="#CCC"
                    tagBorderColor="#CCC"
                    tagTextColor="#CCC"
                    fontSize={17}
                    styleIndicator={{ 
                      marginRight: -20,
                      paddingTop:-12,
                      marginTop:8, 
                      height:40
                    }}
                    // styleItemsContainer={{backgroundColor:'grey',}}
                styleDropdownMenu={{
                    width:width/2,
                    paddingTop:10,
                    borderColor:'white',
                    borderRadius:25,
                    paddingLeft:5,
                    height:32,
                    width:width/2-5,
                    // marginLeft:5
                  }}
                    styleDropdownMenuSubsection={{
                      height: 40,
                  
                      width:width/2-25,
                      borderColor:'white',
                     
                      borderRadius: 25,
                     
                      }}
                    styleInputGroup={{
                      // borderRadius:25,
                      width:width/2-10
                    }}


                  styleRowList={{
                      backgroundColor:'white',
                      paddingLeft:50, 
                    //  marginLeft:-177,
                      // borderColor:'black',
                      borderRadius:10,
                      borderWidth:0.1,
                      width:width-15
                      }}

                  styleMainWrapper={{
                    backgroundColor:'white',
                    // borderWidth:2
                    
                  }}
                  styleListContainer={{
                    // borderWidth:2,
                    alignItems:'center',
                    width:width-10,
                    marginLeft:-177,
                  }}

                    itemTextColor="#000"
                    displayKey="name"
                    searchInputStyle={{color: '#CCC'}}
                    hideSubmitButton={true}
                    // submitButtonColor="#48d22b"
                    // submitButtonText="Submit"
         />
      
     </SafeAreaView> */}

</View>
}
        ListFooterComponent={
          <View style={{
                        marginTop:'5%', 
                        marginLeft:'1%',
                        paddingBottom:20,
                        backgroundColor:'white'
                        }}>
          <Text style={{
                        fontFamily:'Quicksand-Light', 
                        fontSize:RFValue(25, height), 
                        textAlign:'center', 
                        color:'#57c3c4'
                      }}>More Products Coming Soon.......</Text>
          </View>
        }
        
        initialNumToRender={10}
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        //updateCellsBatchingPeriod={50}
        windowSize={2}
        
        style={style.view}
        data={final_data}
        refreshing={true}
        numColumns={2}
        keyExtractor={({ id }, index) => id}
        // renderItem={memoizedValue}
        renderItem={({ item }) => {
          return <Demo data={item} />;
          }}
        />
        </SafeAreaView>     
);
        }
      }

const style = StyleSheet.create({
  container:{
  backgroundColor:'white',
  height:'100%'
  },
  card:{
    height:150,
    width:150,
    backgroundColor:'#E8F9FD',
    marginLeft:"15%",
    marginRight:"-2%",
    marginTop:15,
    borderRadius:50,
    marginBottom:20

  },
  image:{
    height:100,
    width:100,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:50
  },
  name:{
  fontSize:14.5,
  fontWeight:'bold',
  textAlign:'center',
  paddingLeft:15,
  paddingRight:15,
  marginLeft:'auto',
  marginRight:'auto',
  color:'#112B3C',
  marginTop:10
  }  ,
  ima:{
    marginTop:5,
    height:100,
    width:100,
    marginLeft:'auto',
    marginRight:'auto',
    borderRadius:50
  },

  spinnerTextStyle: 
    {
      color: '#FFF',
    }, 
  activitycontainer:{
        flex: 1,
        justifyContent: "center"
      
    },
    view:{
      },

      container: {
        width:width,
        backgroundColor: 'white',
        borderWidth:1,
        borderRadius:10,
        height:45,

      },
      dropdown: {
        paddingTop:15,
        height: 45,
        borderColor:'white',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8,
        paddingBottom:11,
        color:'black'
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor:'white',
        left: 22,
        top:1,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: RFValue(14, height),
        color:'black'
      },
      placeholderStyle: {
        fontSize: RFValue(14, height),
        backgroundColor:'white',
        color:'#57c3c4',
        fontFamily:'Quicksand-Regular'
      },
      selectedTextStyle: {
        fontSize: RFValue(14, height),
        color:'#57c3c4',
        marginLeft:5,
        marginTop:1,
        fontFamily:'Quicksand-Regular'
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },

      container1: {
      width:width/2,
      borderWidth:2,
      borderRadius:10,
      backgroundColor: 'white', },

      dropdown1: {
        height: 50,
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
      placeholderStyle1: {
        fontSize: 16,
      },
      selectedTextStyle1: {
        fontSize: 14,
      },
      iconStyle1: {
        width: 20,
        height: 20,
      },
      inputSearchStyle1: {
        height: 40,
        fontSize: 16,
      },
      icon1: {
        marginRight: 5,
      },
      item1: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      selectedStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        backgroundColor: 'white',
        shadowColor: '#000',
        marginTop: 8,
        marginRight: 12,
        paddingHorizontal: 12,
        paddingVertical: 8,
        width:width-20,
        marginLeft:'-80%',
        backgroundColor:'white',
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
  
        elevation: 2,
      },
      textSelectedStyle1: {
        marginRight: 5,
        fontSize: 16,
      },


      container2: {
            flex: 1,
            backgroundColor: 'white',
            // borderWidth:2,
            borderRadius:10
            // padding: 10,
          },
          titleText2: {
            // padding: 8,
            borderRadius:10,
            fontSize: 25,
            textAlign: 'center',
            backgroundColor: 'white',
            fontWeight: 'bold',
          },
          headingText2: {
            fontSize: 25,
            // padding: 8,
          },
        


})
