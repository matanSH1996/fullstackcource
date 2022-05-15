const router = require("express").Router()
const jwt = require("jsonwebtoken")
const fs = require("fs")
const verifyUser = require("../middlewares/verifyUser")
const usersFilePath = 'C:/fullstack/homework/practices/Backend/node demo/JSONWebToken/data/'
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const saltRounds = 10;


// -> stages for creating login route
//get username and password
//validate user with the users.json file
//create a TOKEN
//send the TOKEN

// ->route of "login" without "bcrypt" method
// router.post("/login", (req,res) =>{
//     const {username , password} = req.body
    // console.log(username,password)
    // fs.readFile(`${usersFilePath}users.json`, 'utf-8',async (err , data) =>{
    //     if(err){return res.status(500).send("sorry, something went wrong")} 
        // console.log(data)  
        // if(!username || !password)return res.status(400).send("there is missing information")

        // const users = await JSON.parse(data)
        // const user = users.find(user => username == user.username & password == user.password)

        // if(!user){return res.status(400).send("username or password are incorrect")}

        // console.log(process.env.TOKEN_SECRET)
        // const token = jwt.sign({username: user.username, id: user.id},process.env.TOKEN_SECRET);
        // res.send(`welcome ${username}`)
        
//         res.send({token})
//     })
// })


router.post("/register" , (req,res) =>{
    // res.send("TEST")
    const {username , password} = req.body
    fs.readFile(`${usersFilePath}users.json`, 'utf-8',async (err , data) =>{
        if(err){return res.status(500).send("sorry, something went wrong")} 
        // console.log(data)  

        const users = JSON.parse(data)
        // res.send(users)

        const hashedPassword = await bcrypt.hash(password.toString() , saltRounds)

        const newUser = {
            username : username,
            password : hashedPassword,
            id : uuidv4()     
        }

        users.push(newUser)
        fs.writeFile(`${usersFilePath}users.json`, JSON.stringify(users), (err) =>{
            if(err){return res.status(500).send("sorry, something went wrong")}
            res.status(200).send("user has successfully created")
        })
    })
})

router.post("/login", (req,res) =>{
    const {username , password} = req.body
    // res.send("TEST")
    fs.readFile(`${usersFilePath}users.json`, 'utf-8',async (err , data) =>{
        if(err){return res.status(500).send("sorry, something went wrong")} 
        if(!username || !password)return res.status(400).send("there is missing information")
        const users = await JSON.parse(data)
        const currentUser = users.find(user => username == user.username)
        if(!currentUser) res.status(400).send("username doesnt exist")

        const decipheredPassword = await bcrypt.compare(password.toString(), currentUser.password)
        if(!decipheredPassword){return res.status(400).send("wrong password")}
        // res.send("login successfully")

        const token = jwt.sign({username: currentUser.username, id: currentUser.id},process.env.TOKEN_SECRET)
        res.send({messege : "login successfully", token})
    })
})

module.exports = router