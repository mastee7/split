const mongoose = require("mongoose");

const SplitVideoSchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  img: { type: String },
  titleImg: { type: String },
  smallImg: { type: String },
  trailer: { type: String },
  video: { type: String },
  year: { type: String },
  genre: { type: String },
  questionPool: { type: Array },
});

module.exports = mongoose.model("SplitVideo", SplitVideoSchema);
