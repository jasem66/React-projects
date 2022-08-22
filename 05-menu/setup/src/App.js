import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';



function App() {

 const allCategories= ['all',...new Set (items.map((item)=> item.category))]

const [menu, setMenu] = useState(items)
const [categories, setCategories] = useState(allCategories)

  const controlFilters =(category)=>{
    if(category==='all'){
      setMenu(items)
      return
    }
  const newMenu = items.filter((item)=> item.category===category)
 setMenu(newMenu)

}
  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories
          categories={categories}
          controlFilters={controlFilters}
        />
        <Menu menu={menu} />
      </section>
    </main>
  )


}

export default App;
