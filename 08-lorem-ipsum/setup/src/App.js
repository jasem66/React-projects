import React from 'react'
import { useState } from 'react';
import data from './data'
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([])

  const handleSubmit=(e)=>{
e.preventDefault()
let amount = parseInt(count);
if(count<=0){
 amount =1
}
if(count>8){
  amount=8
}
setText(data.slice(0,amount))
console.log(typeof(amount));
  }

  return (
    <div className='section-center'>
      <h3>Lorem Ipsum</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>Paragraphs :</label>

        <input
          type='number'
          name='amount'
          id='amount'
          value={count}
          onChange={(s) => setCount(s.target.value)}
        />
        <button className='btn' type='submit'>
          Generate
        </button>
      </form>
      <article className='lorem-text'>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </div>
  )
}

export default App