import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
const [people, setPeople] = useState(data);
return(
  <>
  <div className="container">
    <h3> amount {people.length}</h3>
   <List people={people} />
  <button className="btn" onClick={()=>setPeople([])}>delete all</button>
  </div>
    
  </>
)

 
}

export default App;
 // const [people, setPeople] = useState(data);
  // return <main>
  //   <section className="container">
  //    <h3>{people.length} birthday today</h3>
  //    <List people={people}/>
  //    <button className="btn"
  //     onClick={()=>setPeople([])}>clear all</button>
  //   </section>
  //   </main>;