import React, { useState } from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

function Radio() {

    const [select, setSelect] = useState(1)

  return (
    <View>
        <TouchableOpacity onPress={()=>{setSelect(1)}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
            select == 1 ? <View style={styles.radioBg}></View> : null
        }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity> 
      
 <TouchableOpacity onPress={()=>{setSelect(2)}}>
        <View style={styles.radioWrapper}>
          <View style={styles.radio}>
          {
            select == 2 ? <View style={styles.radioBg}></View> : null
        }
          </View>
          <Text style={styles.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity> 
    </View>
  )
}


const styles = StyleSheet.create({
    radioText: {
      fontSize: 20,
      color: '#00CED1',
    },
    radio: {
      height: 40,
      width: 40,
      borderColor: '#00CED1',
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
    },
    radioWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioBg: {
      backgroundColor: '#00CED1',
      height: 24,
      width: 24,
      margin: 6,
      borderRadius: 30,
    },
})


export default Radio
