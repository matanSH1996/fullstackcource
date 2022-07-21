
//one way of typing the catchAsync function:
// module.exports = (func) => {
//     return (req,res,next) =>
//         func(req,res,next).catch(err => next(err))
// }

//second way of typing the catchAsync function:
// module.exports = (func) => {
//     return (req,res,next) =>
//         func(req,res,next).catch(next)
// }


module.exports = (func) => {
    return function anotherFunction(req,res,next){
        func(req,res,next).catch(next)
    }
}

// catchAsync is a function which get another asynchronous function as a parameter (in our case - "func").
// then catchAsync will return another function which calls "function anotherFunction(req,res,next)".
// the function "function anotherFunction(req,res,next)" get "req,res,next" as parameters and catches "func(req,res,next).catch(next)"
// func(req,res,next).catch(next) catches the Error and transfer it to the app.use(globalErrorHandler) which is the last middleware