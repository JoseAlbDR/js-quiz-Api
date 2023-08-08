module.exports = {
  get: {
    tags: ["Questions CRUD operations"],
    description: "Get all questions",
    operationId: "getAllQuestions",
    summary: "Get All Questions",
    parameters: [],
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/2XX",
            },
          },
        },
      },
      500: {
        description: "INTERNAL SERVER ERROR",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/5XX",
            },
          },
        },
      },
    },
  },
};
