const { Schema, model } = require('mongoose')
//remember schema is a class and model is a function!

//destracure is when you name an obj after a key name and it retains its value from a previous object
//example: 
const obj = { name: 'michael' }
const { name } = obj
//the new obj is equal to 'michael'

const AUTHOR_MIN_AGE = 0
const AUTHOR_MAX_AGE = 120

const authorSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Author must have a first name']
    },
    lastName: {
        type: String,
        required: [true, 'Author must have a last name']
    },
    age: {
        type: Number,
        required: [true, 'Author must have an age'],
        min: [
            AUTHOR_MIN_AGE,
            `Author's age cannot be less than ${AUTHOR_MIN_AGE}, recieved {VALUE}`
        ],
        max: 
        [
            AUTHOR_MAX_AGE,
            `Authors age cannot exceed ${AUTHOR_MAX_AGE}, recieved {VALUE}`
        ]
    }
})

const Author = model("Author", authorSchema)
module.exports = Author;