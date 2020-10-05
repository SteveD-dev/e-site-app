import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden} from '../../redux/cart/cart.action';
import { selectCartItemsCount} from '../../redux/cart/cart.selectors';


import { ReactComponent as ShoppingIcon} from  '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden , itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

//hide or show cart icon function
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

//show number of all item oncart icon 

// const mapStateToProps = ({cart: {cartItems}}) => ({
//     itemCount: cartItems.reduce( (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
// });
        //or smae thing using selector for memorize

const mapStateToProps = state => ({
    itemCount: selectCartItemsCount(state)
})



export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);