const AuthorModel = require("../models/Author");

module.exports.get = async (req, res, next) => {
  const author = await AuthorModel.find().exec();
  res.json(author);
};

module.exports.getById = async (req, res, next) => {
  const id = req.params.id;
  const author = await AuthorModel.findById(id).exec();
  res.json(author);
};

module.exports.create = (req, res, next) => {
  const { name, info } = req.body;
  const author = new AuthorModel({ name, info });
  author.save();
  res.json(author);
};

module.exports.delete = async (req, res, next) => {
  const author = await AuthorModel.findByIdAndRemove(req.params.id);
  // si post es null significa que no existe el registro
  if (author) {
    res.json({ result: `Post borrado correctamente`, post: author });
  } else {
    res.json({ result: "Id de Post Invalido Invalid", post: author });
  }
};

module.exports.update = async (req, res, next) => {
  const { name, info } = req.body;
  const author = await AuthorModel.findOneAndUpdate(
    { _id: req.params.id },
    { name, info }, // ==> {title: title, body: body}
    { new: true } // retornar el registro que hemos modificado con los nuevos valores
  );
  res.json(author);
};
