import React, {useEffect, useState} from 'react'
import Navbar from "./components/Navbar";
import Pokemons from './components/Pokemons';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import PokeApiController from './controller/PokeApiController';

function App() {

  const controller = new PokeApiController()

  const [pokemonsList, setPokemonsList] = useState([]);
  
  const [next, setNext] = useState();
  
  const [prev, setPrev] = useState();

  const fetchPokemon = async (pagination) => {
    const data = await controller.getPokemon(pagination);

    setNext(data.next)
    setPrev(data.previous)

    const promises = data.results.map(async (pokemon) => {
      return await controller.getPokemonData(pokemon.url)
    })

    const results = await Promise.all(promises)

    setPokemonsList(results)
  };

  const onNext = () => {
    fetchPokemon(next)
  }

  const onPrevious = () => {
    fetchPokemon(prev)
  }

  useEffect(() => {
    fetchPokemon(controller.baseUrl)
  }, []);

  return (
    <>
      <Navbar brand="Pokedex Web App"/>
      <div className='container'>
        <SearchBar/>
      </div>     

      <div className="container mt-5">
        <Pokemons pokemons={pokemonsList}/>
        <Pagination
                className="mt-4"
                next={next}
                prev={prev}
                onNext={onNext}
                onPrevious={onPrevious}
              />
      </div>
    </>
  );
}

export default App;
