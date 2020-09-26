import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

// Test de branch //

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>Lenny's Todo List</header>
      <Form inputText= {inputText} 
            setInputText={setInputText}
            todos={todos} 
            setTodos={setTodos}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
