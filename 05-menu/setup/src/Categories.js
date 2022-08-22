import React from 'react';

const Categories = ({ categories, controlFilters }) => {
  console.log(categories)
  return (
    <div className='btn-container'>
      {categories.map((item,index) => {
 
       return( <button
      
          className='filter-btn'
           onClick={() => controlFilters(item)}
        >
          {item}
        </button>)
      })}

    </div>
  )
}

export default Categories;
