// import './categories.styles.scss';
// import CategoryItem from'./components/category-item/category-item.component.jsx';

import { Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.route.component.jsx';
import Navigation from './routes/navigation/navigation.route.component.jsx';
import Auth from './routes/authentication/authentication.route.component.jsx';

const Shop = () => {
    return (
        <h1>This is the shop page</h1>
    );
};

const App =() =>  {
    return(
        <Routes>
            <Route path='/' element = {<Navigation/>}>
                <Route index = {true} element={ <Home/>}/>
                <Route path='shop' element={ <Shop/>}/>
                <Route path='auth' element={ <Auth/> } />
            </Route>
        </Routes>
    );
};

export default App;
