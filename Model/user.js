const mongoose = require("mongoose")
//micanisme d'héritage(discriminator)
const baseOptions = {discriminatoryKey: "itemtypes" }
//micanisme d'héritage(discriminator)
const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true//pour que la base de donné n'accepte pas email repeté deux fois
    },
    phone:{
        type:Number,
        required:true,
    }
},
baseOptions //appel de la constante options
)
module.exports = mongoose.model("user",userSchema)