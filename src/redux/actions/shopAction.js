import {  REMOVE_CART_ITEM,GET_ITEMS,CART_ADD_ITEM } from "../types";
import axios from "axios"
export const getItems = () => async(dispatch) => {
    
  try {
    const res =await axios("http://localhost:3000/items"
    
    );
    console.log("getItems",res)
    dispatch({
        type:GET_ITEMS,
        payload:res.data
    })
  } catch (e) {
    console.log(e)
  }
};

export const addCartItems =(item)=> async(dispatch)=>{
  try{
    dispatch({
      type:CART_ADD_ITEM,
      payload:item
    })
  }catch(e){

  }
}

export const removeCartItem = (item) =>(dispatch)=> {
  try{

    dispatch({
  
      type: REMOVE_CART_ITEM,
      payload: item,
    })
  } catch(e){
    console.log(e)
  }

};

  

