// import { View, Text, FlatList,Image } from 'react-native'
// import React, { useEffect,useState } from 'react'

// export default function Review() {
// const[data, setData] = useState();

// useEffect(() => {

// var axios = require('axios');

// var config = {
//   method: 'get',
//   url: 'https://sarinskin.com//wp-json/wc/v3/products/reviews',
//   headers: { 
//     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FyaW5za2luLmNvbSIsImlhdCI6MTY1NDY3Mzk5NywibmJmIjoxNjU0NjczOTk3LCJleHAiOjE2NTUyNzg3OTcsImRhdGEiOnsidXNlciI6eyJpZCI6Ijk5MDAxMyJ9fX0.Hs_xKwl2I3kAB9coyRNt_dipstq4QjXumv4L7outlpU'
//   }
// };

// axios(config)
// .then((response) => {
// //   console.log(JSON.stringify(response.data));
//   setData(response.data)
// })
// .catch((error) => {
//   console.log(error);
// });


// var axios = require('axios');

//     var config = {
//       method: 'get',
//       url: `https://sarinskin.com/wp-json/wc/v3/products/16072`,
//       headers: { 
//         'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvc2FyaW5za2luLmNvbSIsImlhdCI6MTY1NDY3Mzk5NywibmJmIjoxNjU0NjczOTk3LCJleHAiOjE2NTUyNzg3OTcsImRhdGEiOnsidXNlciI6eyJpZCI6Ijk5MDAxMyJ9fX0.Hs_xKwl2I3kAB9coyRNt_dipstq4QjXumv4L7outlpU'
//       }
//     };
    
//     axios(config)
//     .then((response) => {
//       console.log(JSON.stringify(response.data));
    
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// },[])


// const Data = ({data}) => {

    

//     const regex = /(<([^>]+)>)/ig;

//     return(

//         <View style={{alignContent:'center', 
//                 //   marginLeft:180, 
//                 //   marginRight:200, 
//                 //   marginTop:100
//                   }}>
//                   <Text style={{fontSize:20}}>
//                       {data.product_name}
//                       </Text>
//                       <Text style={{fontSize:20}}>
//                       {data.product_id}
//                       </Text>
                      
                      
//                       <Text style={{fontSize:20}}>
//                       {data.review = data.review.replace(regex, '')}
//                       </Text>


//                   {/* <View style={{height:100, width:200, borderWidth:2 , marginRight:250}}> */}
//                   {/* <Image
//                   style={{height:100, width:170, resizeMode:'contain'}}
//                   source ={{uri: item.image}}
//                   /> */}
//                   {/* </View> */}
                  
//                   </View>


//     )
  
// }
 








//   return (
//    <FlatList
//    data={data}
//    keyExtractor={({ id }, index) => id}
//    renderItem={({ item }) => {
//     return <Data data={item} />;

//    }}
//    />



 
//   )
// }


import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { useValidation } from 'react-native-form-validator';

const FormTest = () => {
  const [name, setName] = useState('My nhnnnnnnnname');
  const [email, setEmail] = useState('tibtib@gmail.com');
  const [number, setNumber] = useState('56');
  const [date, setDate] = useState('2017-03-01');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { validate, isFieldInError, getErrorsInField, getErrorMessages } =
    useValidation({
      state: { name, email, number, date, newPassword, confirmPassword },
    });

  const _onPressButton = () => {
    validate({
      name: { minlength: 3, maxlength: 7, required: true },
      email: { email: true },
      number: { numbers: true },
      date: { date: 'YYYY-MM-DD' },
      confirmPassword: { equalPassword: newPassword },
    });
  };

  return (
    <View>
      <TextInput
        style={{borderWidth:2}}
        onChangeText={setName} value={name} />
      <TextInput
        style={{borderWidth:2}}
        onChangeText={setEmail} value={email} />
      <TextInput
        style={{borderWidth:2}}
        onChangeText={setNumber} value={number} />
      <TextInput
        style={{borderWidth:2}}
        onChangeText={setDate} value={date} />
        {isFieldInError('date') &&
        getErrorsInField('date').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}

      <TextInput
        style={{borderWidth:2}}
        onChangeText={setNewPassword}
        value={newPassword}
        secureTextEntry={true}
      />
      <TextInput
        style={{borderWidth:2}}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
      />
      {isFieldInError('confirmPassword') &&
        getErrorsInField('confirmPassword').map(errorMessage => (
          <Text>{errorMessage}</Text>
        ))}

      <TouchableHighlight
            style={{borderWidth:2, 
            height:40,
            justifyContent:'center',
            flexDirection:'row', 
            marginLeft:180, 
            width:100}}
        onPress={_onPressButton}>
        <Text
        style={{fontSize:25}}>Submit</Text>
      </TouchableHighlight>

      <Text
      style={{fontSize:25}}>{getErrorMessages()}</Text>
    </View>
  );
};

export default FormTest;