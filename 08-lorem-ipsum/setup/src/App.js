import React from 'react'
import { useState } from 'react'
import data from './data'
function App() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault()
    setText(data)
if (count < 1) {
setCount(1)}
let amount = parseInt(count)
if(count>=8){
  amount=8
}
if(count<=0){
  amount= 0
    

}

setText(data.slice(0,amount))
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='amount'>
          Amount :
          <input
            type='number'
            value={count}
            onChange={(e) => {
    if (count < 1) {
setCount(1)
    }
             else setCount(e.target.value)
            }}
          />
        </label>
        <button className='btn' type='submit'>Submit</button>
      </form>
      {text.map((item,index)=>{
   return     <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default App
