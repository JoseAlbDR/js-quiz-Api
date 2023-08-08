module.exports = {
  delete: {
    tags: ["Questions CRUD operations"],
    description: "Delete one question",
    operationId: "deleteOneQuestions",
    summary: "Delete One Question",
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
      204: {
        description: "OK",
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
