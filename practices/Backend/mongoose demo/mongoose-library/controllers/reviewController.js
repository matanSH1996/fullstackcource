const Review = require("../models/review")

exports.getAllReview = async (req,res) =>{
    try{
        const reviewCollection = await Review.find()
        res.json({
            success: true,
            data : reviewCollection
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            data : console.log(err)
        })
    }
}

exports.createReview = async (req,res) =>{
    try{
        const newReview = new Review(req.body)
        await newReview.save()
        res.json({
            success: true,
            data : "new review has been created"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            data : console.log(err)
        })
    }
}

exports.updateReview = async (req,res) =>{
    try{
        const targetedReview = await Review.findByIdAndUpdate({_id : req.params.id}, req.body)
        res.json({
            success: true,
            data : "the review has successfully updated"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            data : console.log(err)
        })
    }
}

exports.deleteReview = async (req,res) =>{
    try{
        const targetedReview = await Review.deleteOne({_id : req.params.id})
        res.json({
            success: true,
            data : "the review has successfully deleted"
        })
    } catch (err) {
        res.status(400).json({
            success: false,
            data : console.log(err)
        })
    }
}