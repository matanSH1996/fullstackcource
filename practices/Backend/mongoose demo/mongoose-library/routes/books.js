const router = require ("express").Router()
const book_controller = require ("../controllers/bookController")

router
    .route("/")
        .get(book_controller.getAllBook)
        .post(book_controller.createBook)
        .put()
        .delete()

router
    .route('/:id')
        .get(book_controller.getOneBook)
        .post()
        .put(book_controller.updateBook)
        .delete(book_controller.deleteBook)
module.exports = router