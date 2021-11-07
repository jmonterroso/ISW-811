const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");

//Autenticación para el uso del API
const auth = require("../middleware/auth");
const { permit } = require("../middleware/authorization");

//Definición de rutas para cada uno de los verbos para los post
// router.get("/", auth, permit("admin"), postController.get);
// router.get("/", auth, postController.get);
router.get("/", postController.get);

// router.get("/:id", auth , postController.getById);
router.get("/:id", postController.getById);

router.post("/", postController.create);

router.delete("/:id", postController.delete);

router.put("/:id", postController.update);

router.post("/:id/comment", postController.createComment);

router.delete("/:id/comments/:commentId", postController.deleteComment);

module.exports = router;
