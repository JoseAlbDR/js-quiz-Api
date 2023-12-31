const Questions = require("../database/questionModel");
const { v4: uuid } = require("uuid");

const getAllQuestions = async () => {
  try {
    const allQuestions = await Questions.find({});
    return allQuestions;
  } catch (error) {
    throw {
      status: 500,
      message: "Could not connect to Database, try again later",
    };
  }
};

const getOneQuestion = async (questionId) => {
  try {
    const question = await Questions.findOne({ _id: questionId });

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
    const isAlreadyAdded = await Questions.findOne({
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

const updateOneQuestion = async (questionId, changes) => {
  try {
    const update = {
      ...changes,
      updatedAt: new Date().toLocaleString("es-ES"),
    };

    let updatedQuestion = await Questions.findByIdAndUpdate(questionId, update);

    updatedQuestion = Questions.findById(questionId);

    return updatedQuestion;
  } catch (error) {
    throw { status: error?.status, message: error?.message || error };
  }
};

const deleteOneQuestion = async (questionId) => {
  try {
    await Questions.findByIdAndDelete(questionId);
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
