exports.success = (message , data )=>({message,data})
exports.getUniqueId = (Pokemons)=>{
    const Ids = Pokemons.map(pok=>pok.id)
    const maxId = Ids.reduce((id1,id2)=>Math.max(id1,id2))
    return maxId+1
}