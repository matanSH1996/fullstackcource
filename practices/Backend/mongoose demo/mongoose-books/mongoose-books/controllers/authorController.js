const Author = require('../model/author')

exports.getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find()
        res.status(200).json({ 
            status: 'success',
            data: authors
        })
    } catch (error) {
        console.log(error)
    }
}

exports.createAuthor = async (req, res) => {
    try {
        const author = new Author(req.body)
        await author.save()
        res.status(201).json({
            status: 'success',
            //alt way is
            //status: 'success'
            data: author

        })
    } catch (error) {
        console.log(error)
    }
}