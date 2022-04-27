const router = require("express").Router()
const fs = require("fs")
const usersDataPth = "C:/fullstack/homework/practices/Backend/node demo/Shopping/data/" 
const productsDataPath = "C:/fullstack/homework/practices/Backend/node demo/Shopping/data/"
function handleFileError (err , res) {
    if(err){
        return res.status(500).send("some problem has occured")
    }
}

router.post("/newSupply", (req , res) =>{
    // res.send("im from admin route")

    fs.readFile(`${productsDataPath}products.json`, "utf-8",async (err, data) =>{
        handleFileError(err, res)
        // res.send(data)

        const products = await JSON.parse(data)
        // console.log(products)

        const targetIndex = products.findIndex(product => product.id == req.body.id)
        // console.log(products[targetIndex])

        if(!targetIndex){return res.status(400).send("no such product exist")}
        if(!req.body.quantity){return res.status(400).send("insert quantity!")}
        if(targetIndex){
            products[targetIndex].quantity = products[targetIndex].quantity + req.body.quantity
        }

        // console.log(products[targetIndex]) 
        fs.writeFile(`${productsDataPath}products.json`, JSON.stringify(products), (err) =>{
            handleFileError(err, res)
        })
        res.send("products quantity updated successfully")
    })
})

router.get("/countSupply", (req , res) =>{
    // res.send("im from countSupply route")

    fs.readFile(`${productsDataPath}products.json`, "utf-8", async (err, data) =>{
        handleFileError(err, res)
        // res.send(data)

        const products = await JSON.parse(data)
        // res.send(products)

        // products.forEach(product => console.log(({name : product.name, quantity:product.quantity})))
        //^successfully print to the console the products name and qauntity

        // products.forEach(product => console.log(({name : product.name, quantity:product.quantity})))
        // console.log(products.length)
        //^successfully print to the console the products length

        // const productsName = products.forEach(product => {
        //     res.send({name : product.name, quantity: product.quantity})
        // });
        //^return only 1 object with its qauntity and name

        // const productsName = products.map(product => product.name)
        //^ return name non ordering

        // const productsQuantity = products.map(product => product.quantity)
        //^ return quantity non ordering
            
        for(let i=0; i<products.length ; i++){
            console.log("name: " + products[i].name, " ,qauntity: " + products[i].quantity )
        }


        //^successfully prints the name and qauntity to the console
        res.send(`TEST`)
    })
})

router.delete("/deleteUser", (req,res) =>{
    // res.send("im from delete user")

    fs.readFile(`${usersDataPth}users.json`, "utf-8", async (err,data)=>{
        handleFileError(err, res)
        // res.send(data)

        let usersList = await JSON.parse(data)
        let listAfterDeletion = usersList.filter(user => user.id != req.body.id)

        if(listAfterDeletion){
            usersList = listAfterDeletion
        }

        fs.writeFile(`${usersDataPth}users.json`, JSON.stringify(usersList), (err)=>{
            handleFileError(err, res)
        })
        res.send("user has successfully deleted")
    })
})

module.exports = router