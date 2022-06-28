const mongoose = require("mongoose")

const connectMongo = async () => {
    try{    
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to mongoDB")
    } catch (error){
        console.log(error)
    }
}

module.exports = connectMongo