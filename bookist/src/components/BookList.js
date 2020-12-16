import React from 'react';

function BookList({ books, addToShelfFn }) {
  let bookList = books.map(book => {
    return(
      <div>
        <img src={book.img} alt={book.title} />
        <p>{book.title} by {book.author}</p>
      </div>
    )
  })

  return(
    <>
      {bookList}
    </>
  )
}

export default BookList;