import { useContext } from 'react';

import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'; 

// import Button from '../button/button.component'; 

import { CartContext } from '../../contexts/cart.context';

import './cart-icon.styles.scss'; 

const CartIcon = () => {
    const {isCartOpen, setIsCartOpen} = useContext(CartContext); 

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen); 

    return(
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon' onClick= {toggleIsCartOpen}/>
            <span className='item-count'>0</span>
            {/* <Button>Go To Cart</Button> */}
        </div>
    ); 
}

export default CartIcon; 