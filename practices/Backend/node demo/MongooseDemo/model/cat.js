const {Schema, model} = require("mongoose")

//in order to avoid the repetitions of the word "mongoose" any time using the model or Schema (mongoose.medel / mongoose.Schema), we will use "destructuring" by using curly brackets on the model and the Schema -> const {Schema, model} = require("mongoose")


const catSchema = new Schema({ 
    name: {type: String, 
        required: [true, "cat must have name"]},
    age: {
        type: Number,
        required: [true, "cat must have age"]
    },
    color: {type: String, 
        default: "black"} })

    const Cat = model('Cat', catSchema)
    module.exports = Cat