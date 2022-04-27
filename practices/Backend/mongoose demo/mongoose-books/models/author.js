const { Schema, model} = require("mongoose")

const AUTHOR_MIN_AGE = 0
const AUTHOR_MAX_AGE = 120

const authorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, "author must have first name"]
    },
    lastName : {
        type: String,
        required: [true, "author must have last name"]
    },
    age : {
        type: Number,
        required: [true, "author must have age"],
        min: [0, `author must age which is bigger than ${AUTHOR_MIN_AGE},got {value}`],
        max: [120, `author must have age less than ${AUTHOR_MAX_AGE},got {value}`]
    }
})

const Author = model(Author, authorSchema)
module.exports = Author