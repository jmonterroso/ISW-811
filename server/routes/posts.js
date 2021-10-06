const express = require("express");
const router = express.Router();
const PostModel = require("../models/Post");
const postController = require("../controllers/postController");

router.get("/", postController.get);

router.post("/", postController.create);

router.delete("/:id", postController.delete);

// actualizar registro
router.put("/:id", postController.update);

module.exports = router;
