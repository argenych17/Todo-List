import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoSliceActions } from '../../state/todoSlice'
import css from "./CreateTodo.css"

export default function CreateRodo(props) {
  const [value, setValue] = useState("")
  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault()
    setValue("")
    dispatch( todoSliceActions.addTodo(value))

  }
  const handleChange = (event) => {
    setValue(event.target.value)
  }



  return (
    <form onSubmit={submit} className='wrapper' >

      {/* <div>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <button onClick={() => setCount(count - 1)} >-</button>
      </div> */}

      <input value={value}
        onChange={handleChange}
        type="text"
        placeholder='Enter todo'
        autoFocus
        />
      <button>Submit</button>
    </form>
  )
}
