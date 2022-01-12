
import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import Footer from './components/footer';



function App() {
  return (

    <div className="todo-app">
      <TodoList />
      
      <div>
      <Footer/> 
      </div>

    </div>


    
  );
}

export default App;
