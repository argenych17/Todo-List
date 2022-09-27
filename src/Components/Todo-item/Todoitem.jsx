import React from 'react'
import css from "./Todoitem.module.css"
import { MdDelete, MdEditOff, MdGames} from "react-icons/md";
import { useState } from 'react';
export default function Todoitem(props) {

  const [isInputShow, setInputShow] = useState(false)
  const [micro, setMicro] = useState(props.text)

  const onEdit = () => {
    setInputShow(!isInputShow)
  }
  const onDelete = () => {
    props.handleDelete(props.id )
  }
  const handleChange = (e) => {
    setMicro(e.target.value)
  }
  const status = () => {
    props.handleStatus()
  }
  
  const submit = (e) => {
    e.preventDefault()
    props.handleEdit(props.id , micro )
    setInputShow(false)
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
          <input type="checkbox" onChange={() => props.handleStatus(props.id)} checked={props.status} />
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
