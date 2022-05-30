import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

  const allCategories =
   ["all",...new Set(items.map((item)=>item.category))];
  console.log(allCategories); 

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);



  const filterItems = (category) =>{
  if(category==="all"){
setMenuItems(items);
return items;
  }
 const newItems = items.filter((item)=>item.category === category);
setMenuItems(newItems)
}
const priceProducts =(price)=>{
  const newPrice = items.filter((food)=>food.price === price);
  setMenuItems(newPrice)
}

  return <main>
    <div className="menu section">
    <div className="title">
      <h2>our menu</h2>
      <div className="underline"></div>
    </div>
    <Categories categories={categories} priceProducts={priceProducts} filterItems={filterItems}  />
    <Menu items={menuItems} />
    </div>
  </main>
}

export default App;
