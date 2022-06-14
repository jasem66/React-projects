import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  const [people, setPeople] = useState(data);
const clear=()=>{
  setPeople([])
}

  return (
    <main>
      <div className='container'>
        <h3>{people.length} birthday today</h3>
       <List people={people} />
        <button onClick={()=>clear([])}>clear all</button>
      </div>
    </main>
  )
  }

export default App
