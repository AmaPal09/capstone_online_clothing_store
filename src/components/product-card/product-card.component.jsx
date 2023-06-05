// product-card.components.jsx
import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button, {BUTTON_TYPE_CLASSES} from '../button/button.component.jsx';

import {
    ProductCardContainer, 
    Footer, 
    BaseSpan, 
    PriceSpan,
} from './product-card.styles.jsx';


const ProductCard = ({product}) => {
	const {name, imageUrl, price} = product;
    const { addItemToCart } = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

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