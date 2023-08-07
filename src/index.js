const express = require("express");
const bodyParser = require("body-parser");
const v1QuestionRouter = require("./v1/routes/questionRoutes");
// const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");
const dbConnect = require("./database/dbConnect");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1/questions", v1QuestionRouter);
app.use("/api/v1/docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
  // V1SwaggerDocs(app, PORT);
});

dbConnect();
