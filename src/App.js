import React from "react";
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
        <form className="todoForm">
          <input type="text" />
          <button>Go</button>
        </form>
        <ul className="allTodos">
          <li className="singleTodo">
            <span className="todoText">Learn React</span>
            <button>Edit</button>
            <button>Delete</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default App;
