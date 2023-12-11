const categoriCont = require("../Controllers/categoriCont")
const Route = require("express").Router()
Route.post("/",categoriCont.create)
Route.get("/",categoriCont.list)
Route.put("/:id",categoriCont.update)
Route.delete("/:id",categoriCont.delet)
Route.get("/:id",categoriCont.getCategorieById)
module.exports = Route