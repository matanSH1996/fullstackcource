const router = require("express").Router();
const fs = require("fs")
const uuid = require("uuid")

const productsDataPath = "C:/fullstack/homework/practices/Backend/node demo/Shopping/data/"

router.get("/", (req, res) =>{
    res.send("im from route product")
})
//^check if the new route lead to the "product.route" file

router.get("/all", (req, res) =>{
    fs.readFile(`${productsDataPath}products.json`, "utf-8", (err , data) =>{
        if (err){return res.status(400).send("something happened, please try again")}
        res.send(data)
    })
})

router.get("/priceFilter/:price", (req, res) =>{
    fs.readFile(`${productsDataPath}products.json`, "utf-8", async (err , data) =>{
        if (err){return res.status(400).send("something happened, please try again")}
        // res.send(data)

        const products = await JSON.parse(data)
        const priceFilteredProduct = products.filter(product => product.price <= req.params.price)

        res.send(priceFilteredProduct)
    })
})

router.get("/priceFilterByQuery", (req, res) =>{
    fs.readFile(`${productsDataPath}products.json`, "utf-8", async (err , data) =>{
        if (err){return res.status(400).send("something happened, please try again")}
        // res.send(data)

        const products = await JSON.parse(data)
        // console.log(req.query)

        const higherPricedProducts = products.filter(product => product.price >= req.query.price)
        const lowerPricedProducts = products.filter(product => product.price <= req.query.price)


        if(higherPricedProducts.length < 1){ return res.send(lowerPricedProducts)}

        res.send(higherPricedProducts)
    })
})

router.get("/categoryFilter/:category", (req, res) =>{
    fs.readFile(`${productsDataPath}products.json`, "utf-8", async (err , data) =>{
        if (err){return res.status(400).send("something happened, please try again")}
        // res.send(data)

        const products = await JSON.parse(data)
        const categoryFilteredProduct = products.filter(product => product.category == req.params.category)
        if(categoryFilteredProduct.length == 0){return res.status(400).send("there is no such category")}

        res.status(200).send(categoryFilteredProduct)
    })
})

router.post("/create", (req, res) =>{
    fs.readFile(`${productsDataPath}products.json`, "utf-8", async (err , data) =>{
        if (err){return res.status(400).send("something happened, please try again")}
        // res.send(data)

        const products = await JSON.parse(data)
        const newProduct = {
            "id": uuid.v4(),
            "name" : req.body.name,
            "price" : req.body.price,
            "quantity" : req.body.quantity,
            "category" : req.body.category
        }

        const duplicateCheck = products.find(product => product.name == newProduct.name)
        if(duplicateCheck) return res.status(400).send("this product is already exist")

        products.push(newProduct)

        fs.writeFile(`${productsDataPath}products.json`, JSON.stringify(products), (err) =>{
            if (err){
                res.status(500).send("somthing went wrong") 
            }
        })
        res.send(products)
    })
})

router.put("/updateById/:id" , (req,res) => {
    // res.send("im from route update")

    fs.readFile(`${productsDataPath}products.json` , "utf-8" ,async (err , data) => {
        if (err){return res.sendStatus(400).send("something happened, please try again")}

        // res.send(data)
        const products = await JSON.parse(data)
        const targetedProduct = products.findIndex((product) => product.id == req.params.id)

        if(targetedProduct <0){return res.status(400).send("product doesnt exist")}

        //res.send(products[targetedProduct])
        //^check if the client recieve the specific product as a response

        // console.log(req.body)
        //^check if the client recieve the request from the body as a response

        if(targetedProduct){
            products[targetedProduct].name = req.body.name
            products[targetedProduct].price = req.body.price
            products[targetedProduct].quantity = req.body.quantity
            products[targetedProduct].category = req.body.category
        }
        // console.log(products)
        //^check if the client recieve the changed product information as a response

        fs.writeFile(`${productsDataPath}products.json`, JSON.stringify(products), (err) =>{
            if(err) return res.status(500).send("somthing went wrong")
        })

        res.send(products)
    })
})

router.put("/updateByUuid/:id", (req,res) =>{
    // res.send("im from route updateByUuid")

    fs.readFile(`${productsDataPath}products.json` , "utf-8" ,async (err , data) =>{
        if (err){return res.sendStatus(400).send("something happened, please try again")}

        // res.send(data)

        const products = await JSON.parse(data)
        const targetedProductByUuid = products.find(product => product.id == req.params.id)


        if(!targetedProductByUuid){return res.status(404).send("this product doesnt exist")}

        if(targetedProductByUuid){
            targetedProductByUuid.name = req.body.name
            targetedProductByUuid.price = req.body.price
            targetedProductByUuid.quantity = req.body.quantity
            targetedProductByUuid.category = req.body.category
        }
        // console.log(targetedProductByUuid)

        fs.writeFile(`${productsDataPath}products.json`, JSON.stringify(products), (err) => {
            if(err){return res.status(500).send("somthing went wrong")}
        })
        res.send(products)
    })    
})

router.delete("/delete/:id", (req,res) => {
    // res.send("im from delete")

    fs.readFile(`${productsDataPath}products.json` , "utf-8" ,async (err , data) =>{
        if (err){return res.sendStatus(400).send("something happened, please try again")}
        // console.log(data)
        // console.log(req.params)

        let products = await JSON.parse(data)
        // console.log(products)

        let targetedProduct = products.filter(product => product.id != req.params.id)
        // console.log(targetedProduct)

        if(targetedProduct){
            products = targetedProduct
        }

        fs.writeFile(`${productsDataPath}products.json` , JSON.stringify(products), (err) =>{
            if(err){return res.status(500).send("somthing went wrong")}
        })
        res.send("product has successfully deleted")
    })
})

router.post("/buy/:id", (req,res) => {
    // res.send ("im from buy")
    fs.readFile(`${productsDataPath}products.json`, "utf-8" , async (err , data) =>{
        // console.log(data)
        if(err){return res.status(500).send("somthing went wrong")}
        
        const products = await JSON.parse(data)
        const targetedProduct = products.find(product => product.id == req.params.id)
        const outOfOrder = 0
        // console.log(targetedProduct)
        //^gives the relevant prodct (if it exist in the array)
        
        if(!targetedProduct){return res.status(404).send("no such product exist")}
        if(targetedProduct.quantity < 1 ) {return res.status(500).send("there are no more of this product in the stock")}
        
        const buyAction = targetedProduct.quantity - req.body.quantity
        targetedProduct.quantity = buyAction

        if(buyAction < outOfOrder){return res.status(400).send("there are not enoght of this product")}
        // console.log(buyAction)
        //^check if the calculation method works correctly

        // res.send(targetedProduct)
        //^check if the client recieve the response with the new quantity

        const paymentSum = req.body.quantity * targetedProduct.price
        const clientPayment = req.body.price
        if(!clientPayment) {return res.status(400).send("please pay for the product")}
        if(clientPayment < paymentSum){return res.status(400).send("there is not enought money")}
        
        const paymentChange = clientPayment - paymentSum
        if(paymentChange) {return res.status(200).send(`here is your change - ${paymentChange}`)}

        fs.writeFile(`${productsDataPath}products.json`, JSON.stringify(products), (err) =>{
            if(err){return res.status(500).send("somthing went wrong")}            
        })
        res.send("the purchase has done successfully")
    })
})

module.exports = router

        