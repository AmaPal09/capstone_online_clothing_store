//checkout.route.component.jsx

import { useSelector } from 'react-redux'; 

import { selectCartItems, selectCartTotal } from '../../store/cart/cart.selector'; 

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
    HeaderBlock, 
    CheckoutHeader, 
    CheckoutContainer, 
    TitleSpan,
} from './checkout.route.styles'; 


//Checout route component
const Checkout = () => {

    const cartItems = useSelector(selectCartItems); 
    const cartTotal = useSelector(selectCartTotal); 

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