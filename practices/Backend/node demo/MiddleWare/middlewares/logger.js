const logsFileDataPath = "C:/fullstack/homework/practices/Backend/node demo/MiddleWare/"
const fs = require("fs")

function logDocumentation(req, res, next){
    fs.readFile(`${logsFileDataPath}logs.txt`, "utf-8" , (err, data)=> {
        // console.log(data)
        let date = new Date()
        let url = "http://localhost:5000" + req.originalUrl
        let str = `URL: ${url}, log time: ${date}`
        let newData = data + str + '\n'
        fs.writeFile(`${logsFileDataPath}logs.txt`,newData, (err)=>{
            if(err){res.send("something went wrong")}   
            next()
        })
    })
}

module.exports = logDocumentation