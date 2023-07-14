
import React, { useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet
} from 'react-native';

const App = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [display, setDisplay] = useState(true);

  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
    setPasswordVisible(!passwordVisible);
  };

  const handlePrintDetails = () => {
    setDisplay(true);
  };

  const handleClearDetails = () => {
    setDisplay(false);
  };

  const user = [
    {id:1,
      name:"Tonny"
    },
    {id:2,
      name:"Anil"
    },
    {id:3,
      name:"Viggu"
    },
    {id:4,
      name:"Neel"
    },
    {id:10,
      name:"musar"
    },
  ]

  return (
    <View style={{flex:1, paddingVertical:10}}>
      <Text style={{ fontSize: 30 }}>Handle Text Input</Text>
      <TextInput
        value={name}
        onChangeText={(text) => setName(text)}
        placeholder='Enter your name'
        style={{ fontSize: 18, color: 'red', borderWidth: 2, borderColor: 'black', margin: 4 }}
      />

      <TextInput
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={secureTextEntry}
        placeholder='Enter your Password'
        style={{ fontSize: 18, color: 'red', borderWidth: 2, borderColor: 'black', margin: 3 }}
      />

      <TouchableOpacity onPress={toggleSecureTextEntry}>
        <Text style={{ color: "white", backgroundColor: 'blue', textAlign: 'center', margin: 3 }}>
          {passwordVisible ? 'Hide' : 'Show'}
        </Text>
      </TouchableOpacity>

      <TextInput
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder='Enter your Email'
        style={{ fontSize: 18, color: 'red', margin: 6, borderWidth: 2, borderColor: 'black' }}
      />

      <View style={{ marginBottom: 10 }}>
        <Button title='Print Details' onPress={handlePrintDetails} color={"green"} />
      </View>
      <View>
        <Button title='Clear Details' onPress={handleClearDetails} />
      </View>

      {display && (
        <View>
          <Text>Name: {name}</Text>
          <Text>Password: {password}</Text>
          <Text>Email: {email}</Text>
        </View>
      )}
    <View>

    </View>
    <Text style={{ fontSize: 30, marginTop:10 }}>List with Flat List Components</Text>
        <FlatList
        data={user}
        renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
        keyExtractor={item=>item.id}
        />
    </View>


  );
};
const styles = StyleSheet.create({
  item:{
    fontSize:24,
    padding:10,
    color:"#fff",
    backgroundColor:"blue",
    borderColor:"black",
    borderWidth:1,
    margin:10
  }
})


export default App;



