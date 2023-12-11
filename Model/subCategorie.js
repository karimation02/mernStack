const mongoose = require("mongoose")
const subcategorieSchema = new mongoose.Schema({
name:{
    type:String,
    required:true,
},
description:{
    type:String,
    required:true,
},
category:{//////////////////////////////////////////////
    type:mongoose.Types.ObjectId,///////////////////////////
    ref:"categorie", //////////////////////module.exports = mongoose.model("categorie",categorieSchema ) fichier categorie.js
},
Produit:[{////////////////////////////////////////////
    type:mongoose.Types.ObjectId,//////////////////////////
    ref:"produit",//////////////////module.exports = mongoose.model("produit",produitSchema) fichier Produit.js
}]
})
module.exports = mongoose.model("subCategorie",subcategorieSchema)