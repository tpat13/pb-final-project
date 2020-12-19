import React from 'react';
import { useFirebaseApp } from 'reactfire';
import fire from './../../fire.js';

const Logout = () => {
  
    // Log out function

  const signOut = () => {
    fire.auth().signOut()
  };



  return (
    <>
      <button type="button" onClick={signOut} href="#">Log Out</button>
    </>
  )
};

export default Logout;