const express = require("express");
const bodyParser = require("body-parser");
const v1QuestionRouter = require("./v1/routes/questionRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use("/api/v1/questions", v1QuestionRouter);

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
