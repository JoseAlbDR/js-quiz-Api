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

/**
 * @openapi
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: c72b3240-2b3e-4540-9791-09dcc9ae1c9f
 *         question:
 *           type: string
 *           example: What's the output?
 *         code:
 *           type: string
 *           example: console.log(typeof typeof 1);
 *         options:
 *           type: array
 *           items:
 *             type: string
 *           example: [{"S": "number"}, {"S": "string"}, {"S": "object"},{"S": "undefined"}, ]
 *         answer:
 *            type: string
 *            example: typeof 1 returns ""number"". typeof ""number"" returns ""string""
 *         points:
 *           type: number
 *           example: 10
 *         correctOption:
 *           type: number
 *           example: 1
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

module.exports =
  mongoose.model.Question || mongoose.model("Question", QuestionSchema);
