

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [toDos, setTodos] = useState([]);
  const [toDo, setTodo] = useState("");
  
  useEffect(() => {
    console.log(toDos);
  }, [toDos]);

  const addTodo = () => {
    if (toDo) {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo("");
      console.log(toDos); 
    }
  };

  const deleteTodo = (id) => {
    setTodos(toDos.filter(todo => todo.id !== id)); // Filter out the todo with the matching id
  };

  const date = new Date();
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const dayName = days[date.getDay()];

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it is {dayName} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input 
          value={toDo} 
          onChange={(e) => setTodo(e.target.value)} 
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
                <input onChange={(e) => {
                  setTodos(toDos.map(obj2 => {
                    if (obj2.id === obj.id) {
                      return { ...obj2, status: e.target.checked }; // Update status without mutating
                    }
                    return obj2;
                  }));
                }} value={obj.status} type="checkbox" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i 
                  className="fas fa-times" 
                  onClick={() => deleteTodo(obj.id)} // Call delete function
                ></i>
              </div>
            </div>
          );
        })}
        {toDos.map((obj, index) => {
          if (obj.status) {
            return (<h1 key={index}>{obj.text}</h1>);
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
