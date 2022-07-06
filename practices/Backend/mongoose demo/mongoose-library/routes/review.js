const router = require ("express").Router()
const review_controller = require ("../controllers/reviewController")

router.route("/")
    .get(review_controller.getAllReview)
    .post(review_controller.createReview)
    .put(review_controller.updateReview)
    .delete(review_controller.deleteReview)

module.exports = router