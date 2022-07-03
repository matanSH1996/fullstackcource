const { Schema, model } = require("mongoose")

const bookSchema = new Schema({
    name: {
        type: String,
        required: [true, "Book must have a name"]
    },
    pages: {
        type: Number, 
        required: [true, "Book must have pages number" ],
        min: [1, "Book pages must be at least 1, got {VALUE}"]
    },
    diffcelity: {
        type: String,
        enum: {
            values: ["easy", "meduime", "hard"],
            message: `diffcelity must be "easy", "meduime", "hard". recieved {VALUE}`
        }
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Author",
        required: [true, "Book must have an author"]
    }

})

const Book = model("Book", bookSchema)
module.exports = Book