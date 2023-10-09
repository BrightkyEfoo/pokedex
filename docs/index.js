module.exports = {
  ...require("./basicInfo"),
  ...require("./servers"),
  ...require("./tags"),
  ...require("./componnent"),
  "consumes": [
    "application/json"
  ],
  paths: { ...require("./paths") },
};
