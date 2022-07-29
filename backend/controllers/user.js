import User from '../models/user.js'

function signup (req, res){
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

export default signup


