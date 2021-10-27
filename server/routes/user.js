const express = require("express");
const router = express.Router();
const UserModel = require("../models/User");
const userController = require("../controllers/userController");

router.post("/signup", userController.signup);

router.post("/signin", userController.signin);

module.exports = router;
