const categorie = require("../Model/categorie")
module.exports = {
    create: async(req,res)=>{
        try {
            const newCategorie = new categorie(req.body)
            await newCategorie.save()
            res.status(201).json({
                message:"création reusite",
                data: newCategorie,
            })    
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data: error
            })
        }
    },
    list: async(req,res)=>{
        try {
            const listCategorie = await categorie.find()
            res.status(200).json({
                message:"succé d'affichage",
                data:listCategorie,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur",
                data: error
            })
        }
    },
    update:async(req,res)=>{
        try {
            const updateCategorie = await categorie.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            res.status(200).json({
                message:"id modifié",
                data:updateCategorie,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur",
                data: error,
            })
        }
    },
    delet:async(req,res)=>{
        try {
            const deletcategorie = await categorie.deleteOne({_id:req.params.id})
            if(deletcategorie.deletedCount === 0)
            return res.status(404).json({
            message:"erreur",
            data: null,})
            res.status(200).json({
                message:"id supprimé",
                data:deletcategorie,
            })
        } catch (error) {
            res.status(400).json({
                message:"ereur" + error,
                data: error,
            })
        }
    },
    getCategorieById:async(req,res)=>{
        try {
            const getCatById = await categorie.findById({_id:req.params.id})
            res.status(200).json({
                message:"succé d'affichage",
                data: getCatById,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur",
                data: error,
            })
        }
    }
}