import classes from './Navbar.module.css';


import BurgerDrawer from './BurgerDrawer';
import ShareIcon from '@mui/icons-material/IosShare';


function Navbar(){
     return(
         <nav className={classes.navbox}>
            <BurgerDrawer/>
            <h1 className={classes.title}>Title</h1>
            <ShareIcon className={classes.share}/>
         </nav>      
)}

export default Navbar;