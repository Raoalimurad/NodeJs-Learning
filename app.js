// HOW To create server in node jsgit init

const http = require('http')
http.createServer((req,res)=>{
   
 res.write("hello")
 res.end()
}).listen(4500)



// var colors = require("colors")
// console.log("helloe".red)


