module.exports = {
  get: {
    tags: ["Questions CRUD operations"],
    description: "Get all questions",
    operationId: "getAllQuestions",
    parameters: [],
    responses: {
      "2XX": {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/2XX",
            },
          },
        },
      },
      "4XX": {
        description: "BAD REQUEST",
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/4XX",
            },
          },
        },
      },
      "5XX": {
        description: "FAILED",
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
