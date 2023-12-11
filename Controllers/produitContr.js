const Produit = require("../Model/Produit")
module.exports = {
    create:async(req,res)=>{
        try {

            req.body["gallery"]=req.files.length <= 0
            ?[]
            :req.files?.map((file)=>{
                return {name:file.filename}
            })


            const newProduit = new Produit (req.body)
            await newProduit.save()
            res.status(201).json({
                message:"succé de création",
                data:newProduit,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    },
    list:async(req,res)=>{
        try {
            const listProduit = await Produit.find()
            res.status(200).json({
                message:"succé d'affichage",
                data: listProduit,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data: error
            })
        }
    },
    listeById:async(req,res)=>{
        try {
            const listById = await  Produit.findById({_id:req.params.id})
            res.status(200).json({
                message:"id affiché",
                data:listById,
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
            const updateProduit = await Produit.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            res.status(200).json({
                message:"id modifié",
                data:updateProduit,
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
            const deleteProduit = await Produit.deleteOne({_id:req.params.id})
            if(deleteProduit.deletedCount === 0){
                return res.status(404).json({
                    messag:"erreur",
                    data: null})
            }
            res.status(200).json({
                message:"id supprimé",
                data: deleteProduit,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur",
                data: error,
            })
        }
    }
}