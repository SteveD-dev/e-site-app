import React from 'react';
import { Link } from 'react-router-dom';
import { connect} from 'react-redux';
import { createStructuredSelector} from 'reselect';


import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo} from '../../assets/wings.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selectors';

import './header.styles.scss';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ({currentUser, hidden})=> (
    <HeaderContainer>
        <LogoContainer to="/" >
            <Logo className="logo" />
        </LogoContainer>

        <OptionsContainer>
            <OptionLink to='/shop'> SHOP</OptionLink>
            <OptionLink to='contact'> CONTACT</OptionLink>
            <CartIcon />
            {
                currentUser ? 
            (<OptionLink as='div' onClick={() => auth.signOut()}> SIGN OUT</OptionLink>)
                :
                (<OptionLink to='/sign'>
                   SIGN IN
                </OptionLink>)
            }
        </OptionsContainer>
        {
            hidden ? null
            :  <CartDropDown /> 
        }
        
    </HeaderContainer>
)

// this state argu is the root-reducer
//currentUser key is the currentUser arg in header component
// .currentUser coming from user.reducer.js

// we can also write it like this
// const mapStateToProps = state => ({
//     currentUser: state.user.currentUser,
//     hidden: state.cart.hidden
//  }); or
// const mapStateToProps = ({user: { currentUser}, cart: { hidden}}) => ({
//    currentUser,
//    hidden
// });

//         or we can use selector and creatStru... here
const mapStateToProps = createStructuredSelector({
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    });

export default connect(mapStateToProps)(Header);