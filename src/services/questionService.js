const Question = require("../database/Question");
const { v4: uuid } = require("uuid");

const getAllQuestions = () => {
  const allQuestions = Question.getAllQuestions();
  return allQuestions;
};

const getOneQuestion = (questionId) => {
  try {
    const oneQuestion = Question.getOneQuestion(questionId);
    return oneQuestion;
  } catch (error) {
    throw error;
  }
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
  try {
    const updatedQuestion = Question.updateOneQuestion(questionId, changes);
    return updatedQuestion;
  } catch (error) {
    throw error;
  }
};

const deleteOneQuestion = (questionId) => {
  try {
    Question.deleteOneQuestion(questionId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
