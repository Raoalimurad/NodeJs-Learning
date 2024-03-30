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
const filePath = path.join(__dirname, "files")

// console.log(filePath) ////to check file path 

/////make sataic pages here

// app.use(express.static(filePath))
// app.listen('3000')




///remove extensions from url means .html etc not show

// app.get('',(req,res)=>{
//    res.sendFile(`${filePath}/index.html`)
// })

// app.get('/about', (req, res) => {
//     res.sendFile(`${filePath}/about.html`)
// })
// app.listen('3000')


// app.get('/help', (req, res) => {
//     res.sendFile(`${filePath}/help.html`)
// })




// //////how to show 404 page 

// app.get('*', (req, res) => {
//     res.sendFile(`${filePath}/noPageFound.html`)
// })


// TEMPLATE ENGINE:
// app.set('view engine','ejs')



// app.get('/profile', (req, res) => {
//     const user ={
//         name:"alimurad",
//         email:"raoalimurad52@gmail.com",
//         city:"karachi",
//         skills:['c','java','php','javascript']
//     }
//     res.render('profile',{user})
// })
// app.listen('3000')

// app.get('/login',(req,res)=>{
// res.render('login')
// })



// MIDDLEWARE

const reqFilter = (req,resp,next)=>{
    if(!req.query.age){
        resp.send('enter your age')
    }else{

        next();
    }

}

app.use(reqFilter)
app.get('',(req,res)=>{
res.send('this is home page')
})
app.get('/about',(req,res)=>{
    res.send('this is about page')
    })
app.get('/contact',(req,res)=>{
    res.send('this is contact page')
    })
app.listen('3000')















