const { pokemon } = require('../db/sequelize')
  
module.exports = (app) => {
  app.put('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id)
    console.log({id})
    pokemon.update({...req.body}, {
      where: { id: id }
    })
    .then(_ => {
      pokemon.findByPk(id)
        .then(pok => {
            const message = `Le pokémon ${pok.name} a bien été modifié.`
            res.json({message, data: pok })
        })
        .catch(err=>{
            res.status(503).json({message : `Erreur aucun pokemon correspondant a l'id ${id}`  ,err})
        })
    })
    .catch(err=>{
        res.status(401).json({message : 'mauvais id veuillez en renseigner un autre',err})
    })
  })
}
