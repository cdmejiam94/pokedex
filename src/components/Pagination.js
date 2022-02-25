import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {
  return (
    <nav>
        <ul className='pagination justify-content-center'>
            {prev ? (
                <li className='page-item' style={{marginRight:"15px"}}>
                    <button className='page-link' onClick={onPrevious}>Previous</button>
                </li>
            ) : null}
            {next ? (
                <li className='page-item'>
                    <button className='page-link' onClick={onNext}>Next</button>
                </li>
            ) : null}
        </ul>
    </nav>
  )
}

export default Pagination