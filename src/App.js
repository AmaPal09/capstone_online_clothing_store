// import './categories.styles.scss';
// import CategoryItem from'./components/category-item/category-item.component.jsx';

import { Routes, Route} from 'react-router-dom';
import Home from './routes/home/home.route.component.jsx';

const App =() =>  {
    return(
        <Routes>
            <Route path='/home' element={ <Home/>}/>
        </Routes>
    );
}

export default App;
