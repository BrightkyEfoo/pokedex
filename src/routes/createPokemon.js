const { pokemon } = require("../db/sequelize");

module.exports = (app) => {
  app.post("/api/v1/pokemons", (req, res) => {
    // if()
    try {
      pokemon
        .create(req.body)
        .then((pok) => {
          const message = `Le pokémon ${pok.name} a bien été crée.`;
          res.json({ message, data: pok });
        })
        .catch((err) => res.status(400).json({ msg: "something went wront " }));
    } catch (error) {
      return res.status(400).json({ msg: "something went wront " });
    }
  });
};
