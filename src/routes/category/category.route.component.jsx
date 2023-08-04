//category.route.component.jsx

import {  
    useState, 
    useEffect,
    Fragment, 
} from "react";
import { useSelector} from 'react-redux'; 
import { useParams } from "react-router-dom"; 

import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/category.selector";

import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import {
    CategoryContainer, 
    CategoryTitle, 
} from "./category.route.styles"; 


//Category route component
const Category = () => {
    
    const { category } = useParams();  
    const categoriesMap = useSelector(selectCategoriesMap); 
    const isLoading = useSelector(selectCategoriesIsLoading); 

    const [products, setProducts] = useState(categoriesMap[category]); 

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap]); 

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            { isLoading ? (
                <Spinner/> 
            ) : (  
                <CategoryContainer>
                {   products && 
                    products.map((product) => <ProductCard 
                        key={product.id} 
                        product={product}/> 
                    )
                }
                </CategoryContainer>
            )
            }
            {/* <CategoryContainer>
                {   products && 
                    products.map((product) => <ProductCard 
                        key={product.id} 
                        product={product}/> 
                    )
                }
            </CategoryContainer> */}
        </Fragment>
    ); 
}; 

export default Category; 