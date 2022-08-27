import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ name, info, id, image, glass }) => {

  return (
    <article>
      <h2>{name}</h2>
      <p>{glass}</p>
      <div className='img-container'>
        <img src={image} alt='' />
        <Link className="btn" to={`/cocktail/${id}`}>
     see more
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
