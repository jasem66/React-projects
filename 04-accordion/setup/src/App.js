import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
const [questions, setQuestions] = useState(data)



  return( <main>
   <div className="container">
     <div>
       {questions.map((item)=>{
 return <SingleQuestion key={item.id} {...item} />
       })}
      
     </div>
   </div>
  </main>
)}

export default App;
