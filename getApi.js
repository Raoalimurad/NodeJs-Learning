// const express = require('express')
// const dbConnect = require('./connection')
// const mongodb = require('mongodb')
// const app = express()

// app.use(express.json()) /////middleware
// app.get('/', async (req, res) => {
//     let data = await dbConnect()
//     let result =await data.find().toArray()
   
//     res.send(result)
// })


// /////post method

// app.post('/', async (req,res)=>{
//     console.log(req.body)
//     let data = await dbConnect();
//     let result = await data.insertOne(req.body)
//     res.send(result)
    
// })
// app.listen(3000)

//  /////update method

//  app.put('/:name',async (req,res)=>{
//     let data = await dbConnect();
//     let result = data.updateOne(
//         {name:req.params.name}
//         ,{$set:req.body}
//     )
//    res.send("updated")
//  })
//  /// delete method

//  app.delete('/:id',async (req,res)=>{
//     let data = await dbConnect();
//     let result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
//     res.send("done")
//  })
