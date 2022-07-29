import User from '../models/user.js';
import jwt from 'jsonwebtoken';
import expressJwt from "express-jwt";


export function signup (req, res){
     const user = new User(req.body)

      user.save(function(err, user){
          if(err){
               return res.status(400).json({
                    error: "Unable to add user"
               })
          }
          
          return res.json({
               message: "success",
               user
          })
     })
}

//login route function 
export function signin(req, res){
     const {email, password} = req.body;
     //below user = email
     User.findOne({email},(err, user)=>{
          if(err || !user){
               return res.status(400).json({
                    error: "Email or password did not match"
               })
          }

          //authenticating user 
          if(!user.authenticate(password)){
               return res.status(400).json({
                    error: "Email or password did not match"
               })
          }

          //Creating a token
          const token = jwt.sign({_id: user._id}, process.env.SECRET)

          //Put token in cookie
          res.cookie('token', token, {expire: new Date() + 1})

          //Destructuring user and Sending a response to front-end
          const {_id, name, email} = user
          return res.json({
               token, 
               user: {
                    _id, 
                    name,
                    email
               }
          })


     })
}


