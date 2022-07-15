const {pokemon} = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/pokemons/:id',(req,res)=>{
        const id = req.params.id
        pokemon.findByPk(id)
            .then(pok => {
                const message = `un pokemon a bien ete trouve`
                res.json({message , pok})
            })
            .catch(error=>{
                res.status(403).json({message:'Aucun pokemon correspondant entrez en un autre'})
            })
    })
}