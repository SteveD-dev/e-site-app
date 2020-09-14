import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/wings.svg';
import CartIcon from '../cart-icon/cart-icon.component';


import './header.styles.scss';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';



const Header = ({currentUser, hidden})=> (
    <div className="header">
        <Link className="logo-container" to="/" >
            <Logo className="logo" />
        </Link>

        <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to='contact'> CONTACT</Link>
            <CartIcon />
            {
                currentUser ? 
            (<div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>)
                :
                (<Link className='option' to='/sign'>
                   SIGN IN
                </Link>)
            }
        </div>
        {
            hidden ? null
            :  <CartDropDown /> 
        }
        
    </div>
)

// this state argu is the root-reducer
//currentUser key is the currentUser arg in header component
// .currentUser coming from user.reducer.js

// we can also write it like this
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
 
//  }); or

const mapStateToProps = ({user: { currentUser}, cart: { hidden}}) => ({
   currentUser,
   hidden

});

export default connect(mapStateToProps)(Header);