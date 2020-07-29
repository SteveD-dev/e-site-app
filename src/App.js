import React from 'react';
import HomePage from './pages/homePage/homePage.component';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';
import ShopePage from './pages/shopPage/shopPage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPAge from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';

import './App.css';






class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
// when user is not connected
  userConnexion = null;
// when user is connected
  componentDidMount(){
    this.userConnexion = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user});
      console.log(user);
    })
  }
// when user is not connected after sign out
  componentWillUnount(){
    this.userConnexion();
  }



  render(){
    return (
      <div>
        <BrowserRouter>
          <Header currentUser={this.state.currentUser} />
          <Switch>
              <Route exact path='/' component={HomePage} />
              <Route path='/shop' component={ShopePage} />
              <Route path='/sign' component={SignInAndSignUpPAge} />
          </Switch>
        </BrowserRouter>
      </div>
    );
    }
  }
  


export default App;
