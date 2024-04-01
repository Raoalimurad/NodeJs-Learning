const dbConnect = require('./connection')
async function readData(){
    let result =await dbConnect()
    let response =await result.find({name:'oppo'}).toArray()
    console.log(response)
}
readData()