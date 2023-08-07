module.exports = {
  get: {
    tags: ["Questions CRUD operations"],
    description: "Get one question",
    operationId: "getOneQuestions",
    parameters: [
      {
        name: "questionId",
        in: "path",
        schema: { type: "string", description: "The id of a question" },
        required: true,
        description: "The id of a question",
      },
    ],
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
