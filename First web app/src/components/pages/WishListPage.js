import classes from './WishList.module.css';

import Navbar from '../UI-components/Navbar';
import PlaceCard from '../UI-components/PlaceCard'
import { Button } from '@mui/material';

function WishListPage (){
     
     return (
          <div className={classes.page}>
               <Navbar/>
               <PlaceCard/>
               <Button variant='contained'>Add</Button>
          </div>
)}

export default WishListPage;