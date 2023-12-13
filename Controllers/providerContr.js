const provider = require("../Model/Provider")
module.exports = {
    create:async(req,res)=>{
        try {
            const newProvider = new provider(req.body)
            await newProvider.save()
            res.status(201).json({
                message:"succé de création",
                data:newProvider,
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
            const listProvider = await provider.find()
            res.status(200).json({
                message:"succée d'affichage",
                data:listProvider,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    },
    delete:async(req,res)=>{
        try {
            const deleteProvider = await provider.deleteOne({_id:req.params.id})
            if(deleteProvider.deletedCount === 0)
            return res.status(404).json({
            message:"erreur",
            data:null,
            })
            res.status(200).json({
                message:"id supprimé",
                data:deleteProvider,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    },
    update:async(req,res)=>{
        try {
            const updateProvider = await provider.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            res.status(200).json({
                message:"id modifié",
                data:updateProvider,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    },
    getProviderById:async(req,res)=>{
        try {
            const getProById = await provider.findById({_id:req.params.id})
            res.status(200).json({
                message:"id affiché",
                data:getProById,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    }
}