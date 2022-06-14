import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const [Readmore, setReadmore] = useState(false)

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0
    }
    if (number < 0) {
      return people.length - 1
    }
    return number
  }

  const prevPerson = () => {
    setIndex((index)=>{
    let newIndex = index - 1
    return checkNumber(newIndex)
  }
    )
  }

  const nextPerson = () => {
    setIndex((index)=>{
    let newIndex = index + 1
    return checkNumber(newIndex)
  }
    )
  }

  const randomNumber = () => {
let random = Math.floor(Math.random() * people.length)
if(random === index)
{
   random = index + 1
}

setIndex(checkNumber(random))
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>
        {Readmore ? text : text.substring(0, 50)}
        <button className='random-btn ' onClick={() => setReadmore(!Readmore)}>
          ...Read More
        </button>
      </p>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={randomNumber}>
        surprise
      </button>
    </article>
  )
}

export default Review
