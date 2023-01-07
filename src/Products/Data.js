import React from 'react';
import {
  View,
  Text,
 TouchableOpacity,
 StyleSheet,
 Image,
 ScrollView,
 ActivityIndicator,
 SafeAreaView,
 FlatList
} from 'react-native';

export default class Shoplist extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      WoodataSource: [],
      PydataSource: [],
      final_data:{
        final_products:[]
      },
    }
  }

  componentDidMount() {

  const API_URL1 = 'https://app.sarinskin.com/wp-json/wc/v3/products?category=78&consumer_key=ck_2158fd672f9bf9bf9b798a2c33733777cec73376&consumer_secret=cs_3a1aa664d33e761ac06b7e5b169298f454f095dc';
  const API_URL2 = 'https://app.sarinskin.com/api/products'

// WooCommerce Source

  fetch(API_URL1)
  .then((response) => response.json())
  .then((responseJson) => {

  // for (var i = 0; i<responseJson.length; i++){
    // console.log(responseJson[i].status)
    // if(responseJson[i].status == "publish"){
      this.setState({
        isLoading: false,
        WoodataSource: responseJson,
      })

  })
  .catch((error) => {
    console.log(error);
  });

  //Python Data Source

  fetch(API_URL2)
  .then((response2) => response2.json())
  .then((response2Json) => {
    this.setState({
      isLoading: false,
      PydataSource: response2Json.results,
    })
    //   console.log("PyData 1");
   //  console.log(response2Json.results) 
  })
  .catch((error) => {
    console.log(error);
  });

} // component did mount end


render() {


//    console.log("Data 1");

    // Woo Commerce Data Source


   // console.log("WoodataSource");
    this.state.WoodataSource.map((val, key) => {
      var eachItem = {};
           
 


      if(val.images.length>0){
        eachItem = {
          "name": val.name,
          "productId": val.id,
          "description": val.description,
          "price": val.price,
          "image": val.images[0].src
        }
      }else{
        eachItem = {
          "name": val.name,
          "productId": val.id,
          "description": val.description,
          "price": val.price,
          "image": "https://www.freeiconspng.com/uploads/no-image-icon-6.png"
        }
      }

   
       for (var i = 0; i < val.images; i++ ){
        //  console.log(val.images[i].src)
   
       }
    
    


      
      this.state.final_data.final_products.push(eachItem);
     
     
    });
 

    // Python Data Source


   this.state.PydataSource.map((val, key) => {
      
      var eachItem = {};

      eachItem = {
        "name": val.name,
        "productId": val.productId,
        "description": val.description,
        "price": val.price,
        "image": val.image,
      }


      this.state.final_data.final_products.push(eachItem);

    });


    

    if (this.state.isLoading) {

      return (
        <View  style={style.activitycontainer}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    
    } 
    else{
      
    const news  = this.state.final_data.final_products;
    
    // console.log(news)
    
    const Demo = ({data}) => {
    
       
          let src = "https://www.freeiconspng.com/uploads/no-image-icon-6.png";
          // intiialize src with blank, if image not found it will set blank or default url
          //    if (data.image.length > 0) 
          //  {
            src = data.image;
            // console.log(src)
            //  }
    
            // console.log(data.image)
           
          return(
            
          
          <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate('ProductsDetails', data)}
          >
    
                      <View style={style.card}>            
                      <Image source={{uri: src}}  
                          style={style.image}/>
                          <Text
                          style={style.heading}>
                          {data.name}
                          </Text>
                      </View>
                </TouchableOpacity> 
             
                
    )}   //end of render
    
    return (  // Start of View point in ScrollView
     <>
            <FlatList
              data={news}
              numColumns={2}
              keyExtractor={({ id }, index) => id}
              renderItem={({ item }) => {
                  return <Demo data={item} />;
              }}
            />
            </>
      
               
    );
      }
    



    // end of return
    
     

    }; // end of render
    
 } // end of class

 const style = StyleSheet.create({
  card: {
  height:150,
  width:150,
  borderColor:'black',
  borderWidth:2,
  borderRadius:30,
  marginLeft:'13%',
  marginTop:'10%',
  },
  heading:{
      color:"green",
      marginTop:5,
      margin:2,
      textAlign:'center'
  },
  image:{
      width:100, 
      height:100,
      borderRadius:30,
      marginLeft: "auto",
      marginRight: "auto",


  },container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  spinnerTextStyle: {
    color: '#FFF',
  }, 
  activitycontainer:{
      flex: 1,
      justifyContent: "center"
    
  },
})