/*navigation.route.component.jsx*/

import { Fragment, useContext } from 'react';
import { Outlet, Link} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context.jsx';

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import './navigation.route.styles.scss';

const Navigation = () => {
    const { currentUser } = useContext(UserContext);

    return (
        <Fragment>
            <div className='nav-container'>
                <Link className='logo-container' to='/'>
                	<CrownLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                	<Link className='nav-link' to='/shop'>
                		SHOP
                	</Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutUser}>SIGN OUT</span>)
                            : (<Link className='nav-link' to='/auth'>
                                SIGN IN
                            </Link>)
                    }

                    <CartIcon />
                </div>
                <CartDropdown />
            </div>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;