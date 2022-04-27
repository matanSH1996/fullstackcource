const express = require("express")
const app = express()
app.use(express.json()) 
//^allows the server to read and trasfer data in JSON format

app.use("/users", require ("./routes/users.route.js"))
app.use("/products", require ("./routes/products.route.js"))
app.use("/admin" , require ("./routes/admin.route.js"))

app.get("/", (req,res) => {
    res.send("shopping API")
})

const PORT = 5000
app.listen(PORT, () => `server is up on port ${PORT}`)
