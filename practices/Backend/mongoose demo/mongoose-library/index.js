require("dotenv").config()
const express = require("express")
const connectDB = require("./utils/connectDB")
const app = express()

const globalErrorHandler = require("./controllers/errorController")
const AppError = require("./utils/AppError")
connectDB()

//middlewares
app.use(express.json())

app.use("/author", require("./routes/authors"))
app.use("/book", require("./routes/books"))
app.use("/review", require("./routes/review"))
// app.get("/", (req,res) =>{res.send("TEST")})

app.all("*", (req,res, next) =>{

    //the "*" will catch all the routes which wont fit into the app routes:
    // -> app.use("/author", require("./routes/authors"))
    // -> app.use("/book", require("./routes/books"))
    // -> app.use("/review", require("./routes/review"))

    next(new AppError("page not found", 404))
    //the "next()" will transfer an object from "Error" class into the next middleware
    //if we would have type "test" inside the brackets -> next("test"), the midlleware would have print "test" when used

    // res.status(404).json({
    //     status: "fail",
    //     data: {
    //         message: "page not found"
    //     }
    // })
    //^not necessary thanks to "globalErrorHandler" and AppError which provides the template by the constructor
})

app.use(globalErrorHandler)
    
    //^the middleware will catch the error and will print it into the console

const PORT = process.env.PORT
app.listen(PORT, () => {console.log(`server is running on port ${PORT}`)})