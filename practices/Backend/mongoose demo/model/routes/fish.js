const router = require("express").Router()
const Fish = require ("../models/fish")

router.get("/getAllFish",  async (req,res) => {
    try{
        const fishCollection = await Fish.find()
        res.json({
            success: true,
            data: fishCollection})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

router.get("/filterByWeight",  async (req,res) => {
    try{
        const fishCollection = await Fish.find({weight: {$gte: req.query.weight }})
        res.json({
            success: true,
            data: fishCollection})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

router.get("/filterByLength",  async (req,res) => {
    try{
        const fishCollection = await Fish.find({length: {$gte: req.body.length }})
        res.json({
            success: true,
            data: fishCollection})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

router.get("/filterBySpecies",  async (req,res) => {
    try{
        const fishCollection = await Fish.find({species: {$eq: req.query.species }})
        res.json({
            success: true,
            data: fishCollection})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

// + by weight
// + by length
// + by type

router.post("/createFish",  async (req,res) => {
    try{
        const newFish = new Fish(req.body)
        await newFish.save()
        res.json({
            success: true,
            message: "new fish has created successfully"
        })
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

router.put("/updateFish/:id",  async (req,res) => {
    try{
        const targetedFish = await Fish.findByIdAndUpdate( req.params.id , req.body)  
        res.json({
            success: true,
            data: "the fish has updated successfully"})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

router.delete("/deleteFish",  async (req,res) => {
    try{
        const targetedFish = await Fish.deleteOne({ _id : req.body})  
        res.json({
            success: true,
            data: "the fish has deleted successfully"})
    }catch (error) {
        res.json({
            success: false,
            data: error
        })        
    }
})

module.exports = router