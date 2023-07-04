const express = require("express");
const questionController = require("../controllers/questionController");

const router = express.Router();

router.get("/", questionController.getAllQuestions);

router.get("/:questionId", questionController.getOneQuestion);

router.post("/", questionController.createNewQuestion);

router.patch("/:questionId", questionController.updateQuestion);

router.delete("/:questionId", questionController.deleteQuestion);

module.exports = router;
