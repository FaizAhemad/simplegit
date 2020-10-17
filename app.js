const express = require ('express')
const dotenv = require('dotenv').config()
const app = express()

app.get('/',(req,res)=>{

    res.send('Hi, This is Edited by fs account')
})

app.get('/another',(req,res)=>{

    res.send('New route')
})

app.listen(process.env.port,()=>{


    console.log('listening On Port 4000')
})
