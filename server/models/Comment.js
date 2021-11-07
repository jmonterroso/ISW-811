const { Schema, model } = require("mongoose");
const CommentSchema = new Schema(
  {
    name: String,
    content: String,
  },
  { timestamps: true }
);

const CommentModel = model("Comment", CommentSchema);

module.exports = CommentModel;
// CRUD
// Create
// Read
// Update
// Delete
