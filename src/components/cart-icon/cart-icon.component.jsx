//cart-icon.component.jsx

import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import {
    CartIconContainer, 
    ItemCount, 
    ShoppingIcon, 
} from './cart-icon.styles'; 


//CartIcon component
const CartIcon = () => {
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext); 

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 

    return(
        <CartIconContainer onClick= {toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    ); 
}

export default CartIcon; 