import React from 'react'
import ProjectUtils from '../util/ProjectUtils'

const utils = new ProjectUtils()

const Pokemons = ({pokemons = []}) => {
  return (
    <div className='row'>
        {pokemons.map((item, index) => (
            <div key={index} className='col mb-4'>
                <div className='card' style={{minWidth: "200px"}}>
                    <img src={item.sprites.front_default} alt=''/>
                    <div className='card-body'>
                        <h5 className='card-title text-uppercase'>
                            {item.species.name}
                        </h5>
                        <hr/>
                        <p>Type: {utils.typesToArray(item.types)}</p>
                        <h5 className='card-title text-uppercase'>
                            Pokedex #: {item.id}
                        </h5>
                    </div>
                </div>
            </div>
        ))}        
    </div>
  )
}

export default Pokemons