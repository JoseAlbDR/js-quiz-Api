const DB = require("./db.json");
const { saveToDatabase } = require("./utils");
const getAllQuestions = () => {
  try {
    return DB;
  } catch (error) {
    throw { status: 500, message: error };
  }
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
    throw { status: error?.status, message: error?.message || error };
  }
};

const getOneQuestion = (questionId) => {
  try {
    const question = DB.questions.find(
      (question) => question.id === questionId
    );

    if (!question) {
      throw {
        status: 400,
        message: `Can't find question with the id '${questionId}'`,
      };
    }

    return question;
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const updateOneQuestion = (questionId, changes) => {
  try {
    const indexForUpdate = DB.questions.findIndex(
      (question) => question.id === questionId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find question with the id '${questionId}'`,
      };
    }
    const updatedQuestion = {
      ...DB.questions[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("es-ES"),
    };

    DB.questions[indexForUpdate] = updatedQuestion;
    saveToDatabase(DB);

    return updatedQuestion;
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const deleteOneQuestion = (questionId) => {
  try {
    const indexForDelete = DB.questions.findIndex(
      (question) => question.id === questionId
    );

    if (indexForDelete === -1) {
      throw {
        status: 400,
        message: `Can't find question with the id '${questionId}'`,
      };
    }

    DB.questions.splice(indexForDelete, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

module.exports = {
  getAllQuestions,
  createNewQuestion,
  getOneQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
