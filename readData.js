const dbConnect = require('./connection')
async function readData(){
    let data =await dbConnect()
    let result =await data.find({name:'oppo'}).toArray()
    console.log(result)
}
readData()