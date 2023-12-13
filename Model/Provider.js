const mongoose = require ("mongoose")
//imprtation user
const user = require("./user")
//importation user
const providerSchema = new mongoose.Schema({
    matricule:{
        type:Number,
        required:true,
        
    }
})
user.discriminator("provider",providerSchema)
module.exports = mongoose.model("provider")
//les deux "provider" sont les même