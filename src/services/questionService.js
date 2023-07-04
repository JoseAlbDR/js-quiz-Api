const Question = require("../database/Question");
const { v4: uuid } = require("uuid");

const getAllQuestions = () => {
  const allQuestions = Question.getAllQuestions();
  return allQuestions;
};

const getOneQuestion = (questionId) => {
  const oneQuestion = Question.getOneQuestion(questionId);
  return oneQuestion;
};

const createNewQuestion = (newQuestion) => {
  const questionToInsert = {
    ...newQuestion,
    id: uuid(),
    __typename: "Question",
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdQuestion = Question.createNewQuestion(questionToInsert);
  return createdQuestion;
};

const updateOneQuestion = () => {
  return;
};

const deleteOneQuestion = () => {
  return;
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
