import React from 'react';
import './Shelf.css';

function Shelf({ shelf, clearShelfFn }) {
  let displayShelf = shelf.map(book => {
    return(
      <p>{book}</p>
    )
  })

  return(
    <div className='shelf'>
      <h2>Your Shelf</h2>
      <button onClick={clearShelfFn}>Clear Shelf</button>
      {displayShelf}
    </div>
  )
}

export default Shelf;