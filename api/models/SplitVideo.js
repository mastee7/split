const mongoose = require("mongoose");

const SplitVideoSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String },
  img: { type: String },
  titleImg: { type: String },
  smallImg: { type: String },
  trailer: { type: String },
  video: { type: String },
  year: { type: String },
  genre: { type: String },
  videoNodes: [
    {
      videoUrl: { type: String, required: true },
      question: { type: String, required: true },
      answer: [
        {
          text: { type: String, required: true },
          nextNode: { type: String, required: true },
        },
      ],
    },
  ],
});

module.exports = mongoose.model("SplitVideo", SplitVideoSchema);
