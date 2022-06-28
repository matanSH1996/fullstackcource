const router = require("express").Router()
const Bird = require("../model/birs")
const bird_controller = require("../controller/bird")

router.get("/getAllBirds" , bird_controller.getAllBird)

router.post("/createBird", bird_controller.createBird)

router.put("/updateBird/:id", bird_controller.updateBird)

router.delete("/deleteBird", bird_controller.daleteBird)

module.exports = router