const questionService = require("../services/questionService");

const getAllQuestions = async (req, res) => {
  try {
    const allQuestions = await questionService.getAllQuestions();

    res.send({ status: "OK", data: allQuestions });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneQuestion = async (req, res) => {
  const {
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':questionId' can not be empty" },
    });
  }

  try {
    const question = await questionService.getOneQuestion(questionId);
    res.send({ status: "OK", data: question });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewQuestion = async (req, res) => {
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
    const createdQuestion = await questionService.createNewQuestion(
      newQuestion
    );
    res.status(201).send({ status: "OK", data: createdQuestion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateOneQuestion = async (req, res) => {
  const {
    body,
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':questionId' can not be empty" },
    });
  }

  try {
    const updatedQuestion = await questionService.updateOneQuestion(
      questionId,
      body
    );
    res.send({ status: "OK", data: updatedQuestion });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteOneQuestion = async (req, res) => {
  const {
    params: { questionId },
  } = req;

  if (!questionId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':questionId' can not be empty" },
    });
  }

  try {
    await questionService.deleteOneQuestion(questionId);
    res.status(204).send();
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
