/*navigation.route.component.jsx*/

import { 
    Fragment, 
    useContext 
} from 'react';

import { Outlet,} from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import { UserContext } from '../../contexts/user.context.jsx';
import { CartContext } from '../../contexts/cart.context';

import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import {
    NavigationContainer, 
    LogoContainer, 
    NavLinksContainer, 
    NavLinkContainer, 
} from './navigation.route.styles.jsx';


const Navigation = () => {
    const { currentUser } = useContext(UserContext);
    const { isCartOpen } = useContext(CartContext); 

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
                                onClick={signOutUser}>
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