import React, { useState } from 'react'
import shortid from 'shortid'

export const TodoForm = (props: TodoFormInterface) => {
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [formState, setFormState] = useState('')

  const hundleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(e.target.value)
  }

  const hundleInputEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        text: formState,
        isCompleted: false
      }
      props.handleTodoCreate(newTodo)

      if (inputRef && inputRef.current) {
        inputRef.current.value = ""
      }

    }
  }
  const hundleInputClick = (e: React.MouseEvent<HTMLElement>) => {
    const newTodo: TodoInterface = {
      id: shortid.generate(),
      text: formState,
      isCompleted: false
    }
    props.handleTodoCreate(newTodo)

    if (inputRef && inputRef.current) {
      inputRef.current.value = ""
    }
  }

  return (
    <div className="todo__form">
      <input ref={inputRef} type="text" placeholder='Add new task' className="todo__text" onChange={e => hundleInputChange(e)} onKeyPress={e => hundleInputEnter(e)} />
      <div className="todo__butoon" onClick={e => hundleInputClick(e)} > Create </div>
    </div>
  )
}

