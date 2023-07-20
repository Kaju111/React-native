import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

function DynamicRadio() {
    const [select, setSelect] = useState(1)

    const skills = [
        {
            id:1,
            name: 'JAVA'
         },

         {
            id:2,
            name: 'PHP'
         },
         {
            id:3,
            name: 'NODE'
         },
         {
            id:4,
            name: 'SQL'
         },
        ]
    return (
      <View>
          {
            skills.map((item,index)=><TouchableOpacity 
            key={index}
            onPress={()=>{setSelect(item.id)}}>
            <View style={styles.radioWrapper}>
              <View style={[styles.radio, {backgroundColor: select==  item.id? 'red' : 'blue'} ]}>
              {
                select == item.id ? <View style={styles.radioBg}></View> : null
            }
              
              </View>
              <Text style={styles.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity> )
          }
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
      borderWidth: 2,
      borderRadius: 20,
      margin: 10,
    },
    radioWrapper: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    radioBg: {
      backgroundColor: 'red',
      height: 24,
      width: 24,
      margin: 6,
      borderRadius: 30,
    },
  
})


export default DynamicRadio
