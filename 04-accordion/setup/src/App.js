import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  const [questions, setQuestions] = useState(data);

  return <main>
    <div className="container">
  <h2> Question and answers</h2>
  
<article>{questions.map((q )=>{
  return <SingleQuestion key={q.id} {...q} />
})}
</article>
  </div>
  </main>
}

export default App;
