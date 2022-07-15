const { pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.post('/api/pokemons', (req, res) => {
    pokemon.create(req.body)
      .then(pok => {
        const message = `Le pokémon ${pok.name} a bien été crée.`
        res.json({ message, data: pok })
      })
      .catch(err=>res.status(400).json({err}))
  })
}