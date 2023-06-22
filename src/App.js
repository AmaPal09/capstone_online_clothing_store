//App.js

import { Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.route.component.jsx';
import Navigation from './routes/navigation/navigation.route.component.jsx';
import Auth from './routes/authentication/authentication.route.component.jsx';
import Shop from './routes/shop/shop.route.component.jsx';
import Checkout from './routes/checkout/checkout.route.component.jsx';


const App =() =>  {
    return(
        <Routes>
            <Route path='/' element = {<Navigation/>}>
                <Route index = {true} element={ <Home/>}/>
                <Route path='shop/*' element={<Shop />} />
                <Route path='auth' element={ <Auth/> } />
                <Route path="checkout" element={ <Checkout /> }></Route>
            </Route>
        </Routes>
    );
};

export default App;
