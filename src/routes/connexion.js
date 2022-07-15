const {users} = require('../db/sequelize')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const privateKey = require('../auth/privateKey')
module.exports = (app)=>{
    app.post('/connexion' , (req,res) => {
        users.findOne({where : {username : req.body.username}})
            .then(User => {
                bcrypt.compare(req.body.password,User.password)
                    .then(_ =>{
                        if(_){
                            const token = jwt.sign(
                                {userId : User.id},
                                privateKey,
                                {expiresIn: '24h'}
                            )
                            res.json({message : 'connexion reussie', data : User, token})
                        }else{
                            return res.status(400).json({msg : 'mauvais mot de passe'})
                        }
                    })
                    .catch(err => {
                        res.json({message : 'connexion echouee',err})
                    })
            })
            .catch(err => {
                res.json({message :'aucun utilisateur trouve' , err})
            })
    })
}