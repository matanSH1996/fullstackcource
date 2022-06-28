require("dotenv").config()
const express = require("express")
const app = express()
const connectMongo = require("./connectDB")
// const mongoose = require("mongoose")
// const MONGODB_URL = "mongodb://localhost:27017/animals"


app.use(express.json())

// const connectMongo = async () => {
//     try{    
//         await mongoose.connect(process.env.MONGODB_URL);
//         console.log("connected to mongoDB")
//     } catch (error){
//         console.log(error)
//     }
// }

connectMongo()

//the basic form of Schema (without strict validation):
// const catSchema = mongoose.Schema({ 
//     name: String,
//     age: Number,
//     color: String })

//we can create more strict Schema by using the "required : true" method
//by giving the keys - curly brackets, we can add "type: ... ", and "required : true / false"
//"required : ... " method is defined with "true" / "false" ahead of time, binding the documents we want to create to a specific Schema stracture (defined with the model's Schema)

// const catSchema = mongoose.Schema({ 
//     name: String,
//     age: {
//         type: Number,
//         required: [true, "cat must have age"]
//     },
//     color: String })

//models will be with capital letters
//the models requires two things - collection name in single form (the models identifies the collection name, and adds "s" to it) and Schema (schema - kind of Object contain fields relevant to the collection)
//for example -> const Cat = mongoose.medel('Cats', {name: String})

// const Cat = mongoose.model('Cat', catSchema)

//creating new document inside of "Cats" collections:
//first - declare the new document which will be defined as a new document, by the collection's schema
//example -> const cat = new Cat ({ name: "garfield"})
//in order that the new document will get inside the collection, we need to use the reserve "save()" method
//example ->cat.save()
//we can use the reserve ".then()" method to defime what action will happen after the "save()" action

// const cat = new Cat ({ name: "garfield", age: 5, color: "orange"})
// cat
//     .save()
//     .then(() => console.log("new cat created"))
//     .catch((err) => console.log(err))

app.use("/cat", require("./routes/cat"))
app.use("/bird", require("./routes/bird"))

PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`))