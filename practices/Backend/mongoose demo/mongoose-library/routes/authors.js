const router = require ("express").Router()
const author_controller = require("../controllers/authorController")

//in the next way of typing route, we will add inly the "/"
//example -> http://localhost:5000/author/
//the last "/" of the route, is coming from the "router.route('/')"

router
    .route('/')
        .get(author_controller.getAllAuthors)
        .post(author_controller.createAuthor)
        .put()
        .delete()

// router.get("/getAllAuthors" , async (req,res) =>{
//     const authorCollection = await Author.find()
//     res.json({
//         succes:true,
//         data: authorCollection
//     })
// })
//^ another option of creating the routes will be as the example above

router
    .route('/:id')
        .get(author_controller.getOneAuthor)
        .post()
        .put(author_controller.updateAuthor)
        .delete(author_controller.deleteAuthor)
// ^when we have routes which use "/" and routes which use params "/:id",
// we can devide them into two different routes

module.exports = router