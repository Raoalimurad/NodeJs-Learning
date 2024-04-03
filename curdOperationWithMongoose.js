const moongoose = require('mongoose')
const url = "mongodb://localhost:27017"
const dbName = "ecomerce";

moongoose.connect(`${url}/${dbName}`);
  let productSchema = new moongoose.Schema({
        name: String,
        brand: String
    })
   
  
const saveInDb = async () => {
   
    let productModel = moongoose.model("products", productSchema)
    let data = productModel({
        name: "vivo14",
        brand: "samsung"
    })
    let result = await data.save()
    console.log(result)
}

const updateData = async()=>{
    let productModel = moongoose.model("products", productSchema)
    let data =await productModel.updateOne(
        {name:"vivo14"},{$set:{brand:"ufone"}}
        )
        console.log(data)
}


const deleteDb = async ()=>{
    let productModel = moongoose.model("products", productSchema)
    let data = await productModel.deleteOne({
        name:"vivo14"
    })
    console.log(data)
}

const findDb =async ()=>{
    let productModel = moongoose.model("products", productSchema)
    let data = await productModel.find();
    console.log(data)


}
findDb()