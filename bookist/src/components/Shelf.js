import React from 'react';

function Shelf({ shelf, clearShelfFn }) {
  return(
    <>
      <button onClick={clearShelfFn}>Clear Shelf</button>
    </>
  )
}

export default Shelf;