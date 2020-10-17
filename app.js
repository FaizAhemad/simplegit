const express = require ('express')
const dotenv = require('dotenv').config()
const app = express()

app.get('/',(req,res)=>{

    res.send('Hi')
})

app.listen(process.env.port,()=>{


    console.log('listening 4000')
})