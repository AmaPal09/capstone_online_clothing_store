// cart-icon.styles.jsx

import styled from 'styled-components'; 

import { ReactComponent as ShoppingBagSVG} from '../../assets/shopping-bag.svg'; 


export const CartIconContainer = styled.div`
    width: 45px; 
    height: 45px; 
    position: relative; 
    display: flex; 
    align-items: center; 
    justify-content: center; 
    cursor: pointer; 
`; 

export const ItemCount = styled.span`
    position: absolute; 
    font-size: 10px; 
    font-weight: bold; 
    bottom: 12px; 
`; 

export const ShoppingIcon = styled(ShoppingBagSVG)`
    width: 24px; 
    height: 24px;
`; 
