const Question = require("../database/Question");
const { v4: uuid } = require("uuid");

const getAllQuestions = () => {
  const allQuestions = Question.getAllQuestions();
  return allQuestions;
};

const getOneQuestion = () => {
  return;
};

const createNewQuestion = (newWorkout) => {
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    __typename: "Question",
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  const createdQuestion = Question.createNewQuestion(workoutToInsert);
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
