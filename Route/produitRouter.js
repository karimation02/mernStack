const produit = require("../Controllers/produitContr")
const route = require("express").Router()
const upload = require("../middelwars/uploadFile")
route.post("/",upload.array("gallery"),produit.create)
route.get("/",produit.list)
route.get("/:id",produit.listeById)
route.put("/:id",produit.update)
route.delete("/:id",produit.delet)
module.exports = route
