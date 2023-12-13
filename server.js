const express = require("express")
const app = express()
const connectTODB = require("./db")
connectTODB()

app.use(express.json())

const categorieRouter = require("./Route/categorieRoute")
app.use("/categorie", categorieRouter)

const subcategorieRouter = require("./Route/subCategorieRoute")
app.use("/subCategorie",subcategorieRouter)

const produitRouter = require("./Route/produitRouter")
app.use("/produit",produitRouter)

const adminRoute = require("./Route/adminRoute")
app.use("/admin",adminRoute)

const providerRoute = require("./Route/providerRoute")
app.use("/provider",providerRoute)

const customerRoute = require("./Route/customerRoute")
app.use("/customer",customerRoute)


//upload image
app.get("/:img",(req,res)=>{
    res.sendFile(__dirname+ "/my-uploads/"+req.params.img)}//pour affiché les images qui se trouvent dans my-uploads
)
//upload image


app.listen(5001,()=>{
    console.log("succé de création serveur http://localhost:5001")
})