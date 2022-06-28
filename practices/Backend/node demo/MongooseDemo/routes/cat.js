const router = require("express").Router()
const Cat = require("../model/cat")
const cat_Controller = require ("../controller/cat")

router.get("/all", cat_Controller.getAllCats)

router.get("/single/:id", cat_Controller.getSingleCat)

router.post("/createCat", cat_Controller.createCat)

router.put("/updateCat/:id", cat_Controller.updateCat)

router.delete("/deleteCat/:id", cat_Controller.deleteCat)

module.exports = router