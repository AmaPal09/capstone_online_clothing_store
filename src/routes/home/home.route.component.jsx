/* home.route.component.jsx*/

import {Outlet} from 'react-router-dom';

import Directory from '../../components/directory/directory.component.jsx';

//Home/index route component
const Home =() =>  {
    return(
    	<div>
    		<Outlet/>
    		<Directory />
    	</div>

    );
}

export default Home;