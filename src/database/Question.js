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

const updateOneQuestion = (questionId, changes) => {
  const indexForUpdate = DB.questions.findIndex(
    (question) => question.id === questionId
  );

  if (indexForUpdate === -1) return;

  const updatedQuestion = {
    ...DB.questions[indexForUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("es-ES"),
  };

  DB.questions[indexForUpdate] = updatedQuestion;
  saveToDatabase(DB);

  return updatedQuestion;
};
module.exports = {
  getAllQuestions,
  createNewQuestion,
  getOneQuestion,
  updateOneQuestion,
};
