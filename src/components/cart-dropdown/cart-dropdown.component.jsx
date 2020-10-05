import React from 'react';
import { connect} from 'react-redux';

import { selectCartItems} from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';
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

 
// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     cartItems
// });

 //or smae thing using selector for memorize
 const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropDown);