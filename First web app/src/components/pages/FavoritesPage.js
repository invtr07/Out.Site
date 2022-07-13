import { useState } from 'react';
import classes from './Favorite.module.css';

import Navbar from '../UI/Navbar';
import Burger from '../UI/Burger';
import SideNavigation from '../UI/SideNavigation';
import BackDrop from '../UI/BackDrop';

function FavoritesPage(){

     const[Navigation, setNavigation]=useState(false);

     function showNavigation(){
     setNavigation(true);
     }

     function closeNavigation(){
     setNavigation(false);
     }

     return(
          <div className={classes.page}>
               <Burger open={showNavigation}/>
               {Navigation && <SideNavigation/>}
               {Navigation && <BackDrop close={closeNavigation}/>}

               <Navbar/>
               <h1>Hi</h1>  
          </div>         
)}

export default FavoritesPage;