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
  const { body } = req;

  if (
    !body.question ||
    !body.options ||
    !body.correctOption ||
    !body.points ||
    !body.code
  ) {
    return;
  }

  const newQuestion = {
    question: body.question,
    options: body.options,
    correctOption: body.correctOption,
    points: body.points,
    code: body.code,
  };

  const createdQuestion = questionService.createNewQuestion(newQuestion);
  res.status(201).send({ status: "OK", data: createdQuestion });
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
