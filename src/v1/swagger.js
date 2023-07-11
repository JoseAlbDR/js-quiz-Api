const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Basic Meta informations
const options = {
  definition: {
    openapi: "3.0.0",
    info: { title: "JSQuiz Rest API", version: "1.0.0" },
  },
  apis: ["./src/v1/routes/questionRoutes.js", "./src/database/Question.js"],
};

// Docs in JSON format
const swaggerSpec = swaggerJsdoc(options);

// Function to setup docs
const swaggerDocs = (app, port) => {
  // Route-Handler
  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  // Docs in JSON format
  app.get("/api/v1/docs.json", (req, res) => {
    res.send(swaggerSpec);
  });
  console.log(
    `Version 1 Docs are available at http://localhost:${port}/api/v1/docs`
  );
};

module.exports = { swaggerDocs };
