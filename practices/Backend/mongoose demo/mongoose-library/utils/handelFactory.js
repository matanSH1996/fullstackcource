const AppError = require("../utils/AppError")
const catchAsync = require("../utils/catchAsync")

exports.createOne = Model => async(req,res, next)=>{
    try {
        const document = await Model.create(req.body)
        await document.save()
        res.status(201).json({
            status: "success",
            data: document
        })      
    } catch (error) {
        // console.log(error)
        // res.json({
        //     success: false,
        //     data: error
        // })

        next(new AppError(error.message, error.status))
        // using the instance of AppError in the "catch()" will allow us to catch the Model's validation error messages
        // in a simple message form
    }
}

exports.getAll = Model => async (req,res,next) => {
    try {
        const document = await Model.find() 
        
        if(!document){
            return next(new AppError("the id inserted doesnt exist, please check again",400 ))
            
            // return res.status(400).json({
            //     status:"fail",
            //     data : {
            //         message: "the id inserted doesnt exist, please check again"
            //     }
            // })
        }
        res.status(200).json({
            status: "success",
            data: document
        })      
    } catch (error) {
        // console.log(error)
        next(new AppError(error.message, error.status))
}}

exports.getOne = Model => async (req,res, next) =>{
    try {
        const document = await Model.findById(req.params.id)

        if(!document){
            return next(new AppError("the id inserted doesnt exist, please check again", 400))
            
            // return res.status(400).json({
            //     status:"fail",
            //     data : {
            //         message: "the id inserted doesnt exist, please check again"
            //     }
            // })
        }
        res.status(200).json({
            status: "success",
            data: document
        })
    } catch (error) {
        // console.log(error)
        next(new AppError(error.message, error.status))
    }
}

exports.updateOne = Model => 
    catchAsync (async (req,res, next) =>{
    // by using the catchAsync we dont need to use try and catch method
    // try {
        const document = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new:true,
            runValidators:true
        })
        
        if(!document){
            return next(new AppError("the id inserted doesnt exist, please check again", 400))

            // return res.status(400).json({
            //     status:"fail",
            //     data : {
            //         message: "the id inserted doesnt exist, please check again"
            //     }
            // })
        }
        res.status(200).json({
            status: "success",
            data: document
        })
//     } catch (error) {
//         // console.log(error)
//         next(new AppError(error.message, error.status))
//     }
})

exports.deleteOne = Model => async (req,res) =>{
    try {
        const document = await Model.findByIdAndDelete(req.params.id)
        
        if(!document){
            return next(new AppError("the id inserted doesnt exist, please check again", 400))

            // return res.status(400).json({
            //     status:"fail",
            //     data : {
            //         message: "the id inserted doesnt exist, please check again"
            //     }
            // })
        }

        if(document.length > 0){

            return next(new AppError("the document inserted wasnt delete, please try again", 400))

            // return res.status(400).json({
            //     status:"fail",
            //     data : {
            //         message: "the document inserted wasnt delete, please try again"
            //     }
            // })
        }

        else{
            res.status(200).json({
                status: "success",
                data: "the deletion successfully done"
            })
        }
    } catch (error) {
        // console.log(error)
        next(new AppError(error.message, error.status))
    }
}