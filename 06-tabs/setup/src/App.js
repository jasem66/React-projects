import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://fakestoreapi.com/products/'

function App() {
  const [loading, setLoading] = useState(true)
  const [jobs, setJobs] = useState([])
  const [value, setValue] = useState(0)

  const fetchJobs = async () => {
    const response = await fetch(url)
    const newJobs = await response.json()
    console.log(newJobs)
    setJobs(newJobs)
    setLoading(false)
  }

  useEffect(() => {
    fetchJobs()
  }, [])

  if (loading) {
    return <h3>Loading...</h3>
  }
  const { title, description, category, price } = jobs[value]
  return (
    <section className='section'>
      <div className='title'>
        <h3>{title}</h3>
        <div className="underline"></div>
        <h4>{category}</h4>
        <h4>{price}</h4>
        <p>{description}</p> 
      </div>
      <div className="jo-center">
      <div className="btn-container">
{jobs.map((item,index)=>{
  return <button className={`job-btn ${index ===value ? 'active-btn ' : 'job-btn'}`} onClick={()=>setValue(index)} key={item.id}>{item.id}</button>
 
  // {'job-btn ${index === value && active-btn}}
        
})}

        </div>
      </div>
    </section>
  )}

{
  /* <div className='row row-cols-1 row-cols-md-3  row-cols-sm-2  row-cols-lg-4  g-4'>
          { Data.length?
          Data.map((item) => (
            <Product key={item.id} {...item} />
          ))
          : <h3>Loading...</h3>
        
        }  */
}

export default App
