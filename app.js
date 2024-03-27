// HOW To create server in node jsgit init

// const http = require('http')
// http.createServer((req,res)=>{
   
//  res.write("hello")
//  res.end()
// }).listen(4500)



// var colors = require("colors")
// console.log("helloe".red)


// DATE 27/03/2024
// GETTING INPUTS FORM COMMAND LINE
const fs =require('fs')         /////fs means file system

// fs.writeFileSync(process.argv[2],process.argv[3])

// appply condition on it
if(process.argv[2] == 'add'){
    fs.writeFileSync(process.argv[3],process.argv[4])
}else if(process.argv[2] == 'remove'){
    fs.unlinkSync(process.argv[3])
}else{
    console.log('invalid input')
}

