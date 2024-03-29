const express = require('express')
const app = express()
app.get('/',(req,res)=>{
    res.send("this is home page")
})
app.listen(`3000`)
app.get('/about',(req,res)=>{
    res.send("this is beautiful about page")
})


