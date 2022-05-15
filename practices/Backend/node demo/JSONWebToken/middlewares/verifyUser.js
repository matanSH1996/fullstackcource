const jwt = require("jsonwebtoken")

const verifyUser = (req, res, next) =>{
    // console.log(req.headers["authorization"])
    const token = req.headers["authorization"]
    if(!token){return res.status(400).send("sorry you need to log in first")}
    jwt.verify(token, process.env.TOKEN_SECRET, (err , decoded) =>{
        console.log(err)
        if(err){return res.status(403).send("sorry you are un authorized")}
        console.log(decoded)
        console.log({token})
        
        req.userId = decoded.id
    })
    next()
}

module.exports = verifyUser