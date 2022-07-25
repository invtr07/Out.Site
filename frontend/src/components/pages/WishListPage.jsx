import classes from './WishList.module.css';
import React from 'react';

import Navbar from '../UI-components/Navbar';
import PlaceCard from '../UI-components/PlaceCard'
import AddForm from '../UI-components/AddForm';
import Backdrop from '@mui/material/Backdrop';

import { Button } from '@mui/material';


function WishListPage (){
     
     const [open, setOpen] = React.useState(false);

     return (
          <div className={classes.page}>
               <Navbar/>
               <PlaceCard/>
               <Button onClick={()=> setOpen(true)} style={{
                    width:"90%", 
                    backgroundColor: "#27AE60"
                    }} variant='contained'>Add</Button>
               <Backdrop
               sx={{ color: '#fff', zIndex: "0"}}
               open={open}
               onClick={()=>setOpen(false)}
               >
               </Backdrop>
               {open && <AddForm/>}
          </div>
)}

export default WishListPage;