import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  SectionList
} from 'react-native';
import RadioButton from './Components/RadioButton';

const App = () => {

 

  return (
    <View style={styles.main}>


    <RadioButton/>
    </View>


/* <TouchableOpacity onPress={()=>{setSelect(2)}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
            select == 2 ? <View style={styles.radioBg}></View> : null
        }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity> */

  );
};



const styles = StyleSheet.create({
main:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'

}
})
export default App;