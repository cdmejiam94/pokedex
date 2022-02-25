import React from 'react'
import ProjectUtils from '../util/ProjectUtils'

const utils = new ProjectUtils()

const PokemonInfo = (img, name, types = [], id) => {
  return (
    <div className='row mt-4'>
        <div className='card' style={{maxWidth: "250px", minWidth:"200px"}}>
            <img src={img} alt=''/>
            <div className='card-body'>
                <h5 className='card-title text-uppercase'>
                    {name}
                </h5>
                <hr/>
                <p>Type: {utils.typesToArray(types)}</p>
                <h5 className='card-title text-uppercase'>
                    Pokedex #: {id}
                </h5>
            </div>
        </div>
        </div>
  )
}

export default PokemonInfo