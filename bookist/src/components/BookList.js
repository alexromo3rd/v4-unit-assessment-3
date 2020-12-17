import React from 'react';
import './BookList.css';

function BookList({ books, addToShelfFn }) {
  let bookList = books.map(book => {
    return(
      <div className='book'>
        <img src={book.img} alt={book.title} onClick={addToShelfFn} />
        <p>{book.title} by {book.author}</p>
      </div>
    )
  })

  return(
    <div className='book-container'>
      {bookList}
    </div>
  )
}

export default BookList;