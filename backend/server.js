import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT ||  8000
const URI = process.env.OUTSITE_DB_URI
const app = express();

//using middleware
app.use(express.json());
app.use(cors());

//import the routes
import userRoutes from './routes/user.js'

//using routes
app.use("/api", userRoutes)

//db connection establishing
mongoose.connect(URI)
    .then(()=>{
        console.log("DB is connected")
    })
    .catch(()=>{
        console.log("Unable to connect to DB")
    })

//running server
app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
})










