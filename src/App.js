import React, {useState, useEffect} from 'react'
import axios from 'axios'

import TodoList from './components/TodoList/TodoList';
import TodoCreate from './components/TodoCreate/TodoCreate';
import Paginate from './components/Paginate/Paginate';

import './App.css';

const App = () => {
  const [todos, setTodos] = useState([])
  const [pageNum, setPageNum] = useState(1)
  const [pageData, setPageData] = useState([])


  const pageWindow = 10
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then((data) => {
      setTodos(data.data)
      setPageData(data.data.slice(0,pageWindow))
    })
  },[])

  useEffect(()=>{
    const offset = (pageNum-1)*pageWindow
    const newPageData = todos.slice(offset, offset + pageWindow )
    setPageData(newPageData)
  }, [pageNum, todos])

  const toggleTodo = (id) => {
    const newTodo = [...todos].map((todo) => {
      if(todo.id===id) {
        todo.completed = !todo.completed
      }
      return todo
    })

    setTodos(newTodo)
  }

  const createTodo = (title) => {
    const newTodo = {
      id:todos.length+1,
      title,
      completed: false 
    }
    setTodos([newTodo, ...todos])
    
  }


  return (
    <div className="App">
      <TodoCreate createTodo={createTodo}/>
      {todos.length > 0 ? <TodoList todos={pageData} toggleTodo={toggleTodo}/> : <p>Loading...</p>}
      <Paginate todosLength={todos.length} pageWindow={pageWindow} pageNum={pageNum} setPageNum={setPageNum}/>
    </div>
  );
}

export default App;
