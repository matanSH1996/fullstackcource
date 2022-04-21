const express = require("express")
const fs = require("fs")
const app = express()
app.use(express.json())

app.get("/", (req,res) => {
        res.send("welcome to heroes API")
    })

app.get("/all", (req,res) => {
    fs.readFile("heroes.json", "utf8" , (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }
        console.log(data) //print to the terminal
        res.send(data) //response in the client
    })
})

app.get("/single/:id",(req, res) =>{
    fs.readFile("heroes.json", "utf8" , async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }
        const heroes = await JSON.parse(data)
        let hero = heroes.find(hero => hero.id == req.params.id)

        if(req.query.name){
           hero = heroes.find(hero => hero.name == req.query.name)
        }

        res.send(hero)
    })
})


//read the files and have all the heroes
//create new hero based on id
//push heroe to heroes API
//write files with the new hero

app.post("/create", (req,res) => {
    fs.readFile("heroes.json", "utf8", async (err, data)=> {
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }

        const heroes = await JSON.parse(data)
        const newId = heroes[heroes.length - 1].id + 1
        const newHero = {
            id : newId,
            name : req.body.name,
            power : req.body.power
        }
        // console.log(newHero)
        heroes.push(newHero)
        fs.writeFile("heroes.json", JSON.stringify(heroes), (err) =>{
            if (err){
                res.send({error:true, message: "somthing went wrong"})
            }
        })
    })
    res.send({error:false, message:"new hero created successfully"})
})


//steps to HTTP request "PUT"
//read all the heroes
//target the requested hero - by id
//change the name and power in the body
//write back to the file

app.put("/update/:id" , (req, res) =>{
    // console.log(req.params)
    // first step - checking if postman is getting the request.
    fs.readFile("heroes.json", "utf-8", async (err, data) =>{
        // console.log(data)
        // ^ this will print the JSON heroes array
        //second step - checking if the terminal read the data(in this case, heroes array from "heroes.json")
        let heroes = await JSON.parse(data)

        //third step - checking if the terminal can read "data" / "heroes" in JS form
        console.log(heroes)

        let targetHero = heroes.findIndex((hero) => hero.id == req.params.id)
        //"targetHero" will find the specific index / "id" of an hero in "heroes" array.

        if(targetHero <0){
            return res.status(400).send("hero doesnt exist")
        }

        //fourth step - pasting the specific hero, define by "targetHero" value
        console.log(heroes[targetHero])

        //fifth step - check if the terminal read request from the body
        console.log(req.body)

        //six step - define the new name and power of the specific hero with the name and power from the body request
        heroes[targetHero].name = req.body.name
        heroes[targetHero].power = req.body.power
        console.log(heroes)

        fs.writeFile("heroes.JSON", JSON.stringify(heroes), (err) =>{
                if (err){
                res.send({error:true, message: "somthing went wrong"})
                }
            res.send("hero updated successfully")
        })
    })
})

app.get("/powerUp", (req , res) =>{
    fs.readFile("heroes.json", "utf8" , async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }

        let heroes = await JSON.parse(data)
        // console.log(heroes)
        //^print to the terminal
        let strongerThan = heroes.filter(hero => hero.power >= req.query.power)

        if(strongerThan.length < 1){          
            return res.status(400).send("no such strong heroes exist")         
        }

        res.send(strongerThan)
    })
})

app.get("/powerDown", (req , res) =>{
    fs.readFile("heroes.json", "utf8" , async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }

        let heroes = await JSON.parse(data)
        // console.log(heroes)
        //^print to the terminal
        let weakerThan = heroes.filter(hero => hero.power <= req.query.power)
     
        if(weakerThan.length < 1){          
            return res.status(400).send("there are no weaker heroes")         
        }
        res.send(weakerThan)
    })
})

app.get("/matchName/:name",(req, res) =>{
    fs.readFile("heroes.json", "utf8" , async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }
        const heroes = await JSON.parse(data)
        let hero = heroes.filter(hero => hero.name == req.params.name)

        if(req.query.name){
            hero = heroes.filter(hero => hero.name.includes(req.query.name))
        }
        //^another option of filtering matching names. is by query. we will use the method - "Array.prototype.includes()""

        res.send(hero)
    })
})

app.delete("/delete/:id", (req,res) => {
    fs.readFile("heroes.json", "utf8", async (err, data)=> {
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }

        const heroes = await JSON.parse(data)
        const targetHero = heroes.filter(hero => hero.id != req.params.id)
         
        fs.writeFile("heroes.json", JSON.stringify(targetHero), (err) =>{
            if (err){
                res.send({error:true, message: "somthing went wrong"})
            }
        })
    })
    res.send({error:false, message:"hero deleted successfully"})
})


const PORT = 5000;
app.listen(PORT , () => {console.log(`server is running on port ${PORT}`)})