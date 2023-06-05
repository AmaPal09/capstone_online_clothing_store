//category.route.component.jsx


import { 
    useContext, 
    useState, 
    useEffect,
    Fragment, 
} from "react";

import { useParams } from "react-router-dom"; 

import { CategoriesContext } from "../../contexts/categories.context"

import ProductCard from "../../components/product-card/product-card.component";

import {
    CategoryContainer, 
    CategoryTitle, 
} from "./category.route.styles"; 


const Category = () => {
    const { category } = useParams();  
    const { categoriesMap } = useContext( CategoriesContext ); 

    const [products, setProducts] = useState(categoriesMap[category]); 

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]); 

    // console.log(products); 

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {   products && 
                    products.map((product) => <ProductCard key={product.id} product={product}/> )
                }
            </CategoryContainer>
        </Fragment>
    ); 
}; 

export default Category; 