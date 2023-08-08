const getAllQuestions = require("./get-questions");
const getOneQuestion = require("./get-question");
const createNewQuestion = require("./create-question");
const updateOneQuestion = require("./update-question");
const deleteOneQuestion = require("./delete-question");

module.exports = {
  paths: {
    "/v1/questions": {
      ...getAllQuestions,
      ...createNewQuestion,
    },
    "/v1/questions/{questionId}": {
      ...getOneQuestion,
      ...updateOneQuestion,
      ...deleteOneQuestion,
    },
  },
};
