const {users} = require('../db/sequelize')
const bcrypt = require('bcrypt')
module.exports = (app)=>{
    app.put('/api/v1/signup/:id', (req,res)=>{
        if(req.body.password.length <8){
            return res.status(400).json({message : 'Le mot de passe doit contenir 8 characteres ou plus'})
        }else {        
             bcrypt.hash(req.body.password,10).then(hash =>{
                users.update({
                    username : req.body.username,
                    password : hash
                },
                {
                    where : {id:parseInt(req.params.id)}
                }).then(_ => 
                    users.findOne({where : {id : parseInt(req.params.id)}})
                    .then(User => {
                        res.json({message : ` L'utilisateur ${User.username} a bien ete modifie `, User})
                    })
                    
                ).catch(err => {
                    res.status(400).json({message : `utilisateur n°${req.params.id} non trouvé`,err})
                })
            })
        }     
    })
}