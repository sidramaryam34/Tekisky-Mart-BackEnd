import express from 'express'
const userRoute = express.Router()

import { register,userLogin,getProfile } from '../controller/userController.js'

userRoute.post('/register',register)
userRoute.post('/login',userLogin)
userRoute.get('/profile/:email',getProfile)

export default userRoute