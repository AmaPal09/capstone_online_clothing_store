// product-card.components.jsx

import { useDispatch, useSelector } from 'react-redux'

import {addItemToCart} from '../../store/cart/cart.action'; 
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component.jsx';

import {
    ProductCardContainer, 
    Footer, 
    BaseSpan, 
    PriceSpan,
} from './product-card.styles.jsx';


//Product card components 
const ProductCard = ({product}) => {
	const {name, imageUrl, price} = product;
    
    const cartItems = useSelector(selectCartItems); 
    const dispatch = useDispatch(); 

    const addProductToCart = () => dispatch(addItemToCart( cartItems,product));

	return(
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`}/>
			<Footer>
				<BaseSpan>{name}</BaseSpan>
				<PriceSpan>{price}</PriceSpan>
			</Footer>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to card</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;