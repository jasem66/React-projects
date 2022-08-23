import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
const url = 'https://course-api.com/react-tabs-project'
const App = () => {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setvalue] = useState(0)

  const fetchJobs = async () => {
    const reponse = await fetch(url)
    const newJobs = await reponse.json()
    setJobs(newJobs)
    setLoading(false)
    console.log(newJobs)
  }
  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <h3>loading...</h3>
  }

  const { id, order, title, dates, duties, company } = jobs[value]

  return (
    <div>
          <div>{jobs.map((item,index)=>{
            return(
             <button className='btn' onClick={()=>setvalue(index)}>{ item.company}</button>
            )
          
          })}</div>

      <h3>{title}</h3>
      <p>{dates}</p>
      {duties.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default App
