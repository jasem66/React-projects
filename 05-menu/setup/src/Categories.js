import React from 'react';

const Categories = ({categories,filterItems,priceProducts}) => {
return <>
<div className="btncontainer">
  {categories.map((category,index)=>{return (
<button type='button' className='filter-btn' key={index}
onClick={()=>filterItems(category)}>{category}</button>
)})}</div>
<button className="filter-btn" onClick={()=>{
  priceProducts(16.99)
}} >price</button>
</>
};

export default Categories;
