import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return <h2 className='section-title'>cocktail is not found</h2>
  }

  return (
    <div>
      <h2>our cocktails</h2>
      {cocktails.map((item) => {
        // const { name, info, id, image, glass } = item
        return <Cocktail key={item.id} {...item}/>
      })}
    </div>
  )
}

export default CocktailList
