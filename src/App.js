//App.js

import { Routes, Route} from 'react-router-dom';
import {  useEffect } from 'react';
import { useDispatch } from 'react-redux'; 

import { 
    onAuthStateChangedListener,
	createUserDocumentFromAuth,
    getCurrentUser, 
} from './utils/firebase/firebase.utils';

import Home from './routes/home/home.route.component.jsx';
import Navigation from './routes/navigation/navigation.route.component.jsx';
import Auth from './routes/authentication/authentication.route.component.jsx';
import Shop from './routes/shop/shop.route.component.jsx';
import Checkout from './routes/checkout/checkout.route.component.jsx';

import { setCurrentUser } from './store/user/user.action';

const App =() =>  {
    
    const dispatch = useDispatch(); 
    useEffect(() => {
        getCurrentUser().then((user)=> console.log(user)); 
		// const unsubscribe = onAuthStateChangedListener((user)=> {
		// 	if(user) {
		// 		createUserDocumentFromAuth(user);
		// 	}
		// 	dispatch(setCurrentUser(user));
		// }); 
		// return unsubscribe;
	}, []);

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
