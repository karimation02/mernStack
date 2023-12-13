const customerContr = require("../Controllers/customerContr")
const Route = require("express").Router()



const upload = require("../middelwars/uploadFile")
Route.post("/",upload.single("image"),customerContr.create)

Route.put("/:id",upload.single("image"),customerContr.update)

module.exports = Route