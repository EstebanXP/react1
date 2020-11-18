import React, { useState, useEffect } from "react";
import {bdd} from './firebase'


function App() {
  const [todos, setTodos] = useState([])
  const getTodos=async()=>{
    const data = await bdd.collection('todos').get()
    const resul=data.docs.map(doc=>({id: doc.id, ...doc.data()}))
    setTodos(resul)
    console.log(resul)
  }

  useEffect(()=>{
    getTodos()
  },[])

  return (
    <div >
      <h1>Hola mundo</h1>
      <ul>
        {
          todos.map(item=>(
            <li key={item.id}>
              {item.todos1}
            </li>
          ))
        } 
      </ul>
    </div>
  );
}

export default App;
