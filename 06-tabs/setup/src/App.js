import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading, setloading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setvalue] = useState(0)

  const fetchData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setloading(false)

  }
  useEffect(() => {
    fetchData()
  }, [])




  
  if (loading) {
    return <h3>Loading...</h3>
  }
const{id,order,title,dates,duties,company}=jobs[value]
return (
  <div>
 <div>
     {jobs.map((item,id)=>(
      <button className="btn" onClick={()=>setvalue(id)}>{item.company}</button>
    ))}
 </div>
    <h2>{title}</h2>
    <p>{dates}</p>
   {duties.map((item,index)=>{
    return  <p key={index}>{item}</p>
    })}


 
  </div>
)
}

export default App
