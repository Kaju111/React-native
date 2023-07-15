import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const UserData =(props) =>{
    const item= props.item;
  return (
    <View style={styles.box}>
      <Text style={styles.item}>{item.name}</Text>
      <Text style={styles.item}>{item.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    item:{
      fontSize:24,
      color:"blue",
      margin:2,
      flex:1,
    },
    box:{
      flexDirection: "row",
      borderWidth:2,
      borderColor:'green',
      margin:2,
    }
  })

export default UserData
