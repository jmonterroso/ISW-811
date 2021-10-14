const { Schema, model } = require("mongoose");

const PostSchema = new Schema(
  {
    title: String,
    body: String,
    asientos: [
      {
        type: Schema.Types.ObjectId,
        ref: "Asientos",
      },
    ],
  },
  { timestamps: true }
);

const PostModel = model("Post", PostSchema);

module.exports = PostModel;
