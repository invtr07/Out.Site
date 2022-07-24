import express from 'express'
import cors from 'cors'
import outsite from './api/v1/outsite.route.js'

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/v1/outsite", outsite)
app.use("*", (req, res)=>res.status(404).json({error: "not found"}))

export default app