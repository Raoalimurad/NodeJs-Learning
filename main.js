// const express = require('express')
// const app = express()


////make routes using express js

// app.get('/',(req,res)=>{
//     res.send("this is home page")
//     console.log(req.query.name)
// })
// app.listen(`3000`)
// app.get('/about',(req,res)=>{
//     res.send("this is beautiful about page")
// })


////render html and json data



// app.get('/',(req,res)=>{
//         res.send({
//             name:"raoali",
//             email:'raoalimurad@gmail.com'
//         })
   
//     })
//     app.listen('3000')

//     app.get('/about', (req, res) => {
//         const pageContent = `
//             <h1>This is the About Page</h1>
//             <input type="text" placeholder="Username" />
//         `;
//         res.send(pageContent);
//     });
    
// 29/3/2024
/////making static pages 

const express = require('express')
const path = require("path")
const app = express()
const filePath = path.join(__dirname,"files")
console.log(filePath)

app.use(express.static(filePath))
app.listen('3000')
