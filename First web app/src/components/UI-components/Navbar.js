import classes from './Navbar.module.css';


import BurgerDrawer from '../UI-components/BurgerDrawer';
import ShareIcon from '@mui/icons-material/IosShare';


function Navbar(){
     return(
         <nav className={classes.navbox}>
            <BurgerDrawer/>
            <h1>Title</h1>
            <ShareIcon className={classes.share}/>
         </nav>      
)}

export default Navbar;