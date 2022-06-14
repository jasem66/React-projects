import React from 'react'

const Book = ({ Image, Title, Auther }) => {
  const getName = () => {
    console.log(Auther)
  }
  return (
    <article className='Book' onMouseOver={() => Handle(Auther)}>
      <h2>{Title}</h2>
      <h3 onClick={() => console.log(Auther)}>{Auther}</h3>
      <img src={Image} alt='' />
      <button className='btn' onClick={() => alert('hello')}>
        push
      </button>
      <button
        onClick={() => {
          getName(Auther)
        }}
      >
        get my name
      </button>
    </article>
  )
}
const Handle = (e) => {
  console.log(e)
  console.log(e.target)
}

export default Book
