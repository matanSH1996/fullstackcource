const Cat = require("../model/cat")

exports.getAllCats = async (req,res) =>{
    const cats = await Cat.find();
    res.json({
        success: true,
        data : cats
    })
}

exports.createCat = async (req,res) =>{
    try{    
        const newCat = new Cat(req.body)
        await newCat.save()
        res.send({
            succsess: true, 
            data : newCat})
    } catch (error){
        res.json({
            succsess: false,
            error: error.message
        })
    }
}

exports.updateCat = async (req,res)=>{
    try{
        const catCollection = await Cat.find()
        const options = {
            new: true,
            runValidator: true
        }
        const targetedCat = await Cat.findByIdAndUpdate(req.params.id, req.body, options )
        // await targetedCat.save()
        // when we use ModelName.findByIdAndUpdate(id, update) there is no need to use "save()" method

        res.json({
            succsess: true, 
            data : catCollection})

    } catch(error){
        res.json({
            succsess: false,
            error: error.message
        })
    }
}

exports.deleteCat = async (req,res)=>{
    try{
        // const catCollection = await Cat.find()
        const targetedCat = await Cat.deleteOne({ _id : req.params.id })
        // await targetedCat.save() is not requested in Model.deleteOne( ... )

        res.json({
            succsess: true,
            message: "the cat has deleted successfully"
        })
    } catch(error){
        res.json({
            succsess: false,
            error: error.message
        })
    }
}

exports.getSingleCat = async (req,res) =>{
    const cat = await Cat.findOne({_id : req.params.id })
    res.send({
        succsess: true, 
        data : cat})
}