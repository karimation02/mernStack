const mongoose = require("mongoose")
const gallerySchema = new mongoose.Schema({///////////////////////////////////////////
    name:{type:String}////////////////////////////////////////////
    })
const produitSchema = new mongoose.Schema({ 
    name:{
        type:String,
        required:true,
    },
    ref:{
        type:String,
        required:true,
    },
    price:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Qte:{
        type:Number,
        required:true,
    },
    gallery:[gallerySchema],/////////////////////////////////////////
    SubCategorie:{///////////////////////////////////////////
        type:mongoose.Types.ObjectId,//////////////////////////////
        ref:"subCategorie",/////////////////////module.exports = mongoose.model("subCategorie",subcategorieSchema)fichier subCategorie.js
    },
}) 
module.exports = mongoose.model("produit",produitSchema)