import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(1)

 

  useEffect(() => {
    const interval =
      setInterval(() => {
          if (index >= people.length - 1) {
            setIndex(0)
          }
       else setIndex(index+1)
      }, 2000);
      return ()=>clearInterval(interval)
    
  }, [index,people])
  



  const next =()=>{
    if(index>=people.length-1){
   setIndex(0)
    }
    else setIndex(prev => prev+1)

  }
  const prev = () => {
    if (index <= 0) {
      setIndex(people.length-1)
    } else setIndex((prev) => prev - 1)
  }

  const { id, image, title, quote } = people[index]

  let james = 'next-slide'
  if(!index){
    james = 'james'
  }
  return (
    
    <div className={james} key={id}>
      <h2>{index}</h2>

      <h2>{title}</h2>
      <img className='person-img' src={image} alt={title} />
      <p>{quote}</p>
      <div>
        <button className='btn' onClick={prev} >prev</button>
        <button className='btn' onClick={next}>next</button>
      </div>
    </div>
  )
}

export default App
