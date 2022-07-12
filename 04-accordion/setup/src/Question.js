import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ id, title, info }) => {
  const [showInfo, setShowInfo] = useState(false)
  console.log(showInfo)
  return (
    <article className='question'>
      <h4 className='header'>{title}</h4>

      {showInfo && <p>{info} </p>}
      <buton className='btn' onClick={() => setShowInfo(!showInfo)}>
        {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </buton>
    </article>
  )
}
export default Question
