

import { useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");

  const addTodo = () => {
    if (toDo) {
      setTodos([...toDos, {id:Date.now(),text : toDo, status : false}]); // Spread the current todos and add the new one
      setTodo(""); 
    }
  };
  // const show =()=>{
  //   console.log(toDos);
  // }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it is Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) =>{ setTodo(e.target.value)}
          } 
          type="text" 
          placeholder="🖊️ Add item..." 
        />
        <i onClick={addTodo} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {toDos.map((obj, index) => {
          return (
            <div className="todo" key={index}>
              <div className="left">
                <input onChange={(e)=>{
                  console.log(e.target.value);
                  console.log(obj);
                  setTodos(toDos.filter(obj2=>{
                    if(obj2.id === obj.id){
                      obj2.status = e.target.checked
                    }
                    return obj2;
                  }))
                }} value={obj.status} type="checkbox" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i className="fas fa-times"></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj,index)=>{
          if(obj.status){
            return(<h1 key={index}>{obj.text}</h1>)
          }
          return null
        })}
        {/* <button onClick={show}>show</button> */}
      </div>
    </div>
    
  );
}

export default App;
