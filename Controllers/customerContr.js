const customer = require("../Model/customer")
module.exports = {
    create:async(req,res)=>{
        try {

            req.body["image"] = req.file.filename // {req.body["image"] : s'ilya un image} {req.file.filename : return nom d'image}


            const newCustomer = new customer(req.body)
            await newCustomer.save()
            res.status(201).json({
                message:"succée de création",
                data:newCustomer,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error
            })
        }
    },
    update: async(req,res)=>{
        try {
            req.body["image"] = req.file?.filename

            const updateCustomer = await customer.findByIdAndUpdate({_id:req.params.id},req.body,{new:true})
            res.status(200).json({
                message:"id modifié",
                data:updateCustomer,
            })
        } catch (error) {
            res.status(400).json({
                message:"erreur" + error,
                data:error,
            })
        }
    }
}