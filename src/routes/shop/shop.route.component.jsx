// shop.route.component.jsx
import { useContext } from 'react';

import ProductCard from '../../components/product-card/product-card.component.jsx';

import { ProductsContext } from '../../contexts/products.context.jsx';

import './shop.route.styles.scss';


const Shop = () => {

	const { products } = useContext(ProductsContext);

	return (
		<div className="products-container">
			{ products.map((product) => (
				<ProductCard key={product.id} product={product}></ProductCard>
				)
			)}
		</div>
	)
}

export default Shop;