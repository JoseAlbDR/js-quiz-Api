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
    createdAt: new Date().toLocaleString("es-ES"),
    updatedAt: new Date().toLocaleString("es-ES"),
  };
  const createdQuestion = Question.createNewQuestion(questionToInsert);
  return createdQuestion;
};

const updateOneQuestion = (questionId, changes) => {
  const updatedQuestion = Question.updateOneQuestion(questionId, changes);
  return updatedQuestion;
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
