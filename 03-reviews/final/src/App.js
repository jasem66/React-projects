import React, { useState } from 'react'
import Review from './Review'
import reviewss from './data'
function App() {
  const [reviews, setreviews] = useState(reviewss)

  const deleteI = (id) => {

    const newItem = reviews.filter((item) => (
  item.id !== id)
    )
    setreviews(newItem)

  }

  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>
        </div>
        {reviews.map((item) => {
          return <Review deleteI={deleteI} key={item.id} {...item} />
        })}
      </section>
    </main>
  )
}

export default App
