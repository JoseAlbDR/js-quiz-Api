const DB = require("./db.json");

const getAllQuestions = () => {
  return DB.questions;
};

module.exports = { getAllQuestions };
