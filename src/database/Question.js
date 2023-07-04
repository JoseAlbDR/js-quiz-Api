const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllQuestions = () => {
  return DB.questions;
};

const createNewQuestion = (newQuestion) => {
  const isAlreadyAdded =
    DB.questions.findIndex(
      (question) => question.question === newQuestion.question
    ) > -1;

  if (isAlreadyAdded) {
    return;
  }

  DB.questions.push(newQuestion);
  saveToDatabase(DB);
  return newQuestion;
};
module.exports = { getAllQuestions, createNewQuestion };
