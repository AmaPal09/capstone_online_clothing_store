import { createContext, useState } from "react";

export const addCartItem = (cartItems, productToAdd) => {
    //find if cart items contains product to add
    const existingCartItem = cartItems.find((cartItem) => {
        return cartItem.id === productToAdd.id}); 
    
        //if found, increment quantity
    if (existingCartItem) {
        return cartItems.map((cartItem) => {
            if (cartItem.id === productToAdd.id) {
            return {...cartItem, quantity: cartItem.quantity+1} 
            }
            else {
                return cartItem    
            }
        }); 
    }

    //return new array with modified cartItems/new cartItem
    return [...cartItems, {productToAdd, quantity:1}]; 
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},  
    cartItems: [], 
    addItemToCart: () => {},
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItem] = useState([]); 

    const addItemToCart = (productToAdd) => {
        setCartItem(addCartItem(cartItems, productToAdd)); 
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart}; 

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>

}