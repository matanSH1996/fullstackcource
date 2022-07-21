module.exports = (err, req,res,next) =>{
    const statusCode = err.statusCode || 500
    const status = statusCode[0] === 4 ? "fail" : "error"

    //error = server error
    //fail = bad request

    console.log(err.message)
    console.log(err.statusCode)

    res.status(statusCode).json({
        status,
        message : err.message
        //the message comes from the AppError constructor which contains message property
    })
}