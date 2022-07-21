import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [edited, setEdited] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: 'hello',
    type: 'danger',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      showAlert(true,'danger','please enter value')
    } else if (name && isEditing) {
      setAlert(true,"success",'jjjfj')
    } else {
      // show alert
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }
  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='gerocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <h3>gerocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='cerocery'
            placeholder=' eggs'
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
          <button className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='gerocery-container'>
          <List items={list} />
          <button className='clear-btn'>clear item</button>
        </div>
      )}
    </section>
  )
}

export default App
