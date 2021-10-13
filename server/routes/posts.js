const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");

//Definición de rutas para cada uno de los verbos para los post
router.get("/", auth , postController.get);

router.get("/:id", auth , postController.getById);

router.post("/", postController.create);

router.delete("/:id", postController.delete);

router.put("/:id", postController.update);

module.exports = router;
