import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import TodoList from './components/TodoList';
import { useState } from 'react';
function App() {
  const [todos,setTodos] = useState([]);
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Form todos={todos} setTodos={setTodos}/>
        <TodoList todos={todos} setTodos={setTodos}/>
      </div>
     
    </div>
  );
}

export default App;
