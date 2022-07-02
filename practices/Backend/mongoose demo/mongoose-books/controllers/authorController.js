const Author = require("../models/author")

exports.getAllAuthor = async(req,res) => {
    const authors = await Author.find()
    res.json({
        success:true,
        data: authors
    })
}

exports.createAuthor = async(req,res) =>{
    const newAuthor = new Author(req.body)
    await newAuthor.save()
    res.json({
        success: true,
        data: newAuthor
    })
}

exports.updateAuthor = async(req,res)=>{
    const { id } = req.params.id
    const targetedAuthor = await Author.findByIdAndUpdate(id, req.body)
    res.json({
        success:true,
        data: "author has successfully updated"
    })
}

exports.deleteAuthor = async (req,res) => {
    const { id } = req.params.id
    const targetedAuthor = Author.deleteOne(id)
    res.json({
        success:true,
        data: "the author has successfully deleted"
    })
}























// exports.getAllAuthor = async (req, res) => {
//     try {
//         const authors = await Author.find()
//         res.status(200).json({
//             status: "success",
//             data: authors
//         })
//     } catch (error){
//         console.log(error)
//     }
// }

// exports.createAuthor = async (req, res) => {
//     try {
//         const author = new Author(req.body)
//         await author.save()

//         res.status(201).json({
//             status: "success",
//             data : author
//         })
//     } catch (error) {
//         console.log(error)
//     }
    
// }