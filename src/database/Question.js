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

/**
 * @openapi
 * components:
 *   schemas:
 *     Question:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: c72b3240-2b3e-4540-9791-09dcc9ae1c9f
 *         question:
 *           type: string
 *           example: What's the output?
 *         code:
 *           type: string
 *           example: console.log(typeof typeof 1);
 *         options:
 *           type: array
 *           items:
 *             type: string
 *           example: [{"S": "number"}, {"S": "string"}, {"S": "object"},{"S": "undefined"}, ]
 *         answer:
 *            type: string
 *            example: typeof 1 returns ""number"". typeof ""number"" returns ""string""
 *         points:
 *           type: number
 *           example: 10
 *         correctOption:
 *           type: number
 *           example: 1
 *         createdAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 *         updatedAt:
 *           type: string
 *           example: 4/20/2022, 2:21:56 PM
 */

module.exports = {
  getAllQuestions,
  createNewQuestion,
  getOneQuestion,
  updateOneQuestion,
  deleteOneQuestion,
};
