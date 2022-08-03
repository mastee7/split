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
});

module.exports = mongoose.model("SplitVideo", SplitVideoSchema);
