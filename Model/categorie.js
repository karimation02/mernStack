const mongoose = require("mongoose")
const categorieSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    subcategories:[{//////////////////////////////////////////////////////
        type:mongoose.Types.ObjectId,//////////////////////////////
        ref:"subCategorie",///////////////////////module.exports = mongoose.model("subCategorie",subcategorieSchema)fichier subCategorie.js
    }]
})
module.exports = mongoose.model("categorie",categorieSchema )