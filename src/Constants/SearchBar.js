
import React, {useState, useEffect} from 'react';
 
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
} from 'react-native';
 
const Newss = (props) => {
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [state, setState] = useState({});

  
  useEffect(() => {
    fetch('https://www.sarinskin.com/wp-json/wc/v3/products/?per_page=100&consumer_key=ck_2158fd672f9bf9bf9b798a2c33733777cec73376&consumer_secret=cs_3a1aa664d33e761ac06b7e5b169298f454f095dc')
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });

      return () => {
        setState({}); // This worked for me
      };

  }, []);
 
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
 
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text
        style={styles.itemStyle}
        onPress={() => getItem(item)}>
       
        
        {item.name.toUpperCase()}
        
      </Text>
    );
  };
 
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
 
  const getItem = (item) => {
    // Function for click on an item
    alert(item.name);
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
        //   style={styles.textInputStyle}
          maxLength={10}
          onChangeText={(text) => searchFilterFunction(text)}
          value={search}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
          {...props}
          style={[props.style, isFocused && {borderWidth: 5, borderColor: 'blue'}]}
          onBlur={() => setIsFocused(false)}
          onFocus={() => setIsFocused(true)}
        />



        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
           ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
 
export default Newss;
