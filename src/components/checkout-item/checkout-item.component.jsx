//checkout-item.component.jsx

import { useSelector, useDispatch  } from 'react-redux'; 

import {clearItemFromCart, addItemToCart, removeItemFromCart} from '../../store/cart/cart.action'; 
import { selectCartItems } from '../../store/cart/cart.selector'; 

import {
    RemoveButton,
    Arrow, 
    Quantity, 
    ImageContainer, 
    CheckoutItemContainer, 
    Value, 
    BaseSpan, 
} from './checkout-item.styles'; 


//Checkout item component
const CheckoutItem = ({cartItem}) => {
    const {name, imageUrl, quantity, price} = cartItem

    const dispatch = useDispatch(); 

    const cartItems = useSelector(selectCartItems); 

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));     
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem)); 
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem)); 

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`}/> 
            </ImageContainer>
            <BaseSpan> {name} </BaseSpan>
            <Quantity> 
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>
                    &#10095;
                </Arrow>
            </Quantity>
            <BaseSpan> {price} </BaseSpan>
            <RemoveButton onClick={clearItemHandler}>
                &#10005;
            </RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem; 