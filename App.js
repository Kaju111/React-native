import React, { useEffect, useState } from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  SectionList
} from 'react-native';

// import RadioButton from './Components/Showhide';
// import Radio from './Components/Radio';
// import DynamicRadio from './Components/DynamicRadio';
// import Loder from './Components/Loder';
// import PressButton from './Components/PressButton';
// import OpenDetails from './Components/OpenDetails';

const App = () => {
  return (
    <View style={styles.main}>


    {/* <RadioButton/> */}
    {/* <Radio/> */}
    {/* <DynamicRadio/> */}
    {/* <Loder/> */}
    {/* <PressButton/> */}
    <OpenDetails/>
    </View>



  );
};


//This is UserDta part

const styles = StyleSheet.create({
main:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center'

}
})


const UserData =(props) =>{
    const item= props.item;
  return (
    <View style={styl.box}>
      <Text style={styl.item}>{item.name}</Text>
      <Text style={styl.item}>{item.email}</Text>
    </View>
  )
}

const styl = StyleSheet.create({
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


  //This is Show part

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
        <TextInput  style={sty.TextInput} placeholder='Enter your email'/>
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
  
  const sty = StyleSheet.create({
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
  

  //This is Responsive part
  
  function Responsive() {
    return (
      
        <View style={{flex:1, backgroundColor:'red'}}>
          <Text>kaju</Text>
      </View>
      
    )
  }


  //This is Radio part

function Radio() {

  const [select, setSelect] = useState(1)

return (
  <View>
      <TouchableOpacity onPress={()=>{setSelect(1)}}>
      <View style={styes.radioWrapper}>
        <View style={styes.radio}>
        {
          select == 1 ? <View style={styes.radioBg}></View> : null
      }
        </View>
        <Text style={styes.radioText}>Radio 2</Text>
      </View>
    </TouchableOpacity> 
    
<TouchableOpacity onPress={()=>{setSelect(2)}}>
      <View style={styes.radioWrapper}>
        <View style={styes.radio}>
        {
          select == 2 ? <View style={styes.radioBg}></View> : null
      }
        </View>
        <Text style={styes.radioText}>Radio 2</Text>
      </View>
    </TouchableOpacity> 
  </View>
)
}


const styes = StyleSheet.create({
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


//This is PressButton part

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
        <Text style={stes.PresibleBtn}>Presible</Text>

      </Pressable>
    </View>
  )
}
const stes = StyleSheet.create({
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


  //This is Loder part


function Loder() {
  return (
    <View style={tyles.main}>
        <ActivityIndicator size={60}/>
      
    </View>
  )
}

const tyles = StyleSheet.create({
    main:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})


//This is OpenDetails part


function OpenDetails() {
  const [show, setShow] = useState(false)

  const toggle = () =>{
      setShow(true)
  }
  return (
  <View>
      
      {show== true ? 
      <View style={yles.container}>
      <Text style={yles.content}>
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
const yles = StyleSheet.create({
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


  //This is list part


function List () {

  const [count, setCount] = useState(0);
  const [no, setNo] = useState(10);

  useEffect(()=>{
    console.warn('hello')
  },[count,no])

  return (
    <View>
     <Text style={{fontSize:30}}> {no} Life Cycel with use useEffet
  ComponentsDidmount {count}      
     </Text>
     <Button title='Update Count' onPress={()=>{setCount(count+1)}}></Button>
     <Button title='Update No' onPress={()=>{setNo(no+1)}}></Button>


  

    </View>
  )
}



  //DynamicRadio

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
            <View style={ses.radioWrapper}>
              <View style={[ses.radio, {backgroundColor: select==  item.id? 'red' : 'blue'} ]}>
              {
                select == item.id ? <View style={ses.radioBg}></View> : null
            }
              
              </View>
              <Text style={ses.radioText}>{item.name}</Text>
            </View>
          </TouchableOpacity> )
          }
    </View>
  )
}


const ses = StyleSheet.create({
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

export default App;