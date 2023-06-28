// categories.context.jsx

import { 
    createContext, 
    useState, 
    useEffect 
} from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'


//Categories context declaration
export const CategoriesContext = createContext({
	categoriesMap: {},
});


//Categories context values provided for children
export const CategoriesProvider = ({ children }) => {
	const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async() => {
            const categoryMap = await getCategoriesAndDocuments(); 
            // console.log(categoryMap); 
            setCategoriesMap(categoryMap); 
        }; 

        getCategoriesMap(); 
    }, []); 
	
    const value = {categoriesMap};

	return(
		<CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
	);
}; 