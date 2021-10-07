const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "Author",
    },
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
