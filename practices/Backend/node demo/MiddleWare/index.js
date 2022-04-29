// const express = require("express")
// const app = express()
// const fs = require("fs")
// const logDocumentation = require("./middlewares/logger")
// const greetMiddleware = require("./middlewares/greetMiddleware")
// const getRequestDate = require("./middlewares/dateMiddleware")

// app.use(greetMiddleware)

// app.get("/", (req,res) =>{
//     res.send("im from route - /")
// })

// app.get("/requestDate" , getRequestDate, (req,res)=>{

//     //console.log(req.currentDate)
//     //^we can use the parameter we created in the middleware with the "req." method
//     res.send("the time in the server is: " + req.currentDate)
// })

// const PORT = 5000
// app.listen(PORT,() => console.log(`server is up on port ${PORT}`))

// -----------------------------------------------------------------------------------
const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
app.use(cookieParser())
app.use(express.json())

app.get("/", (req, res) =>{
    // res.send("cookie!!!")
    console.log(req.cookies)
    console.log(req.cookies["favoriteLanguage"])
    if(req.cookies["favoriteLanguage"] == "javascript"){
        res.send("i know your favorite language is JS")
    }else {
        return res.send("i know your favorite language is not JS")
    }
})

app.get("/showCookies", (req, res) =>{
    res.send(req.cookies)
})

app.get("/deleteAllCookies", (req, res) =>{
    res.clearCookie("favoriteFood")
    //in order to clear cookie, we need to insert the cookie name
    res.send("cookie deleted successfully")
})

app.get("/getUserNameByCookie", (req,res) =>{
    res.send(req.cookies["userName"])
})

app.get("/expiredCookie", (req , res) => {
    res.cookie("key" , "value" ,{
        maxAge: 10000
    }) .send("the cookie has been set")
})

app.post("/setName", (req,res) =>{
    res.cookie("userName", req.query.userName)
    res.send("welcome: " + req.query.userName)
})

app.post("/favoriteFood", (req, res) =>{
    res.cookie("favoriteFood" , req.query.favoriteFood)
    res.send("favorite food defined successfully")
})

app.post("/favoriteLanguage", (req,res) =>{
    console.log(req.body)
    res.cookie("favoriteLanguage", req.body.favoriteLanguage)
    res.send("TEST")
})

const PORT = 5000
app.listen(PORT,() => console.log(`server is up on port ${PORT}`))