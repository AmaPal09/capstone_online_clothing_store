//cart.context.jsx

import { 
    createContext, 
    useState, 
    useEffect, 
    useReducer,  
} from "react";


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


//Context declaration
export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},  
    cartItems: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    clearItemFromCart: () => {}, 
    cartCount: 0, 
    cartTotal: 0, 
});

const INITIAL_CART_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0, 
    cartTotal: 0, 
}

const cartReducer = (state, action) => {
    const {type, payload} = action; 

    switch(type) {
        
        default: 
            throw new Error(`Unhandled type of ${type} in cartReducer`)
    }
}

//Context values provided for children
export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0); 
    const [cartTotal, setCartTotal] = useState(0); 

    useEffect(()=> {
        const newCartCount = cartItems.reduce((total, cartItem)=> {
            return total + cartItem.quantity 
            }, 
        0)
        setCartCount(newCartCount); 
    }, [cartItems]); 

    useEffect(()=> {
        const newCartTotal = cartItems.reduce((total, cartItem)=> {
            return total + cartItem.quantity * cartItem.price
            }, 
        0)
        setCartTotal(newCartTotal); 
    }, [cartItems]); 


    const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));

    const removeItemFromCart = (cartItemtoRemove) =>
    setCartItems(removeCartItem(cartItems, cartItemtoRemove));

    const clearItemFromCart = (cartItemToClear) =>  {
        setCartItems(clearCartItem(cartItems, cartItemToClear)); 
    }

    const value = {
        isCartOpen, 
        setIsCartOpen, 
        cartItems, 
        addItemToCart, 
        cartCount, 
        removeItemFromCart, 
        clearItemFromCart, 
        cartTotal, 
    }; 

    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>

}