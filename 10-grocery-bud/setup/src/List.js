import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items }) => {
  return (
    <div className='gerocery list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <article key={id} className='gerocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button className='edit-btn'>
                <FaEdit />
              </button>
            </div>

            <button className='delete-btn'>
              <FaTrash />
            </button>
          </article>
        )
      })}
    </div>
  )
}

export default List
