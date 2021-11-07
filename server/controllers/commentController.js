const CommentModel = require("../models/Comment");

module.exports.get = async (req, res, next) => {
  const item = await CommentModel.find().exec();
  res.json(item);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const item = await CommentModel.findById(id).exec();
  res.json(item);
};

module.exports.create = (req, res, next) => {
  const { name, content } = req.body;
  const item = new CommentModel({ name, content });
  item.save();
  res.json(item);
};

module.exports.delete = async (req, res, next) => {
  const item = await CommentModel.findOne({ _id: req.params.id });
  // si post es null significa que no existe el registro
  if (item) {
    await item.deleteOne();
    res.json({ result: `Post borrado correctamente`, post: item });
  } else {
    res.json({ result: "Id de Post Invalido Invalid", post: item });
  }
};

module.exports.update = async (req, res, next) => {
  const { name, content } = req.body;
  const item = await CommentModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, content }, // ==> {title: title, body: body}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(item);
};
