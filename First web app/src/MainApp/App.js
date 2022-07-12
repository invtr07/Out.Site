import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

import classes from './App.module.css';

import Signup from '../components/authorization/Signup';
import Login from '../components/authorization/Login';
import Burger from '../components/UI/Burger';
import SideNavigation from '../components/UI/SideNavigation';
import BackDrop from '../components/UI/BackDrop';
import FavoritesPage from '../components/pages/FavoritesPage'
import WishListPage from '../components/pages/WishListPage'

function App() {

  const[Navigation, setNavigation]=useState(false);

  function showNavigation(){
    setNavigation(true);
  }

  return (
    <div className={classes.app}>
      <Burger open={showNavigation}/>
      {Navigation && <SideNavigation/>}
      {Navigation && <BackDrop/>}

      <div className={classes.authorization}>
        <Routes>
          <Route path='/' element={<Signup/>} />
          <Route path='/login' element={<Login/>} />   

          <Route path='/favorites' element={FavoritesPage}/>
          <Route path='/wishlist' element={WishListPage}/>     

        </Routes>
      </div>
       
    </div>
  );
}

export default App;
