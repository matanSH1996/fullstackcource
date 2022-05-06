const express = require("express")
const app = express()
const fs = require("fs")

app.set("view engine" , "ejs")
//^this is the syntax for using "EJS"

app.use(express.static("./public"))
//^import the static folder
app.use(express.json())

app.get("/", (req,res) =>{
    // res.send("im from route - /")

    fs.readFile("heroes.json", async (err, data) =>{
        if(err){return res.status(400).send("something went wrong")}
        const heroes = await JSON.parse(data)
        console.log(heroes)

        res.render("pages/main", {heroes})
    })
})

app.get("/captain-america", (req,res)=>{
    res.render("pages/captain_america")
})

const PORT = 5000;
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`))

app.use((req, res) =>{
    // res.status(404).sendFile("404 page.html", {root: __dirname})
    res.status(404).render("pages/404page")
})
//^using middleware to handle the unfound routes