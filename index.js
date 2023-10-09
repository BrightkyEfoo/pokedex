const express = require("express");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const sequelize = require("./src/db/sequelize");
const jwt = require("./src/auth/auth");
const swaggerUi = require("swagger-ui-express");

const app = express();
const port = process.env.PORT || 8000;
exports.port = port;

const swaggerDocument = require("./docs/index");
sequelize.initDb();

app
  .use(favicon(__dirname + "/favicon.ico"))
  .use(bodyParser.json())
  .use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

require("./src/routes/connexion")(app);
require("./src/routes/signup")(app);
app.use(jwt);
require("./src/routes/root")(app);
require("./src/routes/createPokemon")(app);
require("./src/routes/findPokemonByPk")(app);
require("./src/routes/findAllPokemons")(app);
require("./src/routes/modifyPokemon")(app);
require("./src/routes/deletePokemon")(app);
require("./src/routes/updateUser")(app);
require("./src/routes/deleteUser")(app);

app.use(({ res }) => {
  const message = "toi meme qui ta envoye ici, change de route directement";
  res.status(404).json({ message });
});
app.listen(port, () =>
  console.log(`Notre application tourne sur le port ${port}`)
);
