const subCategorie = require("../Controllers/subCatContr")
const Route = require("express").Router()

Route.post("/",subCategorie.create)
Route.get("/",subCategorie.list)
Route.get("/:id",subCategorie.getById)
Route.put("/:id",subCategorie.update)
Route.delete("/:id",subCategorie.delet)
module.exports = Route