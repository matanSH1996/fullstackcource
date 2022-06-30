const {Schema, model} = require("mongoose")

const fishSchema = new Schema ({
    species:{
        type: String,
        required: true
    }, length:{
        type: Number,
        default: 0.5
    }, weight: {
        type: Number,
        default: 0.5
    }, maxDeep: {
        type: Number,
        default: 10
    }
})

const Fish = model ('fish', fishSchema) 
module.exports = Fish
