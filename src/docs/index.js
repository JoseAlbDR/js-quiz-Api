const basicInfo = require("./basicInfo");
const servers = require("./servers");
const components = require("./components");
const tags = require("./tags");
const questions = require("./questions");

module.exports = {
  ...basicInfo,
  ...servers,
  ...components,
  ...tags,
  ...questions,
};
