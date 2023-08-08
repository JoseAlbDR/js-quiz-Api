module.exports = {
  patch: {
    tags: ["Questions CRUD operations"],
    description: "Update one question",
    operationId: "updateOneQuestions",
    summary: "Update One Question",
    parameters: [
      {
        name: "questionId",
        in: "path",
        schema: { type: "string", description: "The id of a question" },
        required: true,
        description: "The id of a question",
      },
    ],
    requestBody: {
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/QuestionInput",
          },
        },
      },
    },
    responses: {
      200: {
        description: "OK",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "OK",
                },
                data: {
                  $ref: "#/components/schemas/Question",
                },
              },
            },
          },
        },
      },
      400: {
        description: "BAD REQUEST",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                status: {
                  type: "string",
                  example: "FAILED",
                },
                data: {
                  type: "object",
                  properties: {
                    error: {
                      type: "string",
                      example: "Parameter ':questionId' can not be empty",
                    },
                  },
                },
              },
            },
          },
        },
      },
      500: {
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
