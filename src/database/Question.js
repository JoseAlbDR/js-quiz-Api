const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllQuestions = () => {
  return DB;
};

const createNewQuestion = (newQuestion) => {
  const isAlreadyAdded = DB.questions.findIndex(
    (question) => question.answer === newQuestion.answer > -1
  );

  if (isAlreadyAdded) {
    return;
  }

  DB.questions.push(newQuestion);
  saveToDatabase(DB);
  return newQuestion;
};

const getOneQuestion = (questionId) => {
  const question = DB.questions.find((question) => question.id === questionId);
  console.log(question);
  if (!question) return;
  return question;
};
module.exports = { getAllQuestions, createNewQuestion, getOneQuestion };
