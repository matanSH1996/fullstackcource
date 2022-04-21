const jwt = require("jsonwebtoken")
router = require("express").router()
router.get("/login", (req,res) =>{
    const {username , password} = req.body
    console.log(username,password)
})

module.export = router