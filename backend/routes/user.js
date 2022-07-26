//signup route
import express from 'express'
import signup from '../controllers/user.js'
const router = express.Router()

const newRouter= router.post("/signup", signup)

export default newRouter


