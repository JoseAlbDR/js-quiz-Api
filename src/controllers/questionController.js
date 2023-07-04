const questionService = require("../services/questionService");

const getAllQuestions = (req, res) => {
  const allQuestions = questionService.getAllQuestions();
  res.send({ status: "OK", data: allQuestions });
};

const getOneQuestion = (req, res) => {
  const {
    params: { questionId },
  } = req;

  if (!questionId) {
    return;
  }

  const question = questionService.getOneQuestion(questionId);
  res.send({ status: "OK", data: question });
};

const createNewQuestion = (req, res) => {
  const { body } = req;

  if (
    (!body.question ||
      !body.options ||
      body.correctOption < 0 ||
      body.correctOption > 3,
    !body.points || !body.answer)
  ) {
    return;
  }

  const newQuestion = {
    question: body.question,
    options: body.options,
    correctOption: body.correctOption,
    points: body.points,
    code: body.code,
    answer: body.answer,
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
