import React from 'react'

const Jobs = ({jobs}) => {
 
   
      const {id, order, title, dates, duties, company} = jobs[0] 
      return (
      <div>
        <h2>{title}</h2>
        <p>{dates}</p>
        <p> {duties}</p>
      </div>
      )
    
  
}

export default Jobs