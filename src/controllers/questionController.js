const questionService = require("../services/questionService");

const getAllQuestions = (req, res) => {
  const allQuestions = questionService.getAllQuestions();
  res.send({ status: "OK", data: allQuestions });
};

const getOneQuestion = (req, res) => {
  const question = questionService.getOneQuestion();
  res.send("Get one Question");
};

const createNewQuestion = (req, res) => {
  const createdQuestion = questionService.createNewQuestion();
  res.send("Create Question");
};

const updateOneQuestion = (req, res) => {
  const updatedQuestion = questionService.updateOneQuestion();
  res.send("Update Question");
};

const deleteOneQuestion = (req, res) => {
  const deletedQuestion = questionService.deleteOneQuestion();
  res.send("Delete Question");
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
