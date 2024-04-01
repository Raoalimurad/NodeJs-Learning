const express = require('express')
const dbConnect = require('./connection')
const app = express()
app.get('/', async (req, res) => {
    let data = await dbConnect()
    let result =await data.find().toArray()
   
    res.send(result)
})
app.listen(3000)