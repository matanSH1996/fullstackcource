const mongoose = require("mongoose")
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("coonect to mongo")
    }
    catch (error){
        console.log("TEST")
        }
}

module.exports = connectDB