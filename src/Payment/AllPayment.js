import { View, Text } from 'react-native'
import React from 'react'

export default function AllPayment({navigation, route}) {
    const Cart = route.params

    const totalPrice = Cart.cartDetails[0].totals.subtotal
    // console.log(typeof(totalPrice))
    // console.log("news")
    // console.log(totalPrice)
    // console.log("AllPat")
  //  console.log(Cart)
  return (
    <View>
      <Text>{totalPrice}</Text>
    </View>
  )
}