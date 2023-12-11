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

//upload image
app.get("/:img",(req,res)=>{
    res.sendFile(__dirname+ "/my-uploads/"+req.params.img)}
)
//upload image

app.listen(5001,()=>{
    console.log("succé de création serveur http://localhost:5001")
})