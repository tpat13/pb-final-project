import React, { useState } from 'react';
// import {Helmet} from "react-helmet";
import './App.css';
import fire from './fire.js';

import Menu from './Menu/Menu';
import Hero from './Hero/Hero';
import HomePage from './Dashboard/Dashboard';
import Footer from './Footer/Footer';
import Login from './Components/sessions/Login';
import Logout from './Components/sessions/Logout';

import ListBudgetData from './Components/sessions/ListBudgetData';
import EnterBudgetData from './Components/budget/EnterBudgetData';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App()  {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    fire.auth().onAuthStateChanged((user) => {
      return user ? setIsLoggedIn(true) : setIsLoggedIn(false);
  });
  
  /* const signOut = () => {
    fire.auth().signOut()
  }; */

  console.log('logged in?', isLoggedIn);
  return (
    
      <div className ="mainContainer" role="main">
      <title>Personal Budget App | Homepage</title>
      <Router>
        
       {/* This is what is changing between pages  */}
       <Menu/>
        <Hero/>
       {!isLoggedIn
          ? (
            <>
            {/* Login page is shown first  */}
            <Switch>
              <Route path="/">
                <Login />
              </Route>
              <Footer/>
            </Switch>
            </>
          ) 
          : (
            
            // On successful login, show routes and logout option
            <>
            {/* <span onClick={signOut}>
              <a href="#">Sign out</a>
            </span> */}
              <Logout/>

             <Switch>
             <Route path="/dashboard">
              <HomePage  />
              </Route> 
              <Route path="/enter-budget">
                <EnterBudgetData />
              </Route>

              <Route path="/">
              <ListBudgetData  />
              </Route>

            </Switch> 
            </>
          
          )}
         
      </Router>
    </div>
    
  );
}

export default App;