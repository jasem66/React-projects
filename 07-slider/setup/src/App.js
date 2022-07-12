import React, { useState, useEffect } from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import { FaQuoteRight } from 'react-icons/fa'
import data from './data'
function App() {
  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)
  const [time, setTime] = useState(0)

  useEffect(() => {
  let counter= setInterval(() => {
    setTime(time+1)
  }, 3000)
   return()=>clearInterval(counter)
  },[time])
 
  


//   const checkSlide = (num) => {
 
//     if (num > people.length - 1) {
//       return 0
//     }
//     if (num < 0) {
//       return people.length - 1
//     }
//     return num
//   }

//   const next=()=>{
//     setIndex((index)=>{
// let newIndex = index + 1
// return checkSlide(newIndex)
//     }
      

//     )
//   }

//     const previous = () => {
//       setIndex((index) => {
//         let newIndex = index - 1
//         return checkSlide(newIndex)
//       })
//     }



useEffect(() => {
 const lastIndex = people.length -1;
 const firstIndex = 0
 if(index < 0){
setIndex(lastIndex)
 }
 if(index > lastIndex){
  setIndex(firstIndex)
 }
}, [index,people])

 useEffect(() => {
let timer =setInterval(() => {
   setIndex(index+1)
  }, 3000);
  console.log(timer);
return()=>clearInterval(timer)
}, [index])



  return (
    <section className='section'>
      <div className='title'>
        <h2>counter : {time}</h2>
        <button onClick={()=>setTime(0)} style={{backgroundColor:"yellow", width:100,height:"50px", border:"none"}} className="btn" >stop</button>
        <h2>
          <span>/</span>reviews
        </h2>
        
      </div>

      <div className='section-center'>
        {people.map((person, personIndex) => {
          const { name, quote, id, title, image } = person
          let position = 'nextSlide'
          if (personIndex === index) {
            position = 'activeSlide'
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' />
              <h4>{name}</h4>
              <p className='title'>{title}</p>
              <p className='text'>{quote}</p>
              <FaQuoteRight className='icon' />
            </article>
          )
        })}
        <button className='prev' onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className='next' onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App
