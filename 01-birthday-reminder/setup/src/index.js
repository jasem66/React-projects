import React from 'react'
import ReactDom from 'react-dom'
import './index.css'
import { books } from './books'
import  Book  from './book'



function BookList() {
  return (
    <>
      <div className='bookList'>
        {books.map((book) => {
          const { Image, Title, Auther } = book

          return (
            <Book key={book.id} {...book}>
              {' '}
            </Book>
          )
        })}{' '}
      </div>
    </>
  )
}



ReactDom.render(<BookList />, document.getElementById('root'))
