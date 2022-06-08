import React, { useState, FC } from 'react';
import './App.css';
import { TodoList } from './components/TodoList';

const initialeTodos: TodoInterface[] = [{ id: "1", text: "my first task", isCompleted: true },
{ id: "1", text: "my first task", isCompleted: true },
{ id: "1", text: "my first task", isCompleted: true },
{ id: "1", text: "my first task", isCompleted: false }]
const App: FC = () => {

const [todos, setTodos] = useState<TodoInterface[]>(initialeTodos)



  return (
    <div className="App">
      <TodoList todos={todos}  />
    </div>
  );
}

export default App;
