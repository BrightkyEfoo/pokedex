module.exports = (app)=>{
    app.get('/',(rea,res)=>{
        res.send(`Bienvenue sur mon api de gestion d'un pokedex`)
    })
}