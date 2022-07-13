import { useState } from 'react';
import classes from './WishList.module.css';

import Navbar from '../UI/Navbar';
import Burger from '../UI/Burger';
import SideNavigation from '../UI/SideNavigation';
import BackDrop from '../UI/BackDrop';

import { Drawer } from '@mui/material';


function WishListPage (){
     
     const[Navigation, setNavigation]=useState(false);

     function showNavigation(){
     setNavigation(true);
     }

     function closeNavigation(){
     setNavigation(false);
     }
     return (
          <div>
               <Burger open={showNavigation}/>
               {Navigation && <SideNavigation/>}
               {Navigation && <BackDrop close={closeNavigation}/>}

               <Navbar/>

               <h1>Hi</h1> 

               

          </div>
)}

export default WishListPage;