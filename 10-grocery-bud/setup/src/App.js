import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
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
  setList(list.map((item)=>{
    if(item.id===editId){
      return {...item,title:name}
    }
    return item
  }))

  setName('')
  setEditId(null)
  setIsEditing(false)
  showAlert(true,"success",'value changed')
    } else {
      // show alert
      showAlert(true,"success",'submited')
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
      setName('')
    }
  }
  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg })
  }

  const clearList =()=>{
     showAlert(true, 'danger', 'empty')
     setList([])
  }
  const removeItem=(id)=>{
      showAlert(true, 'danger', 'removed')
      setList( list.filter((item)=> item.id !== id) )

  }

const editItem=(id)=>{
const specificItem=list.find((item) => item.id === id)
setIsEditing(true)
setEditId(id)
setName(specificItem.title)
}


  return (
    <section className='section-center'>
      <form onSubmit={handleSubmit} className='gerocery-form'>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

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
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear item
          </button>
        </div>
      )}
    </section>
  )
}

export default App
