const Author = require("../models/author")

exports.getAllAuthors = async (req,res) =>{
    try{
        const authorCollection = await Author.find()
        res.json({
            success: true,
            //status: 'success'
            data: authorCollection
        })
    } catch (err) {
        res.json({
            success: false,
            data: message.err
        })
    }
}

exports.createAuthor = async(req,res) =>{
    try{
        const newAuthor = new Author(req.body)
        await newAuthor.save()
        res.json({
            success:true,
            data: newAuthor
        })
    } catch (err) {
        res.json({
            success: false,
            data: message.err
        })
    }
}


exports.updateAuthor = async(req,res) =>{
    try{ 
        const targetedAuthor = await Author.findByIdAndUpdate(req.query.id, req.body)
        await targetedAuthor.save()
        res.json({
            success:true,
            data: "the author has successfully updated"
        })
    } catch (err) {
        res.json({
            success: false,
            data: message.err
        })
    }
}
//when updating a document we must use "await" and ".save()" in order to write in the DB
//Model.findByIdAndUpdate(identifier , theUpdate)

exports.deleteAuthor = async(req,res) =>{
    try{
        const targetedAuthor = await Author.deleteOne({_id : req.query.id})
        res.json({
            success:true,
            data: "the author has successfully deleted"
        })
    } catch (err) {
        res.json({
            success: false,
            data: message.err
        })
    }
}
//Model.deleteOne({identifier : value})
//when deleteing a document we must use await
//".save()" is not necessary