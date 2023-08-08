const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  answer: {
    type: String,
    required: [true, "Answer is required"],
  },
  code: {
    type: String,
  },
  correctOption: {
    type: Number,
    min: 0,
    max: 3,
    required: [true, "A correct option is required"],
  },
  createdAt: {
    type: String,
    required: [true, "Create date is required"],
  },
  options: {
    type: [String],
    required: [true, "Options are required"],
  },
  points: {
    type: Number,
    required: [true, "Points are required"],
  },
  updatedAt: {
    type: String,
    required: [true, "Updated date is required"],
  },
});

module.exports =
  mongoose.model.Question || mongoose.model("Question", QuestionSchema);
