import React from 'react';
import logo from './logo.svg';
import './App.css';
import TopMenu from './components/TopMenu';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import Product from './pages/Product';
import Cover from './components/Cover';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';

function App() {
  return ( 
    <Router>
      <div className = "App" >
        <TopMenu/>
        <Cover/>
        <Switch>
          <Route exact path='/'> 
          {/* Phai them exact, neu khong product se khong duoc render */}
            <h2>THIS IS HOME PAGE</h2>
          </Route>
          <Route path='/product' component = {Product}></Route>
          <Route path='/login' component={LoginForm}></Route>
          <Route path='/signup' component={SignUpForm}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;