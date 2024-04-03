const express = require('express')
require('./config')
const product = require('./productScehma')
const app = express()

app.use(express.json()); ////MIDDLEWARE


///POST API
app.post('/', async (req,res)=>{
    console.log(req.body)
    let data =new product(req.body)
    let result = await data.save()
    res.send(result)
})

//GET API
app.get('/',async(req,res)=>{
    let data = await product.find()
 res.send(data)
})


////DELETE API
app.delete('/delete/:_id',async(req,res)=>{
    let data = await product.deleteOne(req.params)
    res.send(data)
})

 

///////update API

app.put('/update/:name',async(req,res)=>{
    console.log(req.params)
    console.log(req.body)
    let data = await product.updateOne(
        req.params,{$set:req.body}
        )
    res.send(data)
})

///searach API
app.get('/search/:key',async (req,res)=>{
    let data = await product.find(
        {
            '$or':[{"name":{$regex:req.params.key}}]
        }
    )
   res.send(data)
})





app.listen(3000)
