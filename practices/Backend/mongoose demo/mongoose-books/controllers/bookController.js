// const Book = require("../models/book")

// exports.getAllBooks = async (req, res) => {
//     try {
//         const book = await Book.find().populate("author")
//         res.status(200).json({
//             status: "success",
//             data: book
//         })
//     } catch (error){
//         console.log(error)
//     }
// }

// exports.createBook = async (req, res) => {
//     try {
//         const book = new book(req.body)
//         await book.save()

//         res.status(201).json({
//             status: "success",
//             data : book
//         })
//     } catch (error) {
//         console.log(error)
//     }
    
// }