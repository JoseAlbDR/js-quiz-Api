const getQuestions = require("./get-questions");
const getQuestion = require("./get-question");
const createQuestion = require("./create-question");
const updateQuestion = require("./update-question");
const deleteQuestion = require("./delete-question");

module.exports = {
  paths: {
    "/api/v1/questions": {
      ...getTodos,
      ...createTodo,
    },
    "/api/v1/questions/{id}": {
      ...getTodo,
      ...updateTodo,
      ...deleteTodo,
    },
  },
};
