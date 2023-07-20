import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

function Loder() {
  return (
    <View style={styles.main}>
        <ActivityIndicator size={60}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default Loder
