const getAllQuestions = (req, res) => {
  res.send("Get all Questions");
};

const getOneQuestion = (req, res) => {
  res.send("Get one Question");
};

const createNewQuestion = (req, res) => {
  res.send("Create Question");
};

const updateQuestion = (req, res) => {
  res.send("Update Question");
};

const deleteQuestion = (req, res) => {
  res.send("Delete Question");
};

module.exports = {
  getAllQuestions,
  getOneQuestion,
  createNewQuestion,
  updateQuestion,
  deleteQuestion,
};
