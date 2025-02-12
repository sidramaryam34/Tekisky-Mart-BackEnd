import express from 'express'
const app=express()
import bodyParser from 'body-parser'
import dbConnect from './dbConnect/connectionDB.js'
import preRoute from './routes/preOrder.js'
import userRoute from './routes/userRoute.js'

import dotenv from 'dotenv'
dotenv.config()
const port=process.env.PORT 

dbConnect(process.env.DBURL,process.env.DBNAME)
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())
app.use(express.json())

app.use('/preorder',preRoute)
app.use('/user',userRoute)


app.listen(port,()=>{
    console.log(`server working on port number ${port}`);
})
