const Author = require("../models/author")
const factory = require("../utils/handelFactory")

// exports.getAllAuthors = async (req,res) =>{
//     try{
//         const authorCollection = await Author.find()
//         res.json({
            // success: true,
            //status: 'success'
//             data: authorCollection
//         })
//     } catch (err) {
//         res.json({
//             success: false,
//             data: message.err
//         })
//     }
// }
exports.getOneAuthor = factory.getOne(Author)
exports.getAllAuthors = factory.getAll(Author)
//^another option how to use routes, with the usage of handle function.

// exports.getOneAuthor = async (req,res) =>{
//     const targetedAuthor = await Author.findById(req.query.id)
//     const authorCollection = await Author.find()
//     try {
//         if(!targetedAuthor) {return res.status(400).json({
//             status: "fail",
//             message:"the id inserted doesnt exist, please check again",
//             data: authorCollection
//         })}
//         } catch (err) {
//             console.log(err)
//     } res.status(200).json({
//         status : "success",
//         data: targetedAuthor
//     })
// }

exports.createAuthor = factory.createOne(Author)

// exports.createAuthor = async(req,res) =>{
//     try{
//         const newAuthor = new Author(req.body)
//         await newAuthor.save()
//         res.json({
//             success:true,
//             data: newAuthor
//         })
//     } catch (err) {
//         res.json({
//             success: false,
//             data: message.err
//         })
//     }
// }

// exports.updateAuthor = async(req,res) =>{
//     try{ 
// const targetedAuthor = await Author.findByIdAndUpdate(req.query.id, req.body, {
//     new:true,
//     runValidators:true
// })
//         await targetedAuthor.save()
//         res.json({
//             success:true,
//             data: "the author has successfully updated"
//         })
//     } catch (err) {
//         res.json({
//             success: false,
//             data: message.err
//         })
//     }
// }
//when updating a document we must use "await" and ".save()" in order to write in the DB
//Model.findByIdAndUpdate(identifier , theUpdate)

exports.updateAuthor = factory.updateOne(Author)
exports.deleteAuthor = factory.deleteOne(Author)


// exports.deleteAuthor = async (req,res) =>{
//     try {
//     const targetedAuthor = await Author.findByIdAndDelete(req.query.id)

//     if(!targetedAuthor) {return res.status(400).json({
//         status: "fail",
//         data: { message: "the id inserted doesnt exist" }
//     })
//     }
//     res.status(200).json({
//         data: "success",
//         data: "the author has successfully deleted"
//     })} catch (err) {
//         console.log(err)
//     }
// }
// ^ option 2 for the deletion method, using "Model.findByIdAndDelete()"


// exports.deleteAuthor = async(req,res) =>{
//     try{
//         const targetedAuthor = await Author.deleteOne({_id : req.query.id})
//         res.json({
//             success:true,
//             data: "the author has successfully deleted"
//         })
//     } catch (err) {
//         res.json({
//             success: false,
//             data: message.err
//         })
//     }
// }
// ^ option 1 of the deletion method
//Model.deleteOne({identifier : value})
//when deleteing a document we must use await
//".save()" is not necessary

// promise example:
// function promise(){
//     return new Promise((resolve, reject) => {
//         resolve("Promise Done!")
//         reject ("some error has been occur")
//     })
// }

// promise()
//     .then(data => console.log(data))
//^the data refers to the "resolve()" content
//instead of using this syntax ( with ".then()" ), we can use "await" -> await promise():
//await promise( ) = .then( )
//     .catch(err => console.log(err))

    
    // try{
    //     await promise()
    // }catch(err){
    //     console.log(err)
    // }

