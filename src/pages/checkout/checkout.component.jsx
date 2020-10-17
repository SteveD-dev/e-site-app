import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems , selectCartTotal} from '../../redux/cart/cart.selectors';

 import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout.styles.scss';
import StripeCheckoutButton from '../../components/stripe/stripe.component';


const CheckOut = ({ cartItems, total}) => (
    <div className='checkout-page'>
       <div className='checkout-header'>
            <div className='checkout-block'>Product</div>
            <div className='checkout-block'>Description</div>
            <div className='checkout-block'>Quantity</div>
            <div className='checkout-block'>Price</div>
            <div className='checkout-block'>Remove</div>
       </div>
       {
           cartItems.map(el => <CheckoutItem key={el.id}  cartItem={el}/>)
       }
       <div className='total'>
        <span> Total: ${total}</span>
       </div>
       <div className='test-warning'>
            * please use the following credit card numer*
            <br />
            4242 4242 4242 4242 Exp: 01/21 - CVV: 123
       </div>
       <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
}
);

export default connect(mapStateToProps)(CheckOut);