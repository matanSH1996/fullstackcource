require("dotenv").config()
const fs = require ("fs")
const express = require("express")
const app = express()
app.use(express.json())


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`we rock on port ${PORT}`))