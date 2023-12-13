const categoriCont = require("../Controllers/categoriCont")
const Route = require("express").Router()

const upload = require("../middelwars/uploadFile")
Route.post("/",upload.single("image"),categoriCont.create)

Route.get("/",categoriCont.list)
Route.put("/:id",upload.single("image"),categoriCont.update)
Route.delete("/:id",categoriCont.delet)
Route.get("/:id",categoriCont.getCategorieById)
module.exports = Route