const express = require("express")
const router = express.Router()
const author_controller = require("../controllers/authorController.js")

router.route("/")
.get("/", author_controller.getAllAuthor)
.post("/", author_controller.createAuthor)
.put("/:id", author_controller.updateAuthor)
.delete("/:id",author_controller.deleteAuthor )




// router.route("/")
// .get(authorController.getAllAuthor)
// .post(authorController.createAuthor)

//"/"
//get - get all authors
//post - create new author
//put - update author
//delete - delete an author

module.exports = router