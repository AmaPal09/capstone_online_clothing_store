/*navigation.route.component.jsx*/

import { 
    Fragment, 
} from 'react';
import { Outlet,} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 


import { signOutStart } from '../../store/user/user.action'

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';

import { selectIsCartOpen  } from '../../store/cart/cart.selector'
import { selectCurrentUser } from '../../store/user/user.selector';

import {
    NavigationContainer, 
    LogoContainer, 
    NavLinksContainer, 
    NavLinkContainer, 
} from './navigation.route.styles.jsx';


//Navigation route component
const Navigation = () => {
    
    const dispatch = useDispatch(); 
    const signOutUser = () => dispatch(signOutStart()); 

    const currentUser = useSelector(selectCurrentUser); 
    const isCartOpen = useSelector(selectIsCartOpen); 

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                	<CrownLogo className='logo'/>
                </LogoContainer>
                <NavLinksContainer>
                	<NavLinkContainer to='/shop'>
                		SHOP
                	</NavLinkContainer>
                    {
                        currentUser ?
                            (<NavLinkContainer 
                                as='span' 
                                onClick={
                                    signOutUser
                                    }>
                                    SIGN OUT
                            </NavLinkContainer>)
                            : (<NavLinkContainer 
                                to='/auth'>
                                SIGN IN
                            </NavLinkContainer>)
                    }

                    <CartIcon />
                </NavLinksContainer>
                { isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    );
};

export default Navigation;