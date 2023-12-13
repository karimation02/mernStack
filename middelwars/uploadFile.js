const multer = require("multer");


// pour stocker les images dans mu-uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./my-uploads");
  },
  // pour stocker les images dans mu-uploads

  filename: function (req, file, cb) { //pour enregistré l'image avec le même nom
    cb(null, file.originalname)        //pour enregistré l'image avec le même nom
  },



//pour tester le format d'image: accepte seulement les images de type jpeg/jpg/png   sino afiiche erreur
});
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb("error");
    }
  },
});
//pour tester le format d'image: accepte seulement les images de type jpeg/jpg/png   sino afiiche erreur
module.exports = upload;