import { useContext } from 'react'; 

import { CartContext } from '../../contexts/cart.context';

import './checkout.route.styles.scss'; 

const Checkout = () => {
    const {cartItems, addItemToCart} = useContext(CartContext); 

    return (
        <div> 
            <h1>This is checkout page</h1>
            <div>
                {
                    cartItems.map((cartItem) => {
                        const {id, name, quantity} = cartItem; 
                        return(
                            <div key={id}>
                                <h2>{name}</h2>
                                <h2>{quantity}</h2>
                                <br /> 
                                <span>decrement</span>
                                <br /> 
                                <span onClick={() => addItemToCart(cartItem)}>
                                    increment
                                </span>
                            </div>
                        ); 
                    })
                }
            </div>
        </div>
        
    )
}

export default Checkout; 