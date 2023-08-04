//shop.route.component.jsx

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux'
 
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'; 

import { fetchCategoriesAsync } from '../../store/categories/category.action';

import CategoriesPreview from '../categories-preview/categories-preview.route.component.jsx';
import Category from '../category/category.route.component';



//Shop route component
const Shop = () => {

    const dispatch = useDispatch(); 
    useEffect(() => {
        // const getCategoriesMap = async() => {
            // const categoriesArray = await getCategoriesAndDocuments(); 
            dispatch(fetchCategoriesAsync()); 
        // }; 
        // getCategoriesMap(); 
    }, []); 


  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
