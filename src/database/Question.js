const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllQuestions = () => {
  return DB;
};

const createNewQuestion = (newQuestion) => {
  const isAlreadyAdded =
    DB.questions.findIndex(
      (question) => question.answer === newQuestion.answer
    ) > -1;

  if (isAlreadyAdded) {
    throw {
      status: 400,
      message: `Question with id:${newQuestion.id} already exsist in the database`,
    };
  }

  try {
    DB.questions.push(newQuestion);
    saveToDatabase(DB);
    return newQuestion;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
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

const deleteOneQuestion = (questionId) => {
  const indexForDelete = DB.questions.findIndex(
    (question) => question.id === questionId
  );

  if (indexForDelete === -1) return;

  DB.questions.splice(indexForDelete, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllQuestions,
  createNewQuestion,
  getOneQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
