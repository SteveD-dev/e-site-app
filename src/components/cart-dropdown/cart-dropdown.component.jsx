import React from 'react';
import { connect} from 'react-redux';

import CartItem from '../../redux/cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.map(el => 
                <CartItem key={el.id} item={el} />)
            }
        </div>
        
        <CustomButton> check out</CustomButton>
    </div>
)
const mapStateToProps = ({ cart: { cartItems}}) => ({
    cartItems
})

export default connect(mapStateToProps)(CartDropDown);