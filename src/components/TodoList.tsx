import React from 'react'
import TodoItem from './TodoItem'

export const TodoList = () =>{
  return(
    <div className="todo__list">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  )
}