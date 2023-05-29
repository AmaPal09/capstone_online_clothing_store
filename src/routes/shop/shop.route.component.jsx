// shop.route.component.jsx
import { useContext } from 'react';

// import ProductCard from '../../components/product-card/product-card.component.jsx';
import CategoryPreview from '../../components/category-preview/category-preview.component.jsx';

import { CategoriesContext } from '../../contexts/categories.context';

import './shop.route.styles.scss';


const Shop = () => {

	const { categoriesMap } = useContext(CategoriesContext);

	return (
        <div className=" shop-container">
            {Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title]; 

                return <CategoryPreview key={title} title={title} products={products} /> 
            })}
        </div>
	); 
}

export default Shop;