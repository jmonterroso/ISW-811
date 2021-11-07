const express = require("express");
const router = express.Router();
const controller = require("../controllers/commentController");

router.get("/", controller.get);

router.get("/:id", controller.getById);

router.post("/", controller.create);

router.delete("/:id", controller.delete);

// actualizar registro
router.put("/:id", controller.update);

module.exports = router;
