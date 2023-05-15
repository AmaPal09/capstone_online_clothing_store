// shop.route.component.jsx
import { useContext } from 'react';

import { ProductsContext } from '../../contexts/products.context.jsx';



const Shop = () => {

	const { products } = useContext(ProductsContext);

	return (
		<div>
			{ products.map((product) => (
				<div key={product.id}>
					<h1>{product.name}</h1>
				</div>
				)
			)}
		</div>
	)
}

export default Shop;