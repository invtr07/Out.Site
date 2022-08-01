import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import {useForm} from "react-hook-form";
import axios from 'axios'
import './Signup.css'

// material ui components
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

function Signup (){
     // let navigate = useNavigate();
     // const [data, setData] = useState(false)
     const {register, handleSubmit} = useForm()

     // useEffect(()=>{
     //      postRequestHandler()
     // }, [])

     // function postRequestHandler(){
     //      const info = JSON.stringify(signupData)
     //      axios.post("http://localhost/8000/signup", info)
     // }


     return (
     <div className="reg-box">
          <h1>Sign up</h1>
               <form onSubmit={console.log("works")} className="inputs"> 
                    <TextField {...register("name", {required: true})} name="" id="outlined-basic" label="FirstName" variant="outlined" />
               
                    <TextField {...register("lastname", {required: true})} id="outlined-basic" label="Last Name" variant="outlined" />
              
                    <TextField {...register("email", {required: true})} type="email" id="outlined-basic" label="Email" variant="outlined" />
               
                    <TextField {...register("password", {required: true})} type="password" id="outlined-basic" label="Password" variant="outlined"  />
               
                    <Button variant="outlined">Create account</Button>
                    {/* <button>Submit</button> */}
                    
                    <div>Already have account? <Link to="/login"> Sign in</Link></div> 
               </form>          
     </div>
)}

export default Signup;

// ()=>{navigate("/wishlist")}