import React from 'react'
import PokeApiController from '../controller/PokeApiController'
import ProjectUtils from '../util/ProjectUtils'

const { useState } = React
const utils = new ProjectUtils()

const SearchBar = () => {
    const [search, setSearch] = useState("");

    const [pokemon, setPokemon] = useState();

    const controller = new PokeApiController()

    const onChange = (event) => {
        setSearch(event.target.value);
    }

    const onClick = async () => {
        const data = await controller.searchPokemon(search)  
        setPokemon(data)
    }

    const onDelete = async () => {
        setPokemon(null)
    }

  return (
      <>
      <div className='row mt-4'>
        <div className='col'>
            <input 
                className='form-control'
                type='text' 
                placeholder='Buscar Pokemon...'
                onChange={onChange}
            />
        </div>
        <div className='col'>
            <button 
                type='button' 
                className='btn btn-success mr-5'
                style={{marginRight: "15px"}} 
                onClick={onClick}>
                    Buscar
            </button>
            <button 
                type='button' 
                className='btn btn-danger pl-5' 
                onClick={onDelete}>
                    Borrar
            </button>
        </div>
        {pokemon ? (
            <div className='row mt-4'>
            <div className='card' style={{maxWidth: "250px", minWidth:"200px"}}>
                <img src={pokemon.sprites.front_default} alt=''/>
                <div className='card-body'>
                    <h5 className='card-title text-uppercase'>
                        {pokemon.species.name}
                    </h5>
                    <hr/>
                    <p>Type: {utils.typesToArray(pokemon.types)}</p>
                    <h5 className='card-title text-uppercase'>
                        Pokedex #: {pokemon.id}
                    </h5>
                </div>
            </div>
            </div>
        ) :
            <div className='mt-4'><p>Pokemon Result...</p></div>
        }
    </div>
    </>
  )
}

export default SearchBar