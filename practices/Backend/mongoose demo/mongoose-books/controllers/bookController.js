const Book = require("../model/book")


exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find().populate("author")
        res.status(200).json({
            status: "success",
            data: books
        })
    } catch (error) {
        console.log(error)
    }
}

exports.creatBook = async (req, res) => {
    try {
        const book = new Book(req.body)
        await book.save()

        res.status(201).json({
            status: "success",
            data: book
        })
    } catch (error) {
        console.log(error)
    }
}