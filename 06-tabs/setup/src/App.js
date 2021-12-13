import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [jobs,setjobs] =useState([]);
  const [value,setValue] = useState(0)

  const fetchJobs = async ()=>{
    const response = await fetch(url);
    const newJobs = await response.json();
    setjobs(newJobs);
    setLoading(false);

  }


  useEffect(()=>{
   fetchJobs()
  },[])
 if(loading){
      return <div><h1>loading...</h1></div>
    };

const {company,dates,duties,title} = jobs[value];
    return (
    <main className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>   
</div>
<div className="job-center">
  <div className="btn-container">
    {jobs.map((item,inde)=>{
      return <button onClick={()=>{setValue(inde)}}
       key={item.id}
       className={`job-btn ${inde===value && "active-btn"}`}>
         {item.company}</button>

    })}
  </div>
  </div> 

        <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index)=>{
          return(
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="jon-icon">
              </FaAngleDoubleRight>
              <p>{duty}</p>
              </div>
            

          )

        }
        )}
      </article>
    </main>
    )
} 

export default App
