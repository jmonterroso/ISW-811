const { Schema, model } = require("mongoose");

const AuthorSchema = new Schema(
  {
    name: String,
    info: String,
  },
  { timestamps: true }
);

const AuthorModel = model("Author", AuthorSchema);

module.exports = AuthorModel;
