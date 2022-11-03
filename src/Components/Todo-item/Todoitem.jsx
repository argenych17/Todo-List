import React from 'react'
import css from "./Todoitem.module.css"
import { MdDelete, MdEditOff, MdGames} from "react-icons/md";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { todoSliceActions } from '../../state/todoSlice';
export default function Todoitem(props) {

  const [isInputShow, setInputShow] = useState(false)
  const [micro, setMicro] = useState(props.text)
  const dispatch = useDispatch()
  const obj = {
    id: props.id ,
    text: props.text
  }

  const onEdit = () => {
    setInputShow(!isInputShow)
  }
  const onDelete = () => {
    // props.handleDelete(props.id )
    dispatch(todoSliceActions.deleteTodo(props.id))
  }
  const handleChange = (e) => {
    setMicro(e.target.value)
  }
  const handleStatus = () => {
    dispatch(todoSliceActions.changeStatus(props.id))
  }
  
  const submit = (e) => {
    e.preventDefault()
    setInputShow(false)
    dispatch(todoSliceActions.editTodo({id: props.id , newText:micro}))

  }
  return (
    <div className={css.wrapper}>
      {isInputShow ? (
        <form onSubmit={submit} >
          <input
            value={micro}
            onChange={handleChange}
            type="text"
            placeholder='Todo'
            autoFocus
            />
          <button onClick={props.handleEdit} ><MdGames/></button>
        </form>
      ) : (
        <label>
          <input type="checkbox" onChange={handleStatus} checked={props.status} />
          <span className={props.status === true ? css.text : " "}>{props.text}</span>
        </label>
      )
      }
      <div>
        <button onClick={onEdit}  className={css.Edit} ><MdEditOff /></button>

        <button onClick={onDelete} className={css.Delete}  ><MdDelete /></button>
      </div>
    </div>
  )
}
