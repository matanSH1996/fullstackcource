const express = require("express")
const app = express()

app.use(express.json())

app.set("view engine" , "ejs")

app.get("/" , (req,res) =>{
    res.render("./index")
})

app.get("/login" , (req,res) =>{
    res.render("./login")
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`we rock on port ${PORT}`))