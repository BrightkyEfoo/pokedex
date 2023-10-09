const {users} = require('../db/sequelize')

module.exports = (app)=>{
    app.delete('/api/v1/signup/:id',(req,res)=>{
        users.findOne({
            where : {
                id : req.params.id
            }
        }).then(User =>{
            res.json({message : `L'user n° ${User.id} vient d'etre supprimé`,User})
        }).catch(err => res.status(400).json({message : `id ${req.params.id} non trouvé`, err}))
        users.destroy(
            {
                where : {
                    id:req.params.id
                }
        }).catch(err => res.status(404).json({message : 'erreur lors de la suppression' , err}))
    })
}