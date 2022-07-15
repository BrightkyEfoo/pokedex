const {users} = require('../db/sequelize')
const bcrypt = require('bcrypt')
module.exports = (app)=>{
    app.post('/signup', (req,res)=>{
        if(req.body.password.length < 8){
            return res.status(400).json({message : 'Le mot de passe doit contenir 8 characteres ou plus'})
        }else {
            return bcrypt.hash(req.body.password,10).then(hash =>{
                users.create({
                    username : req.body.username,
                    password : hash
                }).then(User => 
                    res.json({message : `nouvel utilisateur cree `, User})
                ).catch(err => {
                    res.status(400).json({message : 'erreur de creation d\'utilisateur',err})
                })
            })
        }     
    })
}