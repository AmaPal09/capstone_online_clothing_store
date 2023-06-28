//shop.route.component.jsx

import { Routes, Route } from 'react-router-dom';

import CategoriesPreview from '../categories-preview/categories-preview.route.component.jsx';
import Category from '../category/category.route.component';


//Shop route component
const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
