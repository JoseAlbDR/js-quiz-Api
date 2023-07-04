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
  try {
    const createdQuestion = Question.createNewQuestion(questionToInsert);
    return createdQuestion;
  } catch (error) {
    throw error;
  }
};

const updateOneQuestion = (questionId, changes) => {
  const updatedQuestion = Question.updateOneQuestion(questionId, changes);
  return updatedQuestion;
};

const deleteOneQuestion = (questionId) => {
  Question.deleteOneQuestion(questionId);
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
