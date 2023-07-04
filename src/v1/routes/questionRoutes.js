const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get all Questions");
});

router.get("/:questionId", (req, res) => {
  res.send("Get Question");
});

router.post("/", (req, res) => {
  res.send("Post Question");
});

router.patch("/:questionId", (req, res) => {
  res.send("Update Question");
});

router.delete("/:questionId", (req, res) => {
  res.send("Delete Question");
});
