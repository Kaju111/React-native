import React, { useState } from 'react';
import UserData from './Components/UserData';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView
} from 'react-native';

const App = () => {

  const user = [
    {id: 3,
      name :"sam",
      email:"abc@text.com"
    },
    {id: 1,
      name :"ss",
      email:"abc@text.com"
    },
    {id: 2,
      name :"sam",
      email:"abc@text.com"
    },
    {id: 4,
      name :"sam",
      email:"abc@text.com"
    },
    {id: 8,
      name :"sam",
      email:"abc@text.com"
    },
  ]  

  return (
    <View>
    <Text style={{ fontSize: 30,}}>Grid with dynamic data</Text>

    <View style={{flex:1, flexDirection:'row', flexWrap:'wrap',fontSize:30, marginBottom:90}}>
    <Text style={{ marginLeft:10, fontSize:30}}>kaju</Text>
    <Text style={{ marginLeft:10, backgroundColor:'blue',fontSize:30}}>mesu</Text>
    <Text style={{fontSize:30,marginLeft:20}}>lulal</Text>
    <Text style={{fontSize:30,marginLeft:20}}>robin</Text>
    <Text style={{fontSize:30,marginLeft:10}}>rontu</Text>
    </View>



    <Text style={{ fontSize:28}}>Components in loop with FlatList</Text>
    <FlatList
    data = {user}
    renderItem={({item})=><UserData item={item}/>}
    />
    </View>


  );
};
export default App;