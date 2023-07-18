import React, { useState } from 'react'
import {Button, StyleSheet, Text, TextInput, View, CheckBox} from 'react-native'

function Show() {

    const[show, setShow] = useState(true)
    const [hide, setHide] = useState('hide')

    const clik = ()=>{
        setShow(!show)
        setHide('show')
    }

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckBoxChange = () => {
      setIsChecked(!isChecked);
    };
  

  return (
    <View>
      <Text style={{fontSize:30, margin:4}}>Show/Hide components</Text>
      <TextInput  style={styles.TextInput} placeholder='Enter your email'/>
      <CheckBox
        checked={isChecked}
        onPress={handleCheckBoxChange}
      />
      <Text>Check me out</Text>
      {/* <Button title={hide} onPress={clik}/>  */}
      {
        show ? <User/> : null
      }

    </View>
  )
}

const styles = StyleSheet.create({
TextInput:{
  fontSize:20,
  borderWidth: 1,
  borderColor: 'black',
  margin: 10

}
})

const User= ()=>{
    return(
    <View>
        <Text style={{fontSize:31, color:'blue'}}>My Componentd</Text>
    </View>
    )
}

export default Show
