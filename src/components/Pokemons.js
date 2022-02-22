import React from 'react'
const typesToArray = (types = []) => {
    var tipo = ""
    types.map((item) => {
        if(tipo == ""){
            tipo = item.type.name
        } else {
            tipo = tipo + " / " + item.type.name
        }
    })
    return tipo
}
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
                        <p>Type: {typesToArray(item.types)}</p>
                        <p>Pokedex #: {item.id}</p>
                    </div>
                </div>
            </div>
        ))}        
    </div>
  )
}

export default Pokemons