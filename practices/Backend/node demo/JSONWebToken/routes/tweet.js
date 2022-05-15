const router = require("express").Router()
const { v4: uuidv4 } = require('uuid');
const fs = require("fs")
const tweetsFilePath = 'C:/fullstack/homework/practices/Backend/node demo/JSONWebToken/data/'
const usersFilePath = 'C:/fullstack/homework/practices/Backend/node demo/JSONWebToken/data/'
const verifyUser = require("../middlewares/verifyUser")

router.get("/all",verifyUser, (req,res)=>{
    // res.send("TEST")
    fs.readFile(`${tweetsFilePath}tweets.json`, 'utf-8', (err , data) =>{
        if(err){return res.status(500).send("we are sorry, something went wrong")}
        // res.send(data)
        const tweets = JSON.parse(data)
        res.send(tweets)
    })
})

router.get("/myTweets" ,verifyUser, (req, res) =>{
    // console.log(req.userId)

    fs.readFile(`${tweetsFilePath}tweets.json`, 'utf-8', (err , data) =>{
        if(err){return res.status(500).send("we are sorry, something went wrong")}
        const tweets = JSON.parse(data)
        const myTweets = tweets.filter(tweet => tweet.publisherId == req.userId)
        res.send(myTweets)
    })   
})

// router.get("/myTweets" , (req, res) =>{
    // console.log("TEST")
    // res.send("TEST")

    // fs.readFile(`${tweetsFilePath}tweets.json`, 'utf-8', (err , data) =>{
    //     if(err){return res.status(500).send("we are sorry, something went wrong")}
    //     const tweets = JSON.parse(data)
        // res.send(tweets)
        //^successfully prints tweets array
       
        // const myTweets = tweets.filter(tweet => tweet.publisherId == req.body.id)

        // res.send(myTweets)
    //     })
    // })

router.post("/createTweet", verifyUser , (req, res) =>{

    // res.send("TEST")
    const { tweet } = req.body
    const newTweet = {
        id : uuidv4(),
        publisherId : req.userId,
        tweet : tweet
    }

    fs.readFile(`${tweetsFilePath}tweets.json`, 'utf-8', (err , data) =>{
        if(err){return res.status(500).send("we are sorry, something went wrong")}
        // res.send(data)

        const tweets = JSON.parse(data)
        tweets.push(newTweet)

        // res.send(tweets)

        fs.writeFile(`${tweetsFilePath}tweets.json`, JSON.stringify(tweets), (err) =>{
            if(err){return res.status(500).send("we are sorry, something went wrong")}
            res.send(tweets)
        })
    })
})

router.delete("/deleteTweet" ,verifyUser , (req,res) =>{
    // res.send("CHECK")

    fs.readFile(`${tweetsFilePath}tweets.json`, 'utf-8', (err , data) =>{
        if(err){return res.status(500).send("we are sorry, something went wrong")}
        let tweets = JSON.parse(data)
        const targetTweet = tweets.find(tweet => tweet.id == req.body.id)
        if(req.userId != targetTweet.publisherId){return res.status(400).send("sorry, this isnt your tweet, please choose another tweet")}
        let tweetsListAfterDeletion = tweets.filter(tweet => tweet.id != req.body.id)
        tweets = tweetsListAfterDeletion
        fs.writeFile(`${tweetsFilePath}tweets.json`, JSON.stringify(tweets), (err) => {
            if(err){return res.status(500).send("we are sorry, something went wrong")}
            res.send("tweet deleted successfully")
        })
    })
})







module.exports = router