import React, { useState, FC } from 'react';
import './App.css';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';


const App = () => {

const [todos, setTodos] = useState<TodoInterface[]>([])

const handleTodoCreate =(todo: TodoInterface) => {
  const newTodosState: TodoInterface[] = [...todos]
  newTodosState.push(todo)
  setTodos(newTodosState)
}

const handleTodoUpdate =(event: React.ChangeEvent<HTMLInputElement>, id: string) => {
  const newTodosState: TodoInterface[] = [...todos]
  newTodosState.find((todo: TodoInterface) => todo.id === id)!.text = event.target.value
  setTodos(newTodosState)
}

const handleTodoRemove = (id: string) => {
  const newTodosState: TodoInterface[] = todos.filter((todo: TodoInterface) => todo.id !== id)
  setTodos(newTodosState)
}

const handleTodoComplete = (id: string) => {
  const newTodosState: TodoInterface[] = [...todos]
  newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted = !newTodosState.find((todo: TodoInterface) => todo.id === id)!.isCompleted
  setTodos(newTodosState)
}

const handleTodoBlur = (event: React.ChangeEvent<HTMLInputElement>) =>{
  if (event.target.value.length === 0) {
    event.target.classList.add('todo-input-error')
  } else {
    event.target.classList.remove('todo-input-error')
  }
}



  return (
    <div className="App">
      <p className='description' >Add your task and hit enter 😎</p>
      <TodoForm todos={todos} handleTodoCreate={handleTodoCreate} />
      <TodoList 
      todos={todos}
      handleTodoUpdate={handleTodoUpdate}
      handleTodoRemove={handleTodoRemove}
      handleTodoComplete={handleTodoComplete}
      handleTodoBlur={handleTodoBlur}
      />

      <ul className="about">
        <li>About</li>
        <li className='uncomplet'><span>⚪</span> task not complet</li>
        <li className='complet' ><span>✔</span> task complet</li>
        <li className='remove'><span>⨯</span> to remove task</li>
      </ul>

    </div>
  );
}

export default App;
