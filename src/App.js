import React from 'react';
import { HomePage } from './components/pages/homePage/homePage.component';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import ShopePage from './components/pages/shopPage/shopPage.component';

import Header from './components/header/header.component';


import './App.css';





function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
