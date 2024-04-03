const express = require("express");
const EventEmitter = require("events")
const app = express()
const event = new EventEmitter()
let count = 0
event.on("api count",()=>{
    count++
    console.log("hello",count)
})

app.get('/',(req,res)=>{
    res.send("hello api")
    event.emit("api count", )
   
})
app.get('/search',(req,res)=>{
    res.send( " search hello api")
    event.emit("api count", )
})
app.get('/delete',(req,res)=>{
    res.send(" deletehello api")
    event.emit("api count", )
})
app.listen(3000)