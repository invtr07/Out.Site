import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Signup from '../components/authorization/Signup'
import Login from '../components/authorization/Login';
import FavoritePage from '../components/pages/Favorite';


function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
