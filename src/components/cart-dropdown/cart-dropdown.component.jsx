import React from 'react';
import { connect} from 'react-redux';
import { withRouter} from 'react-router-dom';
import { toggleCartHidden} from '../../redux/cart/cart.action';

import { createStructuredSelector } from 'reselect';
import { selectCartItems} from '../../redux/cart/cart.selectors';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';


import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems , history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.length ? 
                cartItems.map(el => 
                <CartItem key={el.id} item={el} />)
                :
                <span className="empty-cart"> Your cart is empty </span>
            }
        </div>
        
        <CustomButton onClick={() =>{
            history.push('/checkout');
            dispatch(toggleCartHidden());
            } }> check out</CustomButton>
    </div>
)

 
// const mapStateToProps = ({ cart: { cartItems }}) => ({
//     cartItems
// });
                //or 
 //smae thing using selector for memorize
//  const mapStateToProps = (state) => ({
//     cartItems: selectCartItems(state)
// });

    ///or same thing if we have more selector
    const mapStateToProps = createStructuredSelector({
        cartItems: selectCartItems
    });
    

export default withRouter(connect(mapStateToProps)(CartDropDown));