const { port } = require("..");

module.exports = {
  servers: [
    {
      url: `http://localhost:${port}/api/v1`,
      description: "Local server V1",
    },
  ],
};
