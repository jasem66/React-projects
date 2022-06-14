import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        const { id, img, title, desc,price } = menuItem
        return (
          <article key={id} className='menu-item'>
            <img src={img} alt={title} className='photo' />
            <header>
              <h4>{title}</h4>
              <h4 className='price'>${price}</h4>
            </header>
            <p>{desc}</p>
          </article>
        )
      })}
    </div>
  )
}

export default Menu
