import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({id,title,info}) => {
  const [showInfo, setShowInfo] = useState(false);

  return <article  className="question">
   <div><h3 >{title}</h3>
   
  </div>
    <button className='btn'
  onClick={()=>setShowInfo(!showInfo)}>
    {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />  }
  </button>
  {showInfo && info}
 </article>
 
  }
export default Question;
