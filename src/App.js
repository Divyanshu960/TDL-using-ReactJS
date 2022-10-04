import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React, { useState } from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
function App() {
  const onDelete = (todo) => {
     console.log("Im onDelete",todo);
     //aise nhi hoga delete
    // let index = todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e)=> {
      return e!== todo;
    }))
  }

 const [todos,setTodos] =useState([
  {
    sno: 1,
    title : "Go to the market",
    desc : "You need to go to the market"
  },
  {
    sno: 2,
    title : "Go to the School",
    desc : "You need to go now"
  },
  {
    sno: 3,
    title : "Go to the Office",
    desc : "You need to go to their"
  }
]);

  return (
    <>
    <Header title = "My Todos List" searchBar ={false}/>
    <AddTodo/>
    <Todos  todos = {todos} onDelete ={onDelete}/> 
    <Footer/>
    
    </>
  );
}

export default App;
