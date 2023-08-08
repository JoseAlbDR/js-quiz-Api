module.exports = {
  post: {
    tags: ["Questions CRUD operations"],
    description: "Create one question",
    operationId: "createOneQuestions",
    summary: "Create One Question",
    parameters: [],
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
                  $ref: "#/components/schemas/QuestionInput",
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
                      example: "Question already exsist in the database",
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
