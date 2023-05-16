import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'; 

import Button from '../button/button.component';

import './cart-icon.styles.scss'; 

const CartIcon = () => {
    return(
        <div className='cart-icon-container'>
            <ShoppingBag className='shopping-icon'/>
            <span className='item-count'>0</span>
            {/* <Button>Go To Cart</Button> */}
        </div>
    ); 
}

export default CartIcon; 