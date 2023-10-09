module.exports = (app)=>{
    app.get('/api/v1/',(rea,res)=>{
        res.send(`Bienvenue sur mon api de gestion d'un pokedex`)
    })
}