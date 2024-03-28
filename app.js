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
// const fs =require('fs')         /////fs means file system

// fs.writeFileSync(process.argv[2],process.argv[3])

// appply condition on it
// if(process.argv[2] == 'add'){
//     fs.writeFileSync(process.argv[3],process.argv[4])
// }else if(process.argv[2] == 'remove'){
//     fs.unlinkSync(process.argv[3])
// }else{
//     console.log('invalid input')
// }


//  FILE LIST 

// making file
// const fs =require('fs')  
// const path = require('path')                            ////for taking path
// const filePath = path.join(__dirname,'files')         ////////to give me directory path
// for(var i = 0;i<5;i++){
    
//     fs.writeFileSync(`${filePath}/hello${i}.txt`, 'a simple text file');

// }
// // read file names
// fs.readdir(filePath,(err,file)=>{
//    console.log(file)
   
// })


// CRUD WITH FILE SYSTEM


// const fs =require('fs') 
// const path = require('path')  

// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/myworld.txt`;

// // create file
// fs.writeFileSync(filePath,'this is my good file')        ////it will create file in given path folder


// /////read file 

// fs.readFile(filePath,'utf8',(err,item)=>{                 ////////it will read file 
//   console.log(item)
// })






///append method 
// fs.appendFile(filePath,"this is awosome file",(err)=>{
//   if(!err) console.log("file updated")
// })


///rename method
// fs.rename(filePath,`${dirPath}/hello.txt`,(err)=>{
//   if(!err) console.log('name change')
// })

/////Delete file method 

// fs.unlinkSync(filePath)



// DATE 28/3/2024

//  ASYNCHRONOUS DATA

let a = 10 ;
let b = 12 ;
setTimeout(()=>{   ////it take time that's why value will not update
  b = 40            //////e drawbacks of asynchronus 
},2000)

console.log(a+b) ////output is 22 beacuse it call first 


///HANDLE ASYNCHRONOUS DATA

let handleData = new Promise((resolve, reject) => {
 
  setTimeout(()=>{
    b = 40
    resolve(b)
  },2000)
   
})
handleData.then((data)=>{
  b = data
  console.log(a+b)
})

