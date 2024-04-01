const dbConnect = require('./connection')
const updateData = async () => {
      let data =await dbConnect();
      let result =await data.updateOne(
        {name:"oppo"},{$set:{price:300}}
      )
      console.log(result)
      
}
updateData()