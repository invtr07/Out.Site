import mongoose from 'mongoose'
import crypto from "crypto" //does some hashing 
import uuidv1 from 'uuidv1'

//creating a data model - what kind of data will be allowed to be accepted

const userSchema = mongoose.Schema({
     name: {
          type: String,
          required: true,
          maxlength: 32,
          trim: true
     },
     lastname: {
          type: String,
          trim: true,
          maxlength: 32,
     },
     email: {
          type: String, 
          trim: true,
          required: true,
          unique: true,
     },
     salt: String,
     
     encry_password: {
          type: String,
          required: true
     }
}, {timestamps: true})


//virtual property that is NOT stored in mongodb
userSchema.virtual("password")
     .set(function(password){
          this._password = password
          this.salt = uuidv1()
          this.encry_password= this.securePassword(password)
     })
     .get(function(){
          return this._password
     })

userSchema.methods = {
     authenticate: function(plainPassword){
          return this.securePassword(plainPassword) === this.encry_password
     },
     securePassword: function(plainPassword) {
          if(!plainPassword) return "";

          try {
               return crypto.createHmac("sha256", this.salt).update(plainPassword).digest("hex") //write this string by default
          } catch(err){
               return ""
          }
     }
}
const model =  mongoose.model("User", userSchema)
export default model;