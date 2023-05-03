/*navigation.route.component.jsx*/

import { Fragment } from 'react';
import { Outlet, Link} from 'react-router-dom';


const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation-container'>
                <h1>I am the navigation bar</h1>
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;