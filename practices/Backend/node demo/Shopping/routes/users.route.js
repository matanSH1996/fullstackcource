const router = require("express").Router();
const { json } = require("express");
const fs = require("fs")
const dataFolderPath = "C:/fullstack/homework/practices/Backend/node demo/Shopping/data/"
const { v4: uuidv4 } = require('uuid')

router.get("/all", (req,res) => {
    fs.readFile(`${dataFolderPath}users.json`, "utf-8", async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }
        // console.log(data)
        //^first check - printing users array from "users.json" into the console
        
        const users = await JSON.parse(data)
        //we can transform data from JSON into - JS in order to manipulate it
        //console.log(users)
        //^check if the data transformed into JS

        const usersWithoutPassword = users.map(user => ({...user, password: "******"}))
        //we will use the map() method in order to create new array without visible passwords.
        //we will use spread operator to return all the "user" data (id, userName, password)
        //and we will create new array which all the password data is turned into "******"
        // console.log(usersWithoutPassword)//

        res.send(usersWithoutPassword)
    })
})

router.post("/login" , (req,res) =>{
    const {userName,password} = req.body
    fs.readFile(`${dataFolderPath}users.json`, "utf-8", async (err, data) =>{
        if (err){
            res.send({error:true, message: "somthing went wrong"})
        }
        const users = await JSON.parse(data)

        // console.log(users)
        //^first check - printing users array from "users.json" into the console

        const currentUser = users.find(user => user.userName == userName)
        //if we want to validate both username and password are correct,
        //we should add "&& user.password == password" in the arrow function^

        if(!currentUser) res.send("username doesnt exist")
        if(currentUser.password != password) res.send("password isnt correct")

        res.send("login successfully")
        // res.send(currentUser)
    })
})

router.post("/register", (req,res) =>{
    const {userName,password} = req.body
    fs.readFile(`${dataFolderPath}users.json`, "utf-8", async (err, data) =>{
        if (err){
            res.status(500).send("somthing went wrong") 
        }
        const users = await JSON.parse(data)

        const newUser = {
            id : uuidv4(),
            userName : userName,
            password : password
        }

        const duplicateCheck = users.find(user => user.userName == newUser.userName)
        if(duplicateCheck) res.status(400).send ("this username is already caught by some one else")       
        // return res.send(newUser)
        //^we will check if the new users information successfully written in the client or console

        users.push(newUser)
        fs.writeFile(`${dataFolderPath}users.json`, JSON.stringify(users), (err) =>{
            if (err){
                res.status(500).send("somthing went wrong") 
            }

            return res.status(201).send("new user has been created")
            //res.send(users)
        })
    })
})

module.exports = router

