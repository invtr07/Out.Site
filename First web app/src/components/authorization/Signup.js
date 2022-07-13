import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Signup.css'

// material ui components
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";


function Signup (){
     let navigate = useNavigate();

     return (
     <div className="reg-box">
          <h1>Sign up</h1>
 
               <div className="inputs"> 
                    <TextField id="outlined-basic" label="FirstName" variant="outlined" required/>
               
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
              
                    <TextField type="email" id="outlined-basic" label="Email" variant="outlined" required/>
               
                    <TextField type="password" id="outlined-basic" label="Password" variant="outlined" required />
               
                    <Button onClick={()=>{navigate("/favorites")}} variant="outlined">Create account</Button>
                    
                    <div>Already have account? <Link to="/login"> Sign in</Link></div> 
               </div>          
     </div>
)}

export default Signup;