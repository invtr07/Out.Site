import User from '../models/user.js'

function signup (req, res){
     const user = new User(req.body)
     user.save((err, user)=>{
          if(err){
               res.status(400).json({
                    error: "Unable to add user"
               })
          }

          res.json({
               message: "success",
               user
          })
     })
}

export default signup