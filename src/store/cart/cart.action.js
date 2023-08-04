
import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPE } from "./cart.types"


//Add a product to cart
export const addCartItem = (cartItems, productToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
    }
    
    return [...cartItems, { ...productToAdd, quantity: 1 }];
};


// removeCartItem
const removeCartItem = (cartItems, cartItemToRemove) => {
    //find cart item to remove 
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === cartItemToRemove.id 
    ); 

    //check if quantity = 1, if yes, remove item from cart 
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(
            (cartItem) => cartItem.id !== existingCartItem.id 
        ); 
    }; 

    //else return cartItems, matched cartItem reduced quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) =>
            cartItem.id === cartItemToRemove.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        );
    }
}; 

//clearCartItem
const clearCartItem = (cartItems, cartItemToClear) => 
    cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);


export const addItemToCart = (cartItems, product) =>{
        const newCartItems = addCartItem(cartItems, product); 
        return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems); 
    }

export const removeItemFromCart = (cartItems, cartItemtoRemove) =>{
        const newCartItems = removeCartItem(cartItems, cartItemtoRemove); 
        return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems); 
    }

export const clearItemFromCart = (cartItems, cartItemToClear) =>  {
        const newCartItems = clearCartItem(cartItems, cartItemToClear);
        return createAction(CART_ACTION_TYPE.SET_CART_ITEMS, newCartItems); 
    }

export const setIsCartOpen = (boolean) =>
    createAction(CART_ACTION_TYPE.SET_IS_CART_OPEN, boolean);
