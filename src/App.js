import React from 'react';
import { HomePage } from './components/pages/homePage/homePage.component';
import {  BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';


const CapPage = () => (
  <div>
    <h1>caps page </h1>
  </div>
);


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/caps' component={CapPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
