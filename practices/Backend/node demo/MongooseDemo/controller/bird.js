const Bird = require("../model/birs")

exports.getAllBird = async (req,res) => {
    try{
        const birds = await Bird.find()
        res.json({
            success : true,
            data: birds
        })
    } catch (error) {
        res.json({
            success : false,
            data: error
        })
    }
}

exports.createBird =  async (req,res) =>{
    try{
        const newBird = new Bird(req.body)
        await newBird.save()
        res.json({
            success: true,
            data: "new bird has created"})
    } catch (error) {
        res.json({
            success: false,
            data: error})
    }
}

exports.updateBird = async (req,res) =>{
    try{
        const targetedBird = await Bird.findByIdAndUpdate(req.params.id, req.body)
        await targetedBird.save()
        res.json({
            success: true,
            data: "bird has successfully updated"})
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}

exports.daleteBird = async (req,res) =>{
    try{
        const targetedBird = await Bird.findOneAndDelete({_id: req.body})
        res.json({
            success: true,
            data: "the bird has successfully deleted"
        })
    } catch (error) {
        res.json({
            success: false,
            message: error
        })
    }
}