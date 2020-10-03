import React from 'react';
import {  Switch, Route, Redirect } from 'react-router-dom';
import { connect} from 'react-redux';

import { auth, createUserProfileDoc } from './firebase/firebase.utils';

import { setCurrentUser} from './redux/user/user.action';
import HomePage from './pages/homePage/homePage.component';
import ShopePage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPAge from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';

import './App.css';






class App extends React.Component {
 
// when user is not connected
  userConnexion = null;
// when user is connected
  componentDidMount(){
    const { setCurrentUser} = this.props;

    this.userConnexion = auth.onAuthStateChanged(async userAuth => {
     if(userAuth){ 
       const userRef = await createUserProfileDoc(userAuth);

       userRef.onSnapshot(snap => {
         setCurrentUser({
             id: snap.id,
             ...snap.data()    
         });

         console.log(this.state);
       } );
    }
    setCurrentUser(userAuth);
   
  });
  }
// when user is not connected after sign out
  componentWillUnount() {
    this.userConnexion();
  }



  render(){
    return (
      <div>

          <Header />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopePage} />
              <Route exact path='/sign' render={ () => this.props.currentUser ? (<Redirect to='/' />)
              :
              (<SignInAndSignUpPAge />)
              
            } />
          </Switch>

      </div>
    );
    }
}

// user arg is userReducer
const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})
  
const mapDispatchProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

// first arg : null (we do not need state)
//second arg is mapDispatchProps
export default connect(mapStateToProps, mapDispatchProps )(App);
