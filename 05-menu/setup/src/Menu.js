import React from 'react'

const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((item) => {
        const { id, title, img, desc,price } = item
        return (
    <article className="menu-item" key={id}>
      <img src={img} className='photo' />
<div className="item-info">
  <header>
    <h4>{title}</h4>
    <h4>{price}</h4>
  </header>
  <p className="item-text">{desc}</p>

</div>

    </article>
        )
      })}
    </div>
  )
}

export default Menu
