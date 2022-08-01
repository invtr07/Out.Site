import { Link } from "react-router-dom";
import './Login.css'

import Button from '@mui/material/Button';
import { TextField } from "@mui/material";
import {useNavigate} from 'react-router-dom';

function Login(){
     let navigate= useNavigate();
     return (
     <div className="log-box">
          <h1>Sign In</h1>
          <div className="inputs">            
                    <TextField required id="outlined-basic" label="Email" variant="outlined" />
                    
                    <TextField required type="password" id="outlined-basic" label="Password" variant="outlined" />
                    
                    <Button onClick={()=>{navigate('/wishlist')}}variant="outlined">Login</Button>

                    <p>Don't have account? <Link to="/">Sign up</Link></p>
          </div>               
     </div>
)}

export default Login;