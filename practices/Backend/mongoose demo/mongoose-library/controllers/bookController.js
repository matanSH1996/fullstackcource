const Book = require("../models/book")
const factory = require("../utils/handelFactory")

// exports.getAllBook = async (req,res) => {
//     const bookCollection = await Book.find().populate('author review')
//     res.json({
//         success : true,
//         data: bookCollection
//     })
// }
exports.getOneBook = factory.getOne(Book)
exports.getAllBook = factory.getAll(Book)
exports.createBook = factory.createOne(Book)

// exports.createBook = async (req,res) => {
//     const newBook = await new Book(req.body)
//     await newBook.save()
//     res.json({
//         success: true,
//         data :"new book has successfully created"
//     })
// }

// exports.updateBook = async (req,res) => {
//     const targetedBook = await Book.findByIdAndUpdate(req.query.id , req.body)
//     res.json({
//         success: true,
//         data : "the book has successfully updated"
//     })
// }

exports.updateBook = factory.updateOne(Book)
exports.deleteBook = factory.deleteOne(Book)

// exports.deleteBook = async (req,res) => {
//     const targetedBook = await Book.deleteOne({id: req.query.id} )
//     res.json({
//         success: true,
//         data : "the book has successfully deleted"
//     })
// }