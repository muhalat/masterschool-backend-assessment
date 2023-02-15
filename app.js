const express = require('express')
const dotenv = require('dotenv').config()
const app = express()


app.use(express.json())

app.get('/', (req,res)=>{
    res.status(200).json({message:"Welcome to the Unsplash API!"})
})
const port = process.env.PORT || 4000
app.listen(port, (req,res)=>{
   
    console.log(`I am on Port ${port}`)
})