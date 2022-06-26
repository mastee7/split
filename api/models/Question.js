const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  question: { type: String, required: true },
  answers: {
    type: [
      {
        text: String,
        nextVideo: String,
      },
    ],
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
