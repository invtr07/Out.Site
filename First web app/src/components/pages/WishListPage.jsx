import classes from './WishList.module.css';

import Navbar from '../UI-components/Navbar';
import PlaceCard from '../UI-components/PlaceCard'
import AddForm from '../UI-components/AddForm';
import BackDrop from '../UI-components/BackDrop';

import { Button } from '@mui/material';
import { useState } from 'react';


function WishListPage (){
     
     const [form, setForm]=useState(false);


     return (
          <div className={classes.page}>
               <Navbar/>
               <PlaceCard/>
               <Button onClick={()=> setForm(true)} style={{
                    width:"90%", 
                    backgroundColor: "#27AE60"
                    }} variant='contained'>Add</Button>

               {form && <AddForm/>}
               {form && <BackDrop onClose={()=>setForm(false)}/>}
          </div>
)}

export default WishListPage;