const dbConnect = require('./connection')


////insert one data
const insertData = async()=>{
    let result = await dbConnect();
    let response =await result.insertOne({
        name:"vivo",
        brand:"south_east",
        price:300
    })
    if( response.acknowledged){
        console.log("data inserted successfully")
    }
}
insertData()


// for many you use only 
// "insertMany" and past in "arrayofobject"

