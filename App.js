import React, { useState } from 'react';
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

const App = () => {

  const users = [
    {
      id:1,
      name: 'Anil',
      data:["PHP","React-js","Angular"]
    },
    {
      id:2,
      name: 'Benod',
      data:["Java","js","HTML"]
    },
    {
      id:3,
      name: 'lonli',
      data:["C","C++","Python"]
    },
    {
      id:4,
      name: "Tony",
      data:["CSS","Bootstrap","HTML"]
    },
  ]


  return (
    <View>
      <Text style={{ fontSize: 31}}>Section List in React-Native</Text>
      <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20, marginLeft:20}}>{item}</Text>}
      renderSectionHeader={({section:{name}})=>(
      <Text style={{fontSize:25, color:'red'}}>{name}</Text>
  )}
      />
    </View>


  );
};
export default App;