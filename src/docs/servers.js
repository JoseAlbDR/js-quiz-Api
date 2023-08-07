module.exports = {
  servers: [
    {
      url: "http://127.0.0.1:3000/api/v1/questions",
      description: "Local Server",
    },
    {
      url: "https://jsquiz.jadero.dev/api/v1/questions",
      description: "Testing Server",
    },
    {
      url: "https://jsquiz.jadero.dev/api/v1/questions",
      description: "Production Server",
    },
  ],
};
