import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT ||  3001
const URI = process.env.OUTSITE_DB_URI
const app = express();

//calling middleware
app.use(cors());
app.use(express.json());

//import the routes
import userRoutes from './routes/user.js'

//using routes
app.use("/api", userRoutes)


//db connection establishing
const start = async () => {
     try{
         await mongoose.connect(URI)
         //starting server
         app.listen(PORT, ()=> {
             console.log(`listening on port ${PORT}`)
         })
     } catch(e) {
         console.log(e)
     }
 }
 
await start()




