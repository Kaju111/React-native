import React from "react";
import {
View,
Text,
StyleSheet, 
Image, 
Button
} from 'react-native'
import {useDispatch} from 'react-redux'
import { addToCart } from "./redux/action";

const Product = (props) => {
const item = props.item
const dispatch = useDispatch()    

const handleAddToCart = (item) =>{
    dispatch(addToCart(item))
}


    return(
        <View>

<View style={{alignItems:"center", margin:20}}>
            <Text style={{fontSize:24}}>{item.name}</Text>
            <Text style={{fontSize:24}}>{item.price}</Text>
            <Text style={{fontSize:24}}>{item.color}</Text>
            <Image style={{width:200, height:200}} source={{uri:item.image}}/>
            <Button title='add to card' onPress={() => handleAddToCart(item)}/>
          </View>

        </View>
    )
}

export default Product;
