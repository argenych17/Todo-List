import './App.css';
import CreateRodo from './Components/create-todo/CreateRodo';
import Header from './Components/Header/Header';
import Todoitem from './Components/Todo-item/Todoitem';
import { useEffect, useState } from 'react';


function App() {

  const [arr, setArr] = useState(JSON.parse(localStorage.getItem("todo")) || [] )
  
  useEffect(() => {
    console.log("state ");
    localStorage.setItem("todo" ,JSON.stringify(arr))
  },[arr])
  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status)
  }, 0)

  const handleDeleteTodo = (id) => {
    const newArr = arr.filter((item) => {
      return (
        item.id !== id
      )
    })
    setArr(newArr)
  }

  const handleStatus = (id) => {
    const status = arr.map((item) => {
      if (item.id === id) {
        return { ...item, status: !item.status }
      }
      return (
        item
      )
    })
    setArr(status)
  }
  const handleEdit = (id, newtext) => {
    const status = arr.map((item) => {
      if (item.id === id) {
        return { ...item, text: newtext }
      }
      return (
        item
      )
    })
    setArr(status)
  }

  const handleAddTodo = (newText) => {
    setArr([...arr, { text: newText, status: false, id: Date.now() }])
  }
  const todoLists = arr.map((item) => {
    return <Todoitem
      handleStatus={handleStatus}
      handleDelete={handleDeleteTodo}
      id={item.id}
      text={item.text}
      status={item.status}
      handleEdit={handleEdit}
    />
  })

  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className='content' >
        <CreateRodo AddNewTodo={handleAddTodo} />
        <div className='todos-wrapper'  >
          {todoLists.length
            ? todoLists
            : <h2 className={'watermark'} >Pleace add some Todo Element</h2>
          }
        </div>
      </div>
    </div >
  );
}

export default App;
