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
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return ( 
    <Router>
      <div className = "App" >
        <TopMenu/>
        <Cover/>
        <Switch>
          <Route exact path='/' component={Product}> 
          {/* Phai them exact, neu khong product se khong duoc render */}
            
          </Route>
          {/* <Route path='/product' component = {Product}></Route> */}
          <Route path='/login' component={Login}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;