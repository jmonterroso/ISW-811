const PostModel = require("../models/Post");
const CommentModel = require("../models/Comment");

const mongoose = require("mongoose");

module.exports.get = async (req, res, next) => {
  const posts = await PostModel.find().exec();
  res.json(posts);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const post = await PostModel.findOne({ _id: id }).populate("comments").exec();
  res.json(post);
};

module.exports.create = (req, res, next) => {
  const { title, body, author } = req.body;
  const post = new PostModel({ title: title, body: body, author: author });
  post.save();
  res.json(post);
};

module.exports.delete = async (req, res, next) => {
  const post = await PostModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (post) {
    res.json({ result: `Post borrado correctamente`, post });
  } else {
    res.json({ result: "Id de Post Invalido Invalid", post });
  }
};

module.exports.update = async (req, res, next) => {
  const { title, body } = req.body;
  const post = await PostModel.findOneAndUpdate(
    { _id: req.params.id },
    { title, body }, // ==> {title: title, body: body}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(post);
};

module.exports.createComment = async (req, res, next) => {
  const isValidId = mongoose.isValidObjectId(req.params.id);
  if (isValidId) {
    const comment = new CommentModel({ ...req.body });
    comment.save();

    const updated = await PostModel.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { comments: mongoose.Types.ObjectId(comment._id) } },
      { new: true }
    )
      .populate("comments")
      .exec();

    res.json(updated);
  } else {
    res.json({ error: "Invalid Id" });
  }
};

module.exports.deleteComment = async (req, res, next) => {
  const isValidId = mongoose.isValidObjectId(req.params.id);
  const { id, commentId } = req.params;
  if (isValidId) {
    const updated = await PostModel.findOneAndUpdate(
      { _id: id },
      { $pull: { comments: mongoose.Types.ObjectId(commentId) } },
      { new: true }
    )
      .populate("comments")
      .exec();
    await CommentModel.deleteOne({ _id: commentId }).exec();
    res.json(updated);
  } else {
    res.json({ error: "Invalid ObjectId" });
  }
};

