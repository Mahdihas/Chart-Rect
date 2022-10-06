import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Book from '../Book/Book';

const Books = () => {
  const data = useLoaderData()
  const { books} = data;
  // console.log(books);
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-6 py-4'>
      {
       books.map(book=><Book key={book.isbn13} book={book}></Book>)
      }
    </div>
  )
}

export default Books