const providerContr = require("../Controllers/providerContr")
const Route = require("express").Router()

Route.post("/",providerContr.create)
Route.get("/",providerContr.list)
Route.delete("/:id",providerContr.delete)
Route.put("/:id",providerContr.update)
Route.get("/:id",providerContr.getProviderById) 

module.exports = Route