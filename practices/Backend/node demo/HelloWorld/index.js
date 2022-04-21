
const express = require("express")
const app = express();


// const cookieParser = require("cookie-parser")
// app.use(cookieParser())
app.use(express.json())

const heroes = [{
    id: 1,
    name: "john",
    power: "can fly"
},{
    id: 2,
    name: "captain america",
    power: "super strong"
}]

//index route
app.get("/", (req , res) => {
    res.send("Hello")
}) 

//get all heroes
app.get("/heroes/all", (req , res) => {
    console.log(req.query) //a way to trasfer data via the route
    res.send(heroes)
})

//get single hero by body id (from the client)
app.post("/heroes/single", (req , res) => {
    // console.log(req.body) -> checking the request from the postman client
    let hero = heroes.find(hero => hero.id == req.body.id)
    if(!hero){
        res.send({message : "hero isnt found"})
    }
    res.send(hero)
})

//get 1 hero with params method
app.get("/heroes/single/:id" , (req, res) => {
    console.log(req.params)
    const hero = heroes.find(hero => hero.id == req.params.id)
    if(!hero){
        res.send({message : "hero isnt found"})
    }
    res.send(hero)
})

//get single hero with query method
app.get("/heroes/single", (req,res) =>{
    const hero = heroes.find(hero => hero.id == req.query.id)
    if(!hero){
        res.send({message : "hero isnt found"})
    }
    res.send(hero)
})

const PORT = 5000
app.listen(PORT, () => {console.log(`we rock & roll on port ${PORT}`)})