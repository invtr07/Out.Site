import { Link } from "react-router-dom";
import './Login.css'

import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function Login(){
     return (
     <div className="log-box">
          <h1>Sign In</h1>
          <div className="inputs">
               <TextField id="outlined-basic" label="Email" variant="outlined" />
               
               <TextField type="password" id="outlined-basic" label="Password" variant="outlined" />
               
               <Button onClick={()=>{}}variant="outlined">Create account</Button>

               <p>Don't have account? <Link to="/">Sign up</Link></p>
          </div>               
     </div>
)}

export default Login;