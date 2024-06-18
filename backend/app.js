
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const path = require('path')
dotenv.config()
const port = process.env.PORT || 5000
// init application
const app = express()
// import user routers 
const users_routers = require('./Routes/userRoutes')


// check env if prod or dev

if(process.env.NODE_ENV === 'Prod'){
    const __dirname = path.resolve()
    app.use(express.static(path.join(__dirname,'frontend/dist')))
    app.get('*',(req,res)=> res.sendFile(path.resolve(__dirname,'frontend','dist','index.html')))
}

// DB connect
mongoose.connect(process.env.MONGO_URI)
.then((results)=>{
    app.listen(port, ()=>console.log('Server started'))
})
.catch((err)=>{
//console.log(err)
console.log('error')
})

// middlewares
app.use(express.json())  // usefull for mobile application 
app.use(express.urlencoded({extended: true})) // usefull for form submtion data

// routes
app.use('/api/users',users_routers)

// 404 middleware
app.use('*', (req,res,next)=>{
    res.status(404).json("no endpoint")
})