const mongoose = require("mongoose")
const db="mongodb://localhost:27017/e-commerce"
const connectTODB = async()=>{
    try {
        await mongoose.connect(db)
        console.log("connection a mongodb reussit")
    } catch (error) {
        console.log("connection a mongodb échoué" + error)
    }
}
module.exports = connectTODB