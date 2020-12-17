import React from 'react';
import './App.css';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className ="mainContainer">
       {/* This is what is changing between pages  */}
        <Switch>
            <Route path="/login">
              <LoginPage  />
            </Route>
            <Route path="/">
              <HomePage  />
            </Route>
          </Switch>

      </div>
      <Footer/>

    </Router>
  );
}

export default App;