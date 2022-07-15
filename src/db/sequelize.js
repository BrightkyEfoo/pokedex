const {Sequelize , DataTypes} = require('sequelize')
const PokModel = require('../models/pokemons')
const UserModel = require('../models/user')
const bcrypt = require('bcrypt')
let pokemons = require('./mock-pokemon')
const sequelize = new Sequelize(
    'sql8506606',
    'sql8506606',
    'tsNgsr8Ekc',
    {
        host:'sql8.freemysqlhosting.net',
        dialect:'mariadb',
        dialectOptions:{
            timezone : 'Etc/GMT+1'
        },
        logging:true
    }
)

const users = UserModel(sequelize,DataTypes)
const pokemon = PokModel(sequelize,DataTypes)
const initDb = ()=>{
    return sequelize.sync({force:true})
        .then(_ => {
            console.log('synchronisation reussie')
            bcrypt.hash('efoo2345',10).then(hash => users.create({ username : 'brightefoo', password: hash }).then(User => console.log(User.toJSON())))

            pokemons.map(pk => {
                pokemon.create({
                name: pk.name,
                hp: pk.hp,
                cp: pk.cp,
                picture: pk.picture,
                types: pk.types
                })
                .then(pok => {
                    console.log(pok.toJSON())
                })
                .catch(err=>{
                    console.error(`il y a erreur sur les donnees entrees ${error}`)
                })
            })
        })
        .catch(error => console.error(`echec de synchronisation ${error}`))
}
sequelize.authenticate()
    .then(_ => console.log('connexion a la bd etablie'))
    .catch(error => {
        console.error(`connexion a la base de donnees echouee ${error}`)
        // throw new Error(`connexion a la base de donnees echouee ${error}`)
    })
module.exports = {initDb,pokemon,users}