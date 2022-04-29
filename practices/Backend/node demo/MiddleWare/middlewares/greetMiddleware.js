function greetingMiddleware(req, res, next){
    console.log(`greetings from the middleware`)
    next()
}

module.exports = greetingMiddleware