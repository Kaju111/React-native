import React from 'react'
import { Text, StyleSheet, View, Pressable } from 'react-native'

function PressButton() {
  return (
    <View>
      <Pressable
      delayLongPress={9000}
      // onPress={()=>console.warn('Normal on press')}
      onLongPress={()=>console.warn('long press')}
      // onPressIn={()=>console.warn('press in ')}
      // onPressOut={()=>console.warn('press out ')}
      >
        <Text style={styles.PresibleBtn}>Presible</Text>

      </Pressable>
    </View>
  )
}
const styles = StyleSheet.create({
    PresibleBtn:{
        backgroundColor:'blue',
        color:'#fff',
        padding:10,
        margin:10,
        borderRadius:10,
        fontSize:20,
        textAlign:'center',
        shadowColor:'#000',
        elevation:5,
    }
})

export default PressButton

