const questionService = require("../services/questionService");

const getAllQuestions = (req, res) => {
  try {
    const allQuestions = questionService.getAllQuestions();
    res.send({ status: "OK", data: allQuestions });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneQuestion = (req, res) => {
  const {
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const question = questionService.getOneQuestion(questionId);
    res.send({ status: "OK", data: question });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewQuestion = (req, res) => {
  const { body } = req;

  if (
    +body.correctOption < 0 ||
    +body.correctOption > 3 ||
    !body.question ||
    !body.options ||
    !body.points ||
    !body.answer
  ) {
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One or more fields are missing or empty: 'question', 'options', 'points', 'answer'. correctOption cant be greater than 3 or lesser than 0",
      },
    });
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

  try {
    const createdQuestion = questionService.createNewQuestion(newQuestion);
    res.status(201).send({ status: "OK", data: createdQuestion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneQuestion = (req, res) => {
  const {
    body,
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const updatedQuestion = questionService.updateOneQuestion(questionId, body);
    res.send({ status: "OK", data: updatedQuestion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }

  res.send({ status: "OK", data: updatedQuestion });
};

const deleteOneQuestion = (req, res) => {
  const {
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    questionService.deleteOneQuestion(questionId);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
