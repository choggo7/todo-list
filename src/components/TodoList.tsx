import React,{useState} from 'react'
import TodoItem from './TodoItem'

export const TodoList = (props:TodoListInterface) =>{
  const [todos,setTodos] = useState<TodoInterface[]>([])

  return(
    <div className="todo__list">

      <ul>
       { props.todos.map((todo) => ( <li key={todo.id} >  <TodoItem todo={todo} handleTodoBlur={props.handleTodoBlur} handleTodoComplete={props.handleTodoComplete} handleTodoRemove={props.handleTodoRemove} handleTodoUpdate={props.handleTodoUpdate} />  </li> ) ) }
      </ul>

    </div>
  )
}