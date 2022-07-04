const {Schema , model} = require ("mongoose")

const MIN_BOOK_PAGES = 0

const bookSchema = new Schema({
    name : {
        type: String,
        required : [true, `book must have a name`]
    }, pages: {
        type: Number,
        required: [true,  `book must have pages` ],
        min: [1, `book pages must be bigger than ${MIN_BOOK_PAGES}, got {VALUE}`] 
    }, difficulty: {
        type: String,
        enum: ["easy", "medium" , "hard"],
        message: `difficulty must be "easy", "medium", "hard".recieved {VALUE}`
    }, author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: [true, "Book must have an author"]
    }
})

const Book = model('Book', bookSchema)
module.exports = Book