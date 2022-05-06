require("dotenv").config()
const express = require("express")
const app = express()
app.use(express.static("./public"))

app.set("view engine" , "ejs")
//^this is the syntax for using "EJS"


app.get("/", (req, res) => {
    // res.sendFile("main.html" , {root: __dirname})
    const user = {
        firstName : "John",
        lastName : "Doe",
        admin : false
    }
    res.render("pages/index", {user})
    //we use res.render in order to use ejs file
})

app.get("/home", (req, res) => {
    // res.sendFile("about.html" , {root: __dirname})
    const animals = [
        {name : "lion", type : "cat"},
        {name : "wagtail", type : "bird"},
        {name : "tiger", type : "cat"},
        {name : "shark", type : "fish"}
    ]
    res.render("pages/main" , {animals})
})

app.get("/about", (req, res) => {
    // res.sendFile("about.html" , {root: __dirname})
    res.render("pages/about")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`running on port ${PORT}`))

app.use((req, res) =>{
    // res.status(404).sendFile("404 page.html", {root: __dirname})
    res.status(404).render("pages/404page")
})
//^using middleware to handle the unfound routes