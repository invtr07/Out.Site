import { TextField } from "@mui/material";
import Box  from "@mui/material/Box";
import Button from "@mui/material/Button";
import Icon from "@mui/material/Icon";
import CloseIcon from '@mui/icons-material/Close';

import classes from './addForm.module.css'

const cardStyle = {
     zIndex: 3,
     width: "100%",
     height: "50%",
     backgroundColor: "white",
     position: "absolute",
     width: 306,
     height: 308,
     left: 42,
     top: 268,
     borderRadius: "25px"
}


export default function AddForm(){
     return (
               <Box sx={cardStyle}>
                    <div className={classes.inputs}>   
                         <Icon><CloseIcon/></Icon>  
                         <TextField id="outlined-basic" label="Name of the place" variant="outlined" required />
                         <TextField id="outlined-basic" label="Address" variant="outlined" 
                         required />
                         <Button style={{backgroundColor: "#27AE60"}} variant="contained">Save</Button>
                    </div>
               </Box>    
)}