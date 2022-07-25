import React from 'react';
import { Routes, Route } from 'react-router-dom';

import classes from './App.module.css';

import Signup from '../components/authorization/Signup';
import Login from '../components/authorization/Login';
import VisitedPlaces from '../components/pages/Visitedplaces'
import WishListPage from '../components/pages/WishListPage'


function App() { 
  return (
    <div className={classes.app}>
          <Routes>
            <Route path='/' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />   

            {/* {privateLists.map(()=>)} */}
            <Route path="/visitedplaces" element={<VisitedPlaces/>}/>
            <Route path="/wishlist" element={<WishListPage/>}/>     

          </Routes>          
    </div>
  );
}

export default App;
