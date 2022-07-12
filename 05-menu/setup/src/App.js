import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['All',...new Set(items.map((item) => item.category))] 
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories)

  const filterItems = (category) => {
    const newItems = items.filter((item) => item.category === category
    )
    if(category=== 'All'){
  setMenuItems(items)
  return
    }
    
    setMenuItems(newItems)
  }
  
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )


}

export default App;
