import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ScrollView,
  SectionList,
  Modal,
  Image,
} from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage"
import  Header  from './Components/Header';
import  Product  from './Components/Product';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import RadioButton from './Components/Showhide';
// import Radio from './Components/Radio';
// import DynamicRadio from './Components/DynamicRadio';
// import Loder from './Components/Loder';
// import PressButton from './Components/PressButton';
// import OpenDetails from './Components/OpenDetails';

const App = (props) => {
  
  const products =[
    {
      name: 'Sumsung mobile',
      color: 'White',
      price: 3000,
      image : "https://loremflickr.com/640/360"
    },
    {
      name: 'Apple mobile',
      color: 'White',
      price: 9800,
      image : "https://placebeard.it/640x360/360"
    },
    {
      name: 'Nokia mobile',
      color: 'black',
      price: 31000,
      image : "https://baconmockup.com/640/360"
    },
    
  ]
  
  return (
    <View>
        <Header/>
    <ScrollView>
        {
          products.map((item)=><Product item={item}/>)
        }
        </ScrollView>
        </View>
  );
};

// this is Tab (Top) Navigation part

// const Tab = createMaterialTopTabNavigator()
// const App = () =>{
//   return(
//   <NavigationContainer>
//         <Tab.Navigator>
//            <Tab.Screen name="Home" component={Home}/>
//            <Tab.Screen name="Press" component={OpenDetails}/>
//         </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

//This is Tab (buttom) Navigation part

// const Tab = createBottomTabNavigator()
// const App = () => {
//   return(
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={Home}/>
//         <Tab.Screen name="Press" component={OpenDetails}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   )
// }

//This is StackNavigation Part

// const Stack = createNativeStackNavigator();
// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="press" component={OpenDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

//This is UserDta part

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const UserData = props => {
  const item = props.item;
  return (
    <View style={styl.box}>
      <Text style={styl.item}>{item.name}</Text>
      <Text style={styl.item}>{item.email}</Text>
    </View>
  );
};

const styl = StyleSheet.create({
  item: {
    fontSize: 24,
    color: 'blue',
    margin: 2,
    flex: 1,
  },
  box: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'green',
    margin: 2,
  },
});

//This is Show part

function Show() {
  const [show, setShow] = useState(true);
  const [hide, setHide] = useState('hide');

  const clik = () => {
    setShow(!show);
    setHide('show');
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckBoxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <View>
      <Text style={{fontSize: 30, margin: 4}}>Show/Hide components</Text>
      <TextInput style={sty.TextInput} placeholder="Enter your email" />
      <CheckBox checked={isChecked} onPress={handleCheckBoxChange} />
      <Text>Check me out</Text>
      {/* <Button title={hide} onPress={clik}/>  */}
      {show ? <User /> : null}
    </View>
  );
}

const sty = StyleSheet.create({
  TextInput: {
    fontSize: 20,
    borderWidth: 1,
    borderColor: 'black',
    margin: 10,
  },
});

const User = () => {
  return (
    <View>
      <Text style={{fontSize: 31, color: 'blue'}}>My Componentd</Text>
    </View>
  );
};

//This is Responsive part

function Responsive() {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <Text>kaju</Text>
    </View>
  );
}

//This is Radio part

function Radio() {
  const [select, setSelect] = useState(1);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setSelect(1);
        }}>
        <View style={styes.radioWrapper}>
          <View style={styes.radio}>
            {select == 1 ? <View style={styes.radioBg}></View> : null}
          </View>
          <Text style={styes.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          setSelect(2);
        }}>
        <View style={styes.radioWrapper}>
          <View style={styes.radio}>
            {select == 2 ? <View style={styes.radioBg}></View> : null}
          </View>
          <Text style={styes.radioText}>Radio 2</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
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
});

//This is PressButton part

function PressButton() {
  return (
    <View>
      <Pressable
        delayLongPress={9000}
        // onPress={()=>console.warn('Normal on press')}
        onLongPress={() => console.warn('long press')}
        // onPressIn={()=>console.warn('press in ')}
        // onPressOut={()=>console.warn('press out ')}
      >
        <Text style={stes.PresibleBtn}>Presible</Text>
      </Pressable>
    </View>
  );
}
const stes = StyleSheet.create({
  PresibleBtn: {
    backgroundColor: 'blue',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
    shadowColor: '#000',
    elevation: 5,
  },
});

//This is Loder part

function Loder() {
  return (
    <View style={tyles.main}>
      <ActivityIndicator size={60} />
    </View>
  );
}

const tyles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//This is OpenDetails part

function OpenDetails() {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(true);
  };
  return (
    <View>
      {show == true ? (
        <View style={yles.container}>
          <Text style={yles.content}>
            hello world, my name is mr kaju saikia
          </Text>
          <Button
            onPress={() => {
              setShow(false);
            }}
            title="close"
          />
        </View>
      ) : null}

      <Button onPress={toggle} title="Open Details" />
    </View>
  );
}
const yles = StyleSheet.create({
  container: {
    height: 170,
    borderWidth: 4,
    width: 200,
    marginBottom: 90,
  },
  openBtn: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  closeBtn: {
    justifyContent: 'flex-end',
    margin: 20,
  },
  content: {
    fontSize: 20,
    marginBottom: 81,
  },
});

//This is list part

function List() {
  const [count, setCount] = useState(0);
  const [no, setNo] = useState(10);

  useEffect(() => {
    console.warn('hello');
  }, [count, no]);

  return (
    <View>
      <Text style={{fontSize: 30}}>
        {' '}
        {no} Life Cycel with use useEffet ComponentsDidmount {count}
      </Text>
      <Button
        title="Update Count"
        onPress={() => {
          setCount(count + 1);
        }}></Button>
      <Button
        title="Update No"
        onPress={() => {
          setNo(no + 1);
        }}></Button>
    </View>
  );
}

//DynamicRadio

function DynamicRadio() {
  const [select, setSelect] = useState(1);

  const skills = [
    {
      id: 1,
      name: 'JAVA',
    },

    {
      id: 2,
      name: 'PHP',
    },
    {
      id: 3,
      name: 'NODE',
    },
    {
      id: 4,
      name: 'SQL',
    },
  ];
  return (
    <View>
      {skills.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => {
            setSelect(item.id);
          }}>
          <View style={ses.radioWrapper}>
            <View
              style={[
                ses.radio,
                {backgroundColor: select == item.id ? 'red' : 'blue'},
              ]}>
              {select == item.id ? <View style={ses.radioBg}></View> : null}
            </View>
            <Text style={ses.radioText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
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
});

// This is StackNavication part

// const Stack = createNativeStackNavigator()
// const Nav = () => {
//   return(
//     <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name='Home' component={Home}/>
//         </Stack.Navigator>
//     </NavigationContainer>
//   )
// }

const Home = props => {
  return (
    <View style={{justifyContent: 'center', flex: 1, alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home</Text>
    </View>
  );
};

//This is API call part

const APIcl = () => {
  const [data, setData] = useState(undefined);

  const getAPIdata = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIdata();
  }, []);
  return (
    <View>
      <Text>API call</Text>
      {data ? (
        <View>
          <Text style={{fontSize: 30}}>{data.id}</Text>
          <Text style={{fontSize: 30}}>{data.userId}</Text>
          <Text style={{fontSize: 30}}>{data.title}</Text>
        </View>
      ) : null}
    </View>
  );
};

//This is API call useing map

const ApiDataMap = () => {
  const [data, setData] = useState(undefined);
  const getAPIdata = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIdata();
  }, []);
  return (
    <ScrollView style={{marginBottom: 5}}>
      <Text>List with api call</Text>
      {data
        ? data.map(item => (
            <View>
              <Text style={{fontSize: 20, margin: 4}}>id : {item.id}</Text>
              <Text style={{fontSize: 10, margin: 4}}>{item.title}</Text>
              <Text style={{fontSize: 10, margin: 10}}>{item.body}</Text>
            </View>
          ))
        : null}
    </ScrollView>
  );
};

//This is FlatList with API

const FlatAPI = () => {
  const [data, setData] = useState([]);
  const getAPIdata = async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
  };
  useEffect(() => {
    getAPIdata();
  }, []);
  return (
    <View>
      <Text>Code </Text>
      {data.length ? (
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
              <Text>{item.id}</Text>
            </View>
          )}
        />
      ) : (
        <Text>Node data 404</Text>
      )}
    </View>
  );
};

//Make API with jSON-server
//Install jaon server :- npm install -g json-server
//Create a new folder in dekstop and open vs code
//Start JSON Server :- json-server --watch db.json
//create a new file and put your api data
//Start your localhost

// THIS IS NOT VS CODE PART THIS ANATHER VS CODE PART
// db.json :-
//{
//     "users":[
//       {
//           "name": "kaju saikia",
//           "age" : "21",
//           "email": "kaju@email.com"
//       },
//       {
//           "name": "riku saikia",
//           "age" : "21",
//           "email": "riku@email.com"
//       },
//       {
//           "name": "roku saikia",
//           "age" : "26",
//           "email": "roku@email.com"
//       },
//       {
//           "name": "aman saikia",
//           "age" : "23",
//           "email": "aman@email.com"
//       }

//   ]
// }

const JsonCall = () => {
  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    const url = 'http://192.168.1.9:3000/users';
    let result = await fetch(url);
    result = await result.json();
    setData(result);
    console.warn(result);
  };

  useEffect(() => {
    getAPIdata();
  }, []);

  return (
    <View>
      <Text>this is api</Text>
      {data.length ? (
        data.map(item => (
          <View>
            <Text>{item.name}</Text>
          </View>
        ))
      ) : (
        <Text>Page not found 404</Text>
      )}
    </View>
  );
};

//This is POST API call

const CallNo = () => {
  const [data, setData] = useState([]);

  const saveAPIData = async () => {
    console.warn('test');
    const data = {
      name: 'sam',
      age: 34,
      email: 'sam@gmai.com',
    };

    const url = 'http://10.82.28.13:3000/users';
    let result = await fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data),
    });
    result = result.json();
    console.warn(result);
  };

  return (
    <View>
      <Text style={{fontSize: 30}}>Post API call</Text>
      <Button title="Save Data" onPress={saveAPIData} />
    </View>
  );
};

//POST API with input fields

const Fomes = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState('');

  const [nameEroor, setNameEroor] = useState(false)
  const [ageEroor, setAgeEroor] = useState(false)
  const [emailEroor, setEmailEroor] = useState(false)


  const saveData = async () => {

    if(!name){
      setNameEroor(true)
    }
    else {
      setNameEroor(false)
    }

    if(!age){
      setAgeEroor(true)
    }
    else {
      setAgeEroor(false)
    }
    
        if (!email){
          setEmailEroor(true)
        }
        else {
          setEmailEroor(false)
        }


    if (!age || !name ||!email){
      setAgeEroor(true)
    }



    const url = "http://192.168.1.11:3000/users"
    let result = await fetch(url,{
      method:"POST",
      headers : {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({name,email,age})
    })

  };

  return (
    <View>
        <Text style={{fontSize: 25}}>POST API with input fields data</Text>
          <TextInput value={name} onChangeText={(text) => setName(text)} style={magic.input} 
          placeholder="Enter Name" />

          {nameEroor ? <Text style={{color:"red", marginLeft:20, fontSize: 18}}>Please enter valid name 
          </Text> : null}

          <TextInput value={email} onChangeText={(text) => setEmail(text)} style={magic.input} 
          placeholder="Enter email" />
        
          {emailEroor ? <Text style={{color:"red", marginLeft:20, fontSize: 18}}>Please enter valid email 
            </Text> : null}
        
          <TextInput value={age} onChangeText={(text) => setAge(text)} style={magic.input} 
          placeholder="Enter age" />

          {ageEroor ? <Text style={{color:"red", marginLeft:20, fontSize: 18}}>Please enter valid age 
          </Text> : null}

            <Button title="save data" onPress={saveData} />
    </View>
  );
};

const magic = StyleSheet.create({
  input: {
    borderColor: 'skyblue',
    borderWidth: 1,
    margin: 20,
  },

  dataBtn: {
    backgroundColor: 'green',
  },
});

//LIST WITH API DATA

const ListApi = () => {

  const [data, setData] = useState([]);

  const getAPIdata = async () => {
    const url = 'http://192.168.1.11:3000/users';
    let result = await fetch(url);
    result = await result.json();
    console.warn(result);
    if(result){
      setData(result);

    }
  };

  const deleteUser =async (id) =>{
    const url = 'http://192.168.1.11:3000/users';
    let result = await fetch(`${url}/{id}`,{
      method: "delete"
    });
    result = await result.json();
    if(result){
      console.warn("user deleted")
    }
  }


  useEffect(()=>{
    getAPIdata()
  },[])

  return(
    <View style={moms.dataWrp}  >
      {
        data.length?
        data.map((item)=><View>
          <View><Text>{item.name}</Text></View>
          <View><Text>{item.age}</Text></View>
          <View><Text>{item.email}</Text></View>
          <View><Button title='Delete'/></View>
          <View><Button title='Update'/></View>
        </View>) : null
        }
        <Modal visible={true} transparent={true}>
          <View>
            <Text>Dummy Text</Text>
          </View>
        </Modal>
    </View>
  )
}

const moms = StyleSheet.create({
  container:{
    flex:1
  },
  dataWrp:{
    flex:1,
    
  }
})

//This is Search with API part

const ListApiSrch = () => {
  
  const input = useRef()

  const UpdateInput = () => {
    input.current.focus();
    input.current.setNativeProps({
      fontSize:24,
      color: 'green'
    })
  }


  return(
    <View>

      <TextInput ref={input}  style={yoda.input} placeholder={'Enter name'}/>
      <TextInput style={yoda.input} placeholder={'Enter Password'}/>
      <Button title='update input' onPress={UpdateInput}/>
    </View>
  )
}

const yoda = StyleSheet.create({
  container:{
    flex: 1,
    padding: 16,
  },
  input:{
    borderColor: "skyblue",
    borderWidth:2,
    margin: 10
  }
})

//This is async storage part

const Storage = () =>{

  const [name,setName] = useState('')

  const setData = async() =>{
    await AsyncStorage.setItem("name","Kaju saikia")
  }

  const getData = async() =>{
   const name = await AsyncStorage.getItem("name")
   console.warn(name)
   setName(name)
  }

  const RemoveData = async() =>{
      await AsyncStorage.removeItem("name")
      setName('')
      console.warn('')
  }

  return(
    <View>
        <Text style={{fontSize:28}}>AsyncStorage With React Native | 
        {name}
        </Text>
        
        <Button title='Set data' onPress={setData}/>
        <Button title='Get data' onPress={getData}/>
        <Button title='remove data' onPress={RemoveData}/>

    </View>
  )
}



export default App;
