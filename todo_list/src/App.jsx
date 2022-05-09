import logo from './logo.svg';
import './App.css';

import React, {useState} from 'react'

function App() {
  // CREATE STATE TO KEEP TRACK OF ITEMS
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([])

  // CREATE A FUNCTION THAT ADDS TO ITEMS LIST
  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (newTodo.length ===0){
      return;
    }
    const todoItem= {
      text: newTodo,
      complete: false
    }
    // setTodos AND PASS IN A BRAND NEW ARRAY CONTAINING ALL CURRENT TODOS PLUS 1 MORE.
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  // CREATE A FUNCTION THAT REMOVES A ITEM FROM LIST
  const removeItems = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    });
    setTodos(filteredTodos)
  }

  const handleTodoComplete = (idx) => {
    const updatedTodos = todos.map((todo,i)=> {
      if (idx === i ){
        // to avoid mutating directly
        // todo.complete = !todo.complete
        const updatedTodo = {...todo, complete: !todo.complete};
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <fieldset style={{textAlign:'center'}}>
      <form onSubmit={(event) => {handleSubmit(event)}}>
        <input type="text" onChange={(event) => {setNewTodo(event.target.value)}} style={{marginLeft: "5px"}}/>
        <button>Add</button>
      </form>
      {todos.map((todo, i)=> {
        const todoClasses = [];

        if (todo.complete) {
          todoClasses.push("line-through");
        }

        return (
        <div >
          <span className={todoClasses.join("")}>{todo.text}</span>
          <input onChange={(event)=>{
            handleTodoComplete(i);
          }}             
          checked={todo.complete} type="checkbox" />
          <button onClick={(event) =>{
            removeItems(i);
          }}>Delete</button>
        </div>
        )
      })}
    </fieldset>
  );
}

export default App;