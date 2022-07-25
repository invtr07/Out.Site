import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const PORT = process.env.PORT ||  5000
const URI = process.env.OUTSITE_DB_URI
const app = express();
app.use(cors())
app.use(express.json())

const start = async () => {
     try{
         await mongoose.connect(URI)
         app.listen(PORT, ()=> {
             console.log(`listening on port ${PORT}`)
         })
     } catch(e) {
         console.log(e)
     }
 }
 
await start()

app.get("/", (req, res)=>{
    res.send("Hello")
})
