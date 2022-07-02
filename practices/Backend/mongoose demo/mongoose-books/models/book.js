// const { Schema, model} = require("mongoose")

// const BOOK_MIN_PAGE = 1
// const BOOK_MAX_PAGE = 1000

// const bookSchema = new Schema({
//     name: {
//         type: String,
//         required: [true, "book must have first name"]
//     },
//     pages : {
//         type: Number,
//         required: [true, "book must have pages number"],
//         min: [0, `book must number of page which is bigger than ${BOOK_MIN_PAGE},recieved {value}`],
//         max: [1000, `book must number of page less than ${BOOK_MAX_PAGE},recieved {value}`]
//     },
//     difficulty :{
//         type: String,
//         enum: {
//             values: ["easy", "medium", "hurd"],
//             message : `difficulty must be "easy", "medium", "hurd"`
//         }
//     }, 
//         author: {
//             type: Schema.Types.ObjectId,
//             ref: "Author",
//             required: [true, "book must have an author"]
//     }
// })

// const Book = model(Book, bookSchema)
// module.exports = Book