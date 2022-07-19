import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { AppContext, useGlobalontext } from './context'

const Home = () => {
const data = useGlobalontext()
 
  console.log(data)
  return (
    <main>
      <button className="sidebar-toggle">
        <FaBars/>
      </button>
      <button className="btn">show modal</button>
    </main>
  )
}

export default Home
