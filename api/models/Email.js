const mongoose = require("mongoose");

const EmailSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Email", EmailSchema);