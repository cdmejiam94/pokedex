import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar";
import Pokemons from './components/Pokemons';

function App() {

  const [pokemonsObjectList, setPokemonsObjectList] = useState([]);

  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemon = async (url) => {
    await fetch(url)
      .then(response => response.json())
      .then(data => fetchPokemonData(data.results, url))
      .catch(error => console.log(error))
  };

  const fetchPokemonData = (pokemonsNames, url) => {
    const itemList = []
    pokemonsNames.map((pokemon) => {
      const pokemonUrl = url + pokemon.name
      fetch(pokemonUrl)
        .then(response => response.json())
        .then(data => itemList.push(data))
        .catch(error => console.log(error))
    });
    setPokemonsObjectList(itemList)
  }

  useEffect(() => {
    fetchPokemon(baseUrl)
  }, [])
  return (
    <>
      <Navbar brand="Pokedex Web App"/>

      <div className="container mt-5">
        <Pokemons pokemons={pokemonsObjectList}/>
      </div>
    </>
  );
}

export default App;
