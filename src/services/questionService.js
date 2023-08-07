const Questions = require("../database/questionModel");
const { v4: uuid } = require("uuid");

const getAllQuestions = async () => {
  try {
    const allQuestions = await Questions.find({});
    return allQuestions;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneQuestion = async (questionId) => {
  try {
    const question = await Questions.findOne({ _id: questionId });
    console.log(question);
    if (!question) {
      throw {
        status: 400,
        message: `Can't find question with the id '${questionId}'`,
      };
    }

    return question;
  } catch (error) {
    throw { status: error?.status || 400, message: error?.message || error };
  }
};

const createNewQuestion = async (newQuestion) => {
  const questionToInsert = {
    ...newQuestion,
    createdAt: new Date().toLocaleString("es-ES"),
    updatedAt: new Date().toLocaleString("es-ES"),
  };

  try {
    const isAlreadyAdded = Questions.findOne({
      answer: questionToInsert.answer,
    });

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Question already exsist in the database`,
      };
    }

    const createdQuestion = await Questions.create({ ...questionToInsert });
    return createdQuestion;
  } catch (error) {
    throw error;
  }
};

const updateOneQuestion = (questionId, changes) => {
  try {
    const indexForUpdate = Questions.findIndex(
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
