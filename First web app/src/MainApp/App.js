import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import classes from './App.module.css';

import Signup from '../components/authorization/Signup';
import Login from '../components/authorization/Login';
import FavoritesPage from '../components/pages/FavoritesPage'
import WishListPage from '../components/pages/WishListPage'

function App() {

  
  return (
    <div className={classes.app}>

          <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />   

            <Route path='/favorites' element={<FavoritesPage/>}/>
            <Route path='/wishlist' element={<WishListPage/>}/>     

          </Routes>  
               
    </div>
  );
}

export default App;
