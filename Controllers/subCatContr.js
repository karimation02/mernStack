const subCategorie = require("../Model/subCategorie")
module.exports = {
create:async(req,res)=>{
    try {
        const newSubCat = new subCategorie(req.body)
        await newSubCat.save()
        res.status(201).json({
            message:"succé de création",
            data: newSubCat,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur",
            data: error,
        })
    }
},
list:async(req,res)=>{
    try {
        const listSubCat = await subCategorie.find().populate("category").select("-__v")
        //[.populate("category")  pour affiché les détails de catégory]
        //[.select("-__v")   pour que n'affiche pas la version][.select("-__name")   pour que n'affiche pas name]
        res.status(200).json({
            message:"succé d'affichage",
            data: listSubCat,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur" + error,
            data: error
        })
    }
},
getById:async(req,res)=>{
    try {
        const getById = await subCategorie.findById({_id:req.params.id})
        res.status(200).json({
            message:"id affiché",
            data:getById,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur",
            data:error,
        })
    }
},
update:async(req,res)=>{
    try {
        const updateSubCat = await subCategorie.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({
            message:"id modifié",
            data:updateSubCat,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreue",
            data:error,
        })
    }
},
delet:async(req,res)=>{
    try {
        const deleteSubCat = await subCategorie.deleteOne({_id:req.params.id})
        if(deleteSubCat.deletedCount === 0){
            return res.status(404).json({
                messag:"erreur",
                data: null})
        }
        res.status(200).json({
            message:"id supprimé",
            data: deleteSubCat,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur",
            data: error,
        })
    }
}
}