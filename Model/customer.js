const mongoose = require("mongoose")
const user = require("./user")


const customerSchema = new mongoose.Schema({
    CIN:{
        type:String,
        required:true,
    },
    adresse:{
        type:String,
        required:true,
    },
    image:{
        type:String,
    },
})
user.discriminator("customer",customerSchema)
module.exports = mongoose.model("customer")