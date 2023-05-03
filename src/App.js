// import './categories.styles.scss';
// import CategoryItem from'./components/category-item/category-item.component.jsx';

import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.route.component.jsx';

const Shop = () => {
    return (
        <h1>This is the shop page</h1>
    );
};

const App =() =>  {
    return(
        <Routes>
            <Route path='/home' element={ <Home/>}/>
            <Route path='/shop' element={ <Shop/>}/>
        </Routes>
    );
};

export default App;
