import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>Lenny's Todo List</header>
      <Form setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
