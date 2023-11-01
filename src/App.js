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
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((x) => x.id === editId);
      const updatedTodos = todos.map((t) =>
        t.id === editTodo.id
          ? (t = { id: t.id, todo })
          : { id: t.id, todo: t.todo }
      );
      setTodos(updatedTodos);
      setEditId(0);
      setTodo("");
      return;
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo("");
    }
  };

  const handleDelete = (id) => {
    const delTodo = todos.filter((to) => to.id !== id);
    setTodos([...delTodo]);
  };

  const handleEdit = (id) => {
    const editTodo = todos.find((x) => x.id === id);
    setTodo(editTodo.todo);
    setEditId(id);
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
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit">{editId ? "Edit" : "Go"}</button>
        </form>
        <ul className="allTodos">
          {todos.map((t) => (
            <li className="singleTodo">
              <span className="todoText" key={t.id}>
                {t.todo}
              </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button
                onClick={() => {
                  handleDelete(t.id);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
