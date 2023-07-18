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

function List () {

  const [count, setCount] = useState(0);
  const [no, setNo] = useState(10);

  useEffect(()=>{
    console.warn('hello')
  },[count,no])

  return (
    <View>
     <Text style={{fontSize:30}}> {no} Life Cycel with use useEffet
  ComponentsDidmount {count}      
     </Text>
     <Button title='Update Count' onPress={()=>{setCount(count+1)}}></Button>
     <Button title='Update No' onPress={()=>{setNo(no+1)}}></Button>


  

    </View>
  )
}

export default List
