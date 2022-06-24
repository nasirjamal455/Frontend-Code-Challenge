import {GET_ITEMS, CART_ADD_ITEM, REMOVE_CART_ITEM, ADD_ITEM } from "../types"
import { addItemToCart, removeItemFromCart } from "../../utils/cartUtils";
const initialState = {
    items:null,
    cartItems : null
}
// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = initialState, action){
    console.log("from reducer",state, action.payload)
    switch(action.type){
        case GET_ITEMS:
            return {
                ...state, items:action.payload
            }

            case CART_ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
                
            }
           
        case REMOVE_CART_ITEM:
            return {
                ...state,
                cartItems: removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}