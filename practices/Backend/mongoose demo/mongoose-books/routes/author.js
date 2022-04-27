const express = require("express")
const router = express.Router()
const authorController = require("../controllers/authorController")

router.route("/")
.get(authorController.getAllAuthor)
.post(authorController.createAuthor)

module.exports = router