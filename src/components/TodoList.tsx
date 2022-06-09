import React, { useState } from 'react'
import TodoItem from './TodoItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

export const TodoList = (props: TodoListInterface) => {
  //const [todos, setTodos] = useState<TodoInterface[]>([])
  

  return (
    <div className="todo__list">

      <ul>
        <TransitionGroup component="ul">
          {props.todos.map((todo) => (
            <CSSTransition key={todo.id} timeout={700} classNames="item">
              <li key={todo.id} >
                <TodoItem todo={todo} handleTodoBlur={props.handleTodoBlur} handleTodoComplete={props.handleTodoComplete} handleTodoRemove={props.handleTodoRemove} handleTodoUpdate={props.handleTodoUpdate} />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>

    </div>
  )
}