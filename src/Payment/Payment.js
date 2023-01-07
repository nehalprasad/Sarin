import { View, Text,
    StyleSheet,
    TouchableOpacity } from 'react-native'
import React from 'react'

export default function OrderDetail({route, navigation}) {
   
   const { 
    product_details,
    address1,
    address2,
    city,
    states,
    firstname,
    lastname,
    pincode,
    mobile
        } = route.params

const products = product_details.Cart_details

//    console.log(products)
  //  console.log(products.name)
  //  console.log(products.price)
  //  console.log(address1)
  //  console.log(address2)
  //  console.log(city)
  //  console.log(states)
  //  console.log(firstname)
  //  console.log(lastname)
  //  console.log(pincode)
  //  console.log(mobile)

      const onBuyHandler = () => {

        var axios = require('axios');
        var data = JSON.stringify({
          "status": "completed",
          "currency": "INR",
          "version": "6.5.1",
          "prices_include_tax": false,
          "date_created": "2022-05-25T09:26:49",
          "date_modified": "2022-05-25T09:26:49",
          "discount_total": "00.00",
          "discount_tax": "00.00",
          "shipping_total": "00.00",
          "shipping_tax": "00.00",
          "cart_tax": "0.00",
          "total": "5000.00",
          "total_tax": "00.00",
          "customer_id": "990031",
          "order_key": "wc_order_QGwHk5nKR1yVi",
          "billing": {
            "first_name": `${firstname}`,
            "last_name": `${lastname}`,
            "company": "",
            "address_1": `${address1}`,
            "address_2": `${address2}`,
            "city": `${city}`,
            "state": `${states}`,
            "postcode": `${pincode}`,
            "country": "India",
            "email": "abc@gmail.com",
            "phone": `${mobile}`
          },
          "shipping": {
            "first_name": `${firstname}`,
            "last_name": `${lastname}`,
            "company": "",
            "address_1": `${address1}`,
            "address_2": `${address2}`,
            "city": `${city}`,
            "state": `${states}`,
            "postcode": `${pincode}`,
            "country": "India",
            "email": "abc@gmail.com",
            "phone": `${mobile}`
          },
          "payment_method": "cod",
          "payment_method_title": "Cash on delivery",
          "transaction_id": "dbnasjcoisjcdo",
          "customer_ip_address": "",
          "customer_user_agent": "",
          "created_via": "rest-api",
          "customer_note": "",
          "date_completed": null,
          "date_paid": null,
          "cart_hash": "",
          "number": "27",
          "meta_data": [],
          "line_items": [
            {
              "name": `${products.name}`,
              "product_id": `${products.name}`,
              "quantity": "1",
              "subtotal": `${products.price}`,
              "total": `${products.price}`,
              "price": `${products.price}`
            }
          ],
          "tax_lines": [],
          "shipping_lines": [],
          "fee_lines": [],
          "coupon_lines": [],
          "refunds": [],
          "payment_url": "https://app.sarinskin.com/checkout/order-pay/27/?pay_for_order=true&key=wc_order_QGwHk5nKR1yVi",
          "date_created_gmt": "2022-05-25T09:26:49",
          "date_modified_gmt": "2022-05-25T09:26:49",
          "date_completed_gmt": null,
          "date_paid_gmt": null,
          "currency_symbol": "₹",
          "_links": {
            "self": [
              {
                "href": "https://app.sarinskin.com/wp-json/wc/v3/orders/27"
              }
            ],
            "collection": [
              {
                "href": "https://sarinskin.com/wp-json/wc/v3/orders"
              }
            ]
          }
        });
        
        var config = {
          method: 'post',
          url: 'https://app.sarinskin.com/wp-json/wc/v3/orders/?consumer_key=ck_6430499208f2863b3861a0d9b10c391ffbb9770a&consumer_secret=cs_564b9530a8f41cec7aac0d37bb6d8f9236df4836',
          headers: { 
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FyaW5za2luLmNvbSIsImlhdCI6MTY1MzY0NDYzMywibmJmIjoxNjUzNjQ0NjMzLCJleHAiOjE2NTQyNDk0MzMsImRhdGEiOnsidXNlciI6eyJpZCI6Ijk5MDAxMyJ9fX0.lHiq0eCcSAtKi5vu70trKhnTFXe5OfBMowKgUmQ3FDw', 
            'Content-Type': 'application/json'
          },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
       
     }


    // console.log(products.description)
  return (
    <View>
        <View>
            <Text style={style.header}>
        Confirm Your Order
            </Text>
            </View>
            <View style={style.card}> 
            <Text
            style={style.name}>{products.name}</Text>
           
            <Text
              style={style.name}>Rs: {products.price}</Text>
            </View>

            <TouchableOpacity style={style.register}
             onPress={onBuyHandler}
            >
                <Text style={style.payment}>BUY</Text>
            </TouchableOpacity>
     
    </View>
  )
}

const style = StyleSheet.create({
   input:{
    borderWidth:2,
    marginLeft:5,
    marginRight:5,
    marginTop:4
   },
   header:{
    marginTop:10,
    fontSize:20,
    fontWeight:"bold",
    marginBottom:20,
    textAlign:'center'
  },
    register:{
      backgroundColor:"lime",
      borderWidth:2,
      marginLeft:5,
      marginRight:5,
      height:40,
      marginTop:25,
      marginBottom:20
  
    },
    payment:{
      marginTop:4,
      fontSize:20,
      fontWeight:'bold',
      textAlign:"center",
      
    },
    card:{
        borderWidth:2
    },
    name:{
        fontSize:25,
    }
  });