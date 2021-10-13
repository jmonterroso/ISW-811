const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const userController = require("../controllers/userController");

router.post("/", userController.signup);

router.get("/", userController.signin);

module.exports = router;
