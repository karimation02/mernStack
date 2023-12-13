const adminmodel = require("../Model/Admin")
module.exports = {
    create: async(req,res) =>{
        try {
            const adminSchema  = new adminmodel (req.body)
            await adminSchema.save()
            res.status(201).json({
                message:"création reussit",
                data:adminSchema,
            })
            }
         catch (error) {
      res.status(400).json({
        message:"erreur" + error,
        data:error,
      })
      
    }
   },
   list: async(req,res)=>{
    try {
        const listadmine = await adminmodel.find()
        res.status(200).json({
            message:"succée d'affichage",
            data:listadmine,
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
        const deleteadmin = await adminmodel.deleteOne({_id:req.params.id})
        if(deleteadmin.deletedCount === 0)
        return res.status(404).json({
           message:"erreur",
           data:null,
        })
        res.status(200).json({
            message:"id supprimé",
            data:deleteadmin,
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
        const updateadmin = await adminmodel.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
        res.status(200).json({
            message:"succé de modification",
            data:updateadmin,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur" + error,
            data:error,
        })
    }
   },
   getadminById:async(req,res)=>{
    try {
        const getadById = await adminmodel.findById({_id:req.params.id})
        res.status(200).json({
            message:"id affiché",
            data:getadById,
        })
    } catch (error) {
        res.status(400).json({
            message:"erreur" + error,
            data:error,
        })
    }
   }
}