import { Link } from 'react-router-dom';

import classes from './SideNavigation.module.css';

function SideNavigation(){
     return(
          <div className={classes.sideNav}>
               <Link to="/favorites">Favorites</Link>
               <Link to="/wishlist">Wishlist</Link>
          </div>  
     )
}

export default SideNavigation;