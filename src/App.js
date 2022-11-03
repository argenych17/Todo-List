import './App.css';
import CreateRodo from './Components/create-todo/CreateRodo';
import Header from './Components/Header/Header';
import Todoitem from './Components/Todo-item/Todoitem';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';


function App() {
  const arr = useSelector((state) => state.todos.data)
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(arr))
  }, [arr])


  const result = arr.reduce((acc, item) => {
    return acc + Number(item.status)
  }, 0)

  const todoLists = arr.map((item) => {
    return <Todoitem
      key={item.id}
      id={item.id}
      text={item.text}
      status={item.status}
    />
  })
  return (
    <div className="App">
      <Header length={arr.length} result={result} />
      <div className='content' >
        <CreateRodo />
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
