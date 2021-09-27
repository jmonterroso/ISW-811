const express = require("express");
const router = express.Router();
const PostModel = require("../models/Post");

router.get("/", async (req, res, next) => {
  const posts = await PostModel.find().exec();
  res.json(posts);
});

router.post("/", (req, res, next) => {
  const { title, body } = req.body;
  const post = new PostModel({ title: title, body: body });
  post.save();
  res.json(post);
});

module.exports = router;
