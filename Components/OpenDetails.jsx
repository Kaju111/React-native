import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

function OpenDetails() {
    const [show, setShow] = useState(false)
  
    const toggle = () =>{
        setShow(true)
    }
    return (
    <View>
        
        {show== true ? 
        <View style={styles.container}>
        <Text style={styles.content}>
            hello world, my name is mr kaju saikia
        </Text>
        <Button onPress={()=>{setShow(false)}} title='close'/>
    
</View>
:
null        
    }

        
        <Button onPress={toggle} title='Open Details'/>

      
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        height: 170,
        borderWidth: 4,
        width: 200,
        marginBottom: 90
    },
    openBtn:{
        flex:1,
        justifyContent: 'flex-end'
    },
    closeBtn:{
        justifyContent:'flex-end',
        margin: 20

    }, 
    content:{
        fontSize: 20,
        marginBottom:81
    }
})
export default OpenDetails
