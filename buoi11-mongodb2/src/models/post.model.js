const mongoose = require("mongoose");

const { Schema } = mongoose;

const postSchema = new Schema({
  author: String,
  body: String,
  reaction: {
    like: Number,
    smile: Number,
    love: Number,
    angry: Number,
    surprise: Number,
  },
  comments: [
    {
      author: String,
      body: String,
    },
  ],
});

module.exports = mongoose.model("Post", postSchema);
