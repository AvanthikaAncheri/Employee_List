const express=require('express');
const cors = require('cors')
const router = require('./Router/Router');
const connection = require('./Config/mongo');
const dotenv = require('dotenv');

connection()

const app=express()
app.use(express.json())
app.use(cors())
app.use('/',router)


dotenv.config()
const Port=process.env.port || 4000
app.listen(Port,console.log(`Server is running in ${Port}`))