const express = require("express");
const questionController = require("../../controllers/questionController");

const router = express.Router();

router.get("/", questionController.getAllQuestions);

router.get("/:questionId", questionController.getOneQuestion);

router.post("/", questionController.createNewQuestion);

router.patch("/:questionId", questionController.updateOneQuestion);

router.delete("/:questionId", questionController.deleteOneQuestion);

router.get("/", questionController.getAllQuestions);

module.exports = router;
