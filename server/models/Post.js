const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    comments: [
      {
        type: Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
