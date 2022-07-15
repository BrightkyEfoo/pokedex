const {pokemon} = require('../db/sequelize')
const {Op} = require('sequelize')
module.exports = (app)=>{
    app.get('/api/pokemons/',(req,res)=>{
        const Limit = req.query.limit? req.query.limit : 5
        if(req.query.name){
            if(req.query.name.length < 3){
                
                return res.status(400).json({message : 'plus de 3 carracteres requis pour une recherche'})
            }else{
                return pokemon.findAndCountAll({
                    where:{
                        name:{
                            [Op.startsWith]: req.query.name
                        }
                    },
                    limit:Limit,
                    order : ['name']
                }).then(({count,rows}) => {
                    if(rows.length === 1){
                        const message = `voici le pokemon trouvé pour la recherche ${req.query.name}`
                        res.json({message , data : rows})
                    }else{
                        if(count === 0){
                            const message = `aucun pokemon trouvé pour la recherche ${req.query.name}`
                            res.json({message , data : rows})
                        }else{
                            const message = `voici la liste des ${rows.length} pokemons  sur ${count} pour la recherche ${req.query.name}`
                            res.json({message , data : rows})
                        }
                    }
                })
                .catch(error=>{
                    res.status(500).json({message : "Liste non recuperee reessayez dans quelques instants", error})
                })
            }
        }else{
            pokemon.findAll({
                order :['name'],
                limit : Limit
            })
                .then(pok => {
                    if(pok.length === 0){
                        const message = 'Aucun pokemon trouve'
                        res.json({message , data : pok})
                    }else{
                        const message = 'voici la liste des pokemons'
                        res.json({message , data : pok})
                    }
                    
                })
                .catch(error=>{
                    res.status(500).json({message : "Liste non recuperee reessayez dans quelques instants", error})
                })
            }
        })
    }    