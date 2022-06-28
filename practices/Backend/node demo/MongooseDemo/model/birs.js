const {Schema, model} = require("mongoose")

const birdSchema = new Schema({ 
    name: {type: String, 
        unique:true,
        required: [true, "bird must have name"]},
    length: {
        type: Number,
        default: 1
    },
    speed: {
        type: Number, 
        required: [true, "bird must have speed"]},
    extinction: {
        type: Boolean,
        default: false
    }
})
    

const Bird = model('Bird', birdSchema)
module.exports = Bird