import React from "react";
import "./App.css";

const App = () => {
  // const arr=[1,2,3,4,5];
  const arr = [
    {
      id: 1,
      name: "Alice",
    },
    {
      id: 2,
      name: "Bob",
    },
  ];

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

    </div>
  );
};

export default App;
