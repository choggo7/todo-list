import React from 'react'

const TodoItem = (props: TodoItemInterface) => {
  return (
    <div className="todo__item">

      <input type="text" value={props.todo.text} onBlur={props.handleTodoBlur} onChange={(e: React.ChangeEvent<HTMLInputElement>) => { props.handleTodoUpdate(e, props.todo.id) }} className="todo__item--input" />
      TodoItem !
      <div className="todo__item--container" onClick={() => { props.handleTodoComplete(props.todo.id) }} >
        {props.todo.isCompleted ? (<span className="todo__item--checked">✔</span>) : (<span className="todo__item--unchecked"></span>)}
      </div>
      <div className="todo__item--remove" onClick={() => { props.handleTodoRemove(props.todo.id) }}>⨯</div>

    </div>
  )
}

export default TodoItem