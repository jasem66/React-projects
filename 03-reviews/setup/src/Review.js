import React, { useState } from 'react'
import people from './data'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa'

const Review = () => {
  const [index, setIndex] = useState(0)
  const { name, job, image, text } = people[index]
  const [Readmore, setReadmore] = useState(false)


  const randomnumber=()=>{
   let random =Math.floor(Math.random() * people.length);
   if(random===index){
    random= index+1
   } 
   setIndex(checkNumber(random))
  }

const checkNumber=((num)=>{
  if(num > people.length -1){
    return 0
  }
  if(num<0){
    return people.length -1
  }
  else{
    return num 
    console.log(num);
  }

})

  const prevPerson = () => {
    setIndex((index) => {
      const prev = index - 1
      return checkNumber(prev) 
    })
  }
  const nextPerson = () => {
    setIndex((index) => {
      const next = index + 1
      return checkNumber(next) 
    })
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
      <button className='random-btn'onClick={randomnumber}>surprise</button>
    </article>
  )
}

export default Review
