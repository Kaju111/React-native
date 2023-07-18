import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

function RadioButton() {
  const [select, setSelect] = useState(1);
  const [email, setEmail] = useState('')
  const [secureTextEntry, setSecureTextEntry] = useState(true)

  const hide = () =>{
        setSelect(!select)
        setSecureTextEntry(!secureTextEntry);
  }

  return (
    <View>
        <TextInput
        secureTextEntry={secureTextEntry}
        placeholder='Enter your email' style={styles.hide}
        onChangeText={setEmail}
        value={email}
        />
      <TouchableOpacity onPress={hide}>
        <View style={styles.radioWrapper} value>
          <View style={styles.radio}>
        
        {
            select == 1 ? <View style={styles.radioBg}></View> : null
        }

          </View>
        <Text style={styles.radioText}>Radio 1</Text>
        </View>
      </TouchableOpacity>

      
    </View>
  );
}

const styles = StyleSheet.create({
  radioText: {
    fontSize: 20,
  },
  radio: {
    height: 40,
    width: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    margin: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBg: {
    backgroundColor: 'black',
    height: 24,
    width: 24,
    margin: 6,
    borderRadius: 30,
  },
  hide: {
    fontSize: 30,
    borderWidth: 2,
    borderColor: 'black',
    margin:15
  }
});

export default RadioButton;
