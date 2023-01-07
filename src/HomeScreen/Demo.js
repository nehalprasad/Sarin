import React, { useState } from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SelectCountry } from 'react-native-element-dropdown';
const Demo = () => {
   const [data, setdata] = useState([])

   const local_data =[
    {
      value: '1',
      lable: 'Country 1',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Country 2',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Country 3',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '4',
      lable: 'Country 4',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'Country 5',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];


const SubCategory1 = () => {
    var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://app.sarinskin.com/api/sub_category/?category=1',
};

axios(config)
.then(function (response) {
//   console.log(JSON.stringify(response.data));
  setdata(response.data.data)
})
.catch(function (error) {
  console.log(error);
});

}

useEffect(() => {

    SubCategory1()

},[])
      const [value, setValue] = useState(null);
      const [isFocus, setIsFocus] = useState(false);
      const [country, setCountry] = useState('1');
  
      const renderLabel = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: 'blue' }]}>
                Shop By Product
            </Text>
          );
        }
        return null;
      };
  
      return (
        <>
 <View style={styles.container}>
          {renderLabel()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={data}
            // search
            maxHeight={300}
            labelField="sub_category_name"
            valueField="value"
            placeholder={!isFocus ? 'Select item' : '...'}
            // searchPlaceholder="Search..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValue(item.value);
              setIsFocus(false);
            }}
            renderLeftIcon={() => (
              <AntDesign
                style={styles.icon}
                color={isFocus ? 'blue' : 'black'}
                name="Safety"
                size={20}
              />
            )}
          />
        </View>

        <SelectCountry
        style={styles.dropdown1}
        selectedTextStyle={styles.selectedTextStyle1}
        placeholderStyle={styles.placeholderStyle1}
        imageStyle={styles.imageStyle1}
        inputSearchStyle={styles.inputSearchStyle1}
        iconStyle={styles.iconStyle1}
        // search
        maxHeight={200}
        value={country}
        data={data}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
        valueField="sub_category_name"
        labelField="sub_category_name"
        imageField={
            e => `https://app.sarinskin.com${e.image}`}
        placeholder="Select country"
        searchPlaceholder="Search..."
        onChange={e => {
            console.log(e.image)
            console.log(e.sub_category_name)
          setCountry(e.sub_category_name);
        }}
      />

        </>
       
      );
    };
  
  
    const styles = StyleSheet.create({
      container: {
        backgroundColor: 'white',
        padding: 16,
      },
      dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
       dropdown: {
      margin: 16,
      height: 50,
      borderBottomColor: 'gray',
      borderBottomWidth: 0.5,
    },
    imageStyle: {
      width: 24,
      height: 24,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },

    dropdown1: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      imageStyle1: {
        width: 24,
        height: 24,
      },
      placeholderStyle1: {
        fontSize: 16,
      },
      selectedTextStyle1: {
        fontSize: 16,
        marginLeft: 8,
      },
      iconStyle1: {
        width: 20,
        height: 20,
      },
      inputSearchStyle1: {
        height: 40,
        fontSize: 16,
      },
    });

export default Demo