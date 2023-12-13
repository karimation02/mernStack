const produit = require("../Controllers/produitContr")
const route = require("express").Router()



const upload = require("../middelwars/uploadFile") //appel au fichier qui contien la fonction

route.post("/",upload.array("gallery"),produit.create)
//array si on a plus d'un image
//signle si on a un seul image


route.get("/",produit.list)
route.get("/:id",produit.listeById)
route.put("/:id",produit.update)
route.delete("/:id",produit.delet)
module.exports = route
