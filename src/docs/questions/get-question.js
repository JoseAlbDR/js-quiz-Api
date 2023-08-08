module.exports = {
  get: {
    tags: ["Questions CRUD operations"],
    description: "Get one question",
    operationId: "getOneQuestions",
    summary: "Get One Question",
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
                      example:
                        'Cast to ObjectId failed for value "64d10ac713ba46c210a1912" (type string) at path "_id" for model "Question"',
                    },
                  },
                },
              },
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
