import React from 'react'

function Review({id,name,text,job,image,deleteI}) {
  
  return (
    <div>
      <h2>{name}</h2>
      <p>{text}</p>
      {/* <img src={image} alt={name} /> */}
      <button onClick={()=>deleteI(id)}>delete</button>
    </div>
  )
}

export default Review