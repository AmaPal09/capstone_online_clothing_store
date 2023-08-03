//cart-icon.component.jsx

// import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// import { CartContext } from '../../contexts/cart.context';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action'; 

import {
    CartIconContainer, 
    ItemCount, 
    ShoppingIcon, 
} from './cart-icon.styles'; 


//CartIcon component
const CartIcon = () => {
    // const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext); 
    const dispatch = useDispatch(); 

    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount); 

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

    return(
        <CartIconContainer onClick= {toggleIsCartOpen}>
            <ShoppingIcon/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    ); 
}

export default CartIcon; 