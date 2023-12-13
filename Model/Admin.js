const mongoose = require ("mongoose")
//importation user
const user = require("./user")
//importation user
const adminSchema = new mongoose.Schema({

})
user.discriminator("admin",adminSchema)//appels des attributs qui se trouvent dans user + atributs qui se trouvent dans admin
module.exports = mongoose.model("admin")//exportation