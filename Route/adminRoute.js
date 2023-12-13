const adminContr = require("../Controllers/adminContr")
const Route = require("express").Router()

Route.post("/",adminContr.create)
Route.get("/",adminContr.list)
Route.delete("/:id",adminContr.delete)
Route.put("/:id",adminContr.update)
Route.get("/:id",adminContr.getadminById)

module.exports = Route