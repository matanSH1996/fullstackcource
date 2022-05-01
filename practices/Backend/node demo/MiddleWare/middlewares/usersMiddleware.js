function saveLastUserCreated (req,res,next){
    let lastUserBackUp = {
        "id" : uuid.v4(),
        "name" : req.body.name,
        "age" : req.body.age
    }

    next()
    console.log(lastUserBackUp)
}

module.exports = saveLastUserCreated
