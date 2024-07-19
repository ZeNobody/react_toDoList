import React, { useState } from 'react';

import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

function App() {
  const [todo, setToDos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade no sistema",
      category: "Trabalho",
      isCompleted: false,
    }, 
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    }, 
    {
      id: 3,
      text: "Estudar React",
      category: "Trabalho",
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todo, 
      {
        id: Math.floor(Math.random()* 10000), //Alterar quando adicionar banco de dados
        text,
        category,
        isCompleted: false
      },
    ];

    setToDos(newTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todo.map((todo) => {
          return (
            <Todo key={todo.id} todo={todo}/>
          );
        })}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
