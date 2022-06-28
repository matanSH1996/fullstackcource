const router = require("express").Router();
const bird_controller = require("../controllers/bird");

// get all bird
router.get("/", bird_controller.getAllBirds);

// create bird
router.post("/", bird_controller.createBird);

module.exports = router;
