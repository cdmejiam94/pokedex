class PokeApiController{
    
    constructor(){
        this.baseUrl = "https://pokeapi.co/api/v2/pokemon/";
    }

    async searchPokemon (search) {
        try{
            const response = await fetch(this.baseUrl + search)
            const data = await response.json()
            return data
        } catch(err) {
            console.log("ERR -> .searchPokemons : ")
            console.log(err)
            return null
        }        
    };

    async getPokemon (pagination) {
        try{
            const response = await fetch(pagination)
            const data = await response.json()
            return data
        } catch(err) {
            console.log("ERR -> .getPokemons : ")
            console.log(err)
            return {
                message: "Pokemon Not Found: ",
                pokemon: null
            }
        }        
    };

    async getPokemonData (url) {
        try{
            const response = await fetch(url)
            const data = await response.json()
            return data
        } catch(err) {
            console.log("ERR -> .getPokemonData : ")
            console.log(err)
            return {
                message: "Pokemon Not Found: ",
                pokemon: null
            }
        }        
    };
}

module.exports = PokeApiController