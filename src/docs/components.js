module.exports = {
  components: {
    schemas: {
      Question: {
        type: "object",
        properties: {
          _id: {
            type: "string",
            description: "id of a question",
            example: "c72b3240-2b3e-4540-9791-09dcc9ae1c9f",
          },
          question: {
            type: "string",
            description: "Question content",
            example: "What's the output?",
          },
          code: {
            type: "string",
            description: "Javascript code snippet for the question",
            example: "console.log(typeof typeof 1);",
          },
          options: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Possible options to answer the question",
            example: ["number", "string", "object", "undefined"],
          },
          answer: {
            type: "string",
            description: "Explanation to correct answer for the question",
            example:
              "typeof 1 returns 'number'. typeof 'number' returns 'string'",
          },
          points: {
            type: "number",
            description: "Number of points for correct answer",
            example: 10,
          },
          correctOption: {
            type: "number",
            enum: [0, 1, 2, 3],
            description: "Option number for correct answer",
            example: 1,
          },
          createdAt: {
            type: "string",
            description: "Creation date for the question",
            example: "4/20/2022, 2:21:56 PM",
          },
          updatedAt: {
            type: "string",
            description: "last updated date for the question",
            example: "4/20/2022, 2:21:56 PM",
          },
        },
      },
      QuestionInput: {
        type: "object",
        properties: {
          question: {
            type: "string",
            description: "Question content",
            example: "What's the output?",
            required: true,
          },
          code: {
            type: "string",
            description: "Javascript code snippet for the question",
            example: "console.log(typeof typeof 1);",
          },
          options: {
            type: "array",
            items: {
              type: "string",
            },
            description: "Possible options to answer the question",
            example: ["number", "string", "object", "undefined"],
            required: true,
          },
          answer: {
            type: "string",
            description: "Explanation to correct answer for the question",
            example:
              "typeof 1 returns 'number'. typeof 'number' returns 'string'",
            required: true,
          },
          points: {
            type: "number",
            description: "Number of points for correct answer",
            example: 10,
            required: true,
          },
          correctOption: {
            type: "number",
            enum: [0, 1, 2, 3],
            description: "Option number for correct answer",
            example: 1,
            required: true,
          },
        },
      },
      "2XX": {
        type: "object",
        properties: {
          status: {
            type: "string",
            example: "OK",
          },
          data: {
            type: "array",
            items: {
              type: "Question",
              properties: {
                Question: {
                  $ref: "#/components/schemas/Question",
                },
              },
            },
          },
        },
      },
      "4XX": {
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
                example: "Some Error Message",
              },
            },
          },
        },
      },
      "5XX": {
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
                  "Operation `<some-operation>` buffering timed out after 10000ms",
              },
            },
          },
        },
      },
    },
  },
};
