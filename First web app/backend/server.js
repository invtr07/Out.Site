import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json()); //our server can accept json in the body of our express

app.use("/",)
app.use("*", (req,res) => res.status(404).json({error: "not found!"}))

export default app; 
 
