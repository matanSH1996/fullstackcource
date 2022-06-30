const router = require("express").Router();
const bird_controller = require("../controllers/bird");

// get all bird
router.get("/", bird_controller.getAllBirds);

// create bird
router.post("/", bird_controller.createBird);

// update bird
router.put("/updateBird/:id", bird_controller.updateBird)

//delete bird
router.delete("/deleteBird/:id", bird_controller.deleteBird)

module.exports = router;
