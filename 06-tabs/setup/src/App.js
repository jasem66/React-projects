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
    const resp = await fetch(url)
    const getUrl = await resp.json()
    console.log(getUrl)
    setJobs(getUrl)
    setloading(false)
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <h4 className='section loading'>Loading...</h4>
  }

  const { id, title, order, dates, duties, company } = jobs[value]

  return (
    <div className='container'>

      <div className='section'>
        <div className='title'>
          <h4>experience</h4>
          <div className='underline'></div>

        <div className="btn-container">
          {
            jobs.map((item,index)=>{
              return(
              <button key={item.id} onClick={()=>{setvalue(index)}}
              className={`job-btn ${index===value &&'active-btn' }`}
              >{item.company}</button>
              )
            })
          }
        </div>

          <article className='job-info'>
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p>{dates}</p>
            {duties.map((item, index) => {
              return (
                <div key={index} className='job-desc'>
                  <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                  <p>{item}</p>
                </div>
              )
            })}
          </article>
        </div>
      </div>
    </div>
  )
}

export default App
