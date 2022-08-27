import React, { useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const{setSearchTerm}=useGlobalContext()
const searchValue= React.useRef()

useEffect(() => {
searchValue.current.focus()
}, [])

const handleSubmit=(e)=>{
  e.preventDefault()
}

const searchCocktail=()=>{
  setSearchTerm(searchValue.current.value)
}
  return (
    <section>
      <form onSubmit={handleSubmit} className='search-form'>
        <div>
          <label htmlFor='name'>search for your cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
          {/* <button type='submit' className='btn' onClick={searchCocktail}>
            Search
          </button> */}
        </div>
      </form>
    </section>
  )
}

export default SearchForm
