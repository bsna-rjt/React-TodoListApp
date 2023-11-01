import React, { useState } from "react";
import "./App.css";

const App = () => {
  // const arr=[1,2,3,4,5];
  // const arr = [
  //   {
  //     id: 1,
  //     name: "Alice",
  //   },
  //   {
  //     id: 2,
  //     name: "Bob",
  //   },
  // ];

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
    }
  };

  return (
    <div className="App">
      {/* {arr.map((num)=>(
      <div>{num} ,</div>
    ))} */}

      {/* using filter to display all numbers in an array except 3 */}
      {/* {arr.filter((num) => num != 3)} */}

      {/* {
      arr.map((num)=>{
        return(
          <div key={num.id}>{num.name}</div>
        )
      })
    } */}

      <div className="container">
        <h1>To-do List App</h1>
        <form className="todoForm" onSubmit={handleSubmit}>
          <input type="text" onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">Go</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText">{t.todo}</span>
              <button>Edit</button>
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
