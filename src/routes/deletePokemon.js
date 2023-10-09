const { pokemon } = require("../db/sequelize");

module.exports = (app) => {
  app.delete("/api/v1/pokemons/:id", (req, res) => {
    const id = parseInt(req.params.id);
    pokemon.findByPk(id).then((pok) => {
      const pokDeleted = pok;
      try {
        pokemon
          .destroy({
            where: { id: pok.id },
          })
          .then((_) => {
            res.json({
              message: `le pokemon ${pokDeleted.name} vient d'etre supprime`,
              pokDeleted,
            });
          });
      } catch (error) {
        return res.status(400).json({ message: `Aucun pokemon trouve` });
      }
    });
  });
};
