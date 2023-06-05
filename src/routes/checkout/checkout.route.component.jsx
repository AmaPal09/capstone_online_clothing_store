//checkout.route.component.jsx

import { useContext } from 'react'; 

import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    HeaderBlock, 
    CheckoutHeader, 
    CheckoutContainer, 
    TitleSpan,
} from './checkout.route.styles'; 

const Checkout = () => {
    const {cartItems, cartTotal } = useContext(CartContext); 

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader> 
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>     
            ))}
            <TitleSpan>Total: ${cartTotal}</TitleSpan>
        </CheckoutContainer>
        
    )
}; 

export default Checkout; 